import './index.css';

const apiKey = 'ccb284d51487d0a559e0961cfc61e03c';

async function initMap(longitude, latitude) {
  document.getElementById('map').src = `https://static-maps.yandex.ru/1.x/?ll=${longitude},${latitude}&size=400,300&z=10&l=map`;
}

async function getWeather(lat, lng) {
  const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}&units=metric`;
  try {
    const response = await fetch(weatherApiUrl);
    if (!response.ok) {
      throw new Error('Неудалось получить данные о погоде');
    } else {
      const data = await response.json();

      document.getElementById('map').innerText = data;
    }
  } catch (error) {
    document.getElementById('map').innerText = `Ошибка: ${error.message}`;
  }
}

async function currentMapLocation() {
  navigator.geolocation.getCurrentPosition(
    async (succes) => {
      const { longitude, latitude } = succes.coords;
      initMap(longitude, latitude);
      await getWeather(longitude, latitude);
    },
    (error) => {
      document.getElementById('map').innerText = `Ошибка: ${error.message}`;
    },
  );
}
currentMapLocation();
