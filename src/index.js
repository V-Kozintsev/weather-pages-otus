import './index.css';

const searchHistory = document.querySelector('.weather-description');

const map = document.getElementById('map');
const apiWeather = '18409888b2bac46281ada6424268e0af';

async function loadMap() {
  // Проверка поддержки геолокации
  if (!navigator.geolocation) {
    console.error('Геолокация не поддерживается вашим браузером.');
    return;
  }

  /// / Загрузка карты по текущему местоположению
  try {
    const position = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
    const { latitude, longitude } = position.coords;
    map.src = `https://static-maps.yandex.ru/1.x/?ll=${longitude},${latitude}&size=400,300&z=10&l=map`;

    const weatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiWeather}`,
    );

    if (!weatherResponse.ok) {
      throw new Error(`Ошибка запроса: ${weatherResponse.status}`);
    }
    const weatherData = await weatherResponse.json();

    if (weatherData.main.temp - 273.15 > 0) {
      searchHistory.textContent = `+${Math.floor(weatherData.main.temp - 273.15)}`;
    } else {
      searchHistory.textContent = `-${Math.floor(weatherData.main.temp - 273.15)}`;
    }

    console.log(`Долгота: ${longitude}, Широта: ${latitude}`);
    console.log(weatherData);
  } catch (error) {
    console.error('Ошибка при получении геолокации:', error);
  }
}

loadMap();
