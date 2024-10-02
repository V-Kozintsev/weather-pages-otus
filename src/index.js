import './index.css';

const apiKey = 'f7f0f48145544647b19130539240210'; // API ключ

// Функция для обновления карты
function updateMap(latitude, longitude) {
  const mapUrl = `https://static-maps.yandex.ru/1.x/?ll=${longitude},${latitude}&size=400,300&z=10&l=map`;
  document.getElementById('map').src = mapUrl;
}

// Функция для отображения информации о погоде
function displayWeatherInfo(city, temp) {
  document.getElementById('city').innerText = `Город: ${city}`;
  document.getElementById('temp').innerText = `Температура: ${temp}°C`;
}

async function getLocationData() {
  navigator.geolocation.getCurrentPosition(async (succes) => {
    const { latitude, longitude } = succes.coords;

    const url = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${latitude},${longitude}&aqi=no`,
    );
    const data = await url.json();
    const city = data.location.name;
    const temp = Math.floor(data.current.temp_c);

    updateMap(latitude, longitude);
    displayWeatherInfo(city, temp);
    /* webpack test-3 */
  });
}
getLocationData();
