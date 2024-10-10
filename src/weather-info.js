// Функция для отображения в окне информации о погоде
export function displayWeatherInfo(city, temp) {
  document.getElementById('city').innerText = `Город: ${city}`;
  document.getElementById('temp').innerText = `Температура: ${temp}°C`;
}

// Функция для обновления карты
export function updateMap(latitude, longitude) {
  const mapUrl = `https://static-maps.yandex.ru/1.x/?ll=${longitude},${latitude}&z=10&l=map`;
  document.getElementById('map').src = mapUrl;
}
