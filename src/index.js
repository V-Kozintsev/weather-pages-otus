import './index.css';

const apiKey = 'f7f0f48145544647b19130539240210'; // API ключ
const inputValue = document.getElementById('form-input');
const weatherIcon = document.getElementById('weather-icon');
const btn = document.getElementById('btn');

// Функция для обновления карты
function updateMap(latitude, longitude) {
  const mapUrl = `https://static-maps.yandex.ru/1.x/?ll=${longitude},${latitude}&z=10&l=map`;
  document.getElementById('map').src = mapUrl;
}

// Функция для отображения информации о погоде
function displayWeatherInfo(city, temp) {
  document.getElementById('city').innerText = `Город: ${city}`;
  document.getElementById('temp').innerText = `Температура: ${temp}°C`;
}

async function geoCoder(city) {
  const cityDataUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;
  try {
    const response = await fetch(cityDataUrl);
    if (!response.ok) throw new Error('Ошибка сети');

    const data = await response.json();
    const cityName = data.location.name;
    const temp = Math.floor(data.current.temp_c);
    const longitude = data.location.lon;
    const latitude = data.location.lat;
    const iconUrl = `https:${data.current.condition.icon}`;
    weatherIcon.src = iconUrl;

    updateMap(latitude, longitude);
    displayWeatherInfo(cityName, temp);
  } catch (error) {
    alert('Ничего не найдено');
    console.error('Ошибка запроса', error);
  }
}
btn.addEventListener('click', (event) => {
  event.preventDefault();
  geoCoder(inputValue.value.trim());
});
async function getLocationData() {
  navigator.geolocation.getCurrentPosition(async (succes) => {
    const { latitude, longitude } = succes.coords;

    const url = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${latitude},${longitude}&aqi=no`,
    );
    const data = await url.json();
    const city = data.location.name;
    const temp = Math.floor(data.current.temp_c);
    const iconUrl = `https:${data.current.condition.icon}`;
    weatherIcon.src = iconUrl;

    updateMap(latitude, longitude);
    displayWeatherInfo(city, temp);
  });
}
getLocationData();
