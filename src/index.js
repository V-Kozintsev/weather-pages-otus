import './index.css';

const map = document.getElementById('map');

async function loadMap() {
  const apiKey = 'ccb284d51487d0a559e0961cfc61e03c';
  try {
    const position = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    // Делаем запрос на openWeatherMap
    const openWeatherMap = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

    // Получаем температуру
    map.src = `https://static-maps.yandex.ru/1.x/?ll=${longitude},${latitude}&size=400,300&z=10&l=map`;
    const response = await fetch(openWeatherMap);
    const data = await response.json();
    const temp = Math.floor(data.main.temp - 273.15);
    document.getElementById('temp').textContent = temp;
  } catch (error) {
    console.error('Ошибка запроса');
  }
}
loadMap();
