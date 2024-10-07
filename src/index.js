import './index.css';

const apiKey = 'f7f0f48145544647b19130539240210'; // API ключ
const inputValue = document.getElementById('form-input');
const weatherIcon = document.getElementById('weather-icon');
const btn = document.getElementById('btn');
const searchHistory = document.getElementById('search-history');
const map = document.getElementById('map');
const dataHistory = [];

// Функция для обновления карты
function updateMap(latitude, longitude) {
  const mapUrl = `https://static-maps.yandex.ru/1.x/?ll=${longitude},${latitude}&z=10&l=map`;
  map.src = mapUrl;
}
// Функция для отображения в окне информации о погоде
function displayWeatherInfo(city, temp) {
  document.getElementById('city').innerText = `Город: ${city}`;
  document.getElementById('temp').innerText = `Температура: ${temp}°C`;
}

// Функция, принимающая координаты в виде широты и долготы,
// возвращает информацию о городе и текущей температуре.
export async function geoCoder(city) {
  const newItem = document.createElement('li');
  newItem.classList.add('search-history-item');
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

    const saveData = {
      city: cityName,
      temp,
    };
    localStorage.setItem('city', JSON.stringify(saveData));
    const cityLocal = localStorage.getItem('city');
    const newLocal = JSON.parse(cityLocal);

    const duplicateCity = dataHistory.some(
      (item) => item.city === saveData.city,
    );

    if (duplicateCity === false) {
      dataHistory.push(newLocal);
      newItem.textContent = saveData.city;
      searchHistory.appendChild(newItem);
    }

    if (searchHistory.childNodes.length > 10) {
      searchHistory.removeChild(searchHistory.childNodes[0]);
      dataHistory.shift();
    }

    updateMap(latitude, longitude);
    displayWeatherInfo(cityName, temp);

    newItem.addEventListener('click', (event) => {
      event.preventDefault();
      displayWeatherInfo(newLocal.city, newLocal.temp);
      weatherIcon.src = iconUrl;
      updateMap(latitude, longitude);
    });
  } catch (error) {
    console.error('Ошибка запроса', error);
  }
}

// Кнопка, при нажатии на которую,
// отображает название города и текущую температуру, введенные в поле ввода (input).
btn.addEventListener('click', (event) => {
  event.preventDefault();
  geoCoder(inputValue.value.trim());
  inputValue.value = '';
});

// Функция отображает текущую геолокацию,погоду и карту
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
  // тест
}
getLocationData();
