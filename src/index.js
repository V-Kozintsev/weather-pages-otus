import './index.css';

const apiKey = 'f7f0f48145544647b19130539240210'; // API ключ
const inputValue = document.getElementById('form-input');
const weatherIcon = document.getElementById('weather-icon');
const btn = document.getElementById('btn');
const searchHistory = document.getElementById('search-history');

const dataHistory = JSON.parse(localStorage.getItem('dataHistory')) || [];
// Функция для обновления карты
function updateMap(latitude, longitude) {
  const mapUrl = `https://static-maps.yandex.ru/1.x/?ll=${longitude},${latitude}&z=10&l=map`;
  document.getElementById('map').src = mapUrl;
}

// Функция которая собирает данные погоду и город
function saveData(cityData, tempData) {
  // Получаем список элементов <li> внутри элемента searchHistory
  const listItems = searchHistory.getElementsByClassName('search-history-item');
  const newItem = document.createElement('li');
  newItem.className = 'search-history-item';

  // Создаем объект для сохранения данных
  const dataSaveHistory = {
    city: cityData,
    temp: tempData,
  };

  newItem.textContent = dataSaveHistory.city;
  const exists = listItems.some((item) => item.textContent === cityData);
  if (exists) {
    return; // Выходим из функции, если город уже существует
  }
  // Добавляем новый элемент в список
  searchHistory.appendChild(newItem);
  dataHistory.push(dataSaveHistory); // Сохраняем данные в массиве

  // Проверяем количество элементов <li>
  if (listItems.length > 3) {
    // Удаляем первый элемент, если элементов больше 3
    searchHistory.removeChild(listItems[0]);
    dataHistory.shift(); // Удаляем первое сохранение из массива данных
  }
}
// Функция для отображения в окне информации о погоде
function displayWeatherInfo(city, temp) {
  document.getElementById('city').innerText = `Город: ${city}`;
  document.getElementById('temp').innerText = `Температура: ${temp}°C`;
}
// Функция, принимающая координаты в виде широты и долготы,
// возвращает информацию о городе и текущей температуре.
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

    saveData(cityName, temp);

    updateMap(latitude, longitude);
    displayWeatherInfo(cityName, temp);
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
}
getLocationData();
