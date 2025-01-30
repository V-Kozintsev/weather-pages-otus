export function displayWeatherInfo(temp, city, icon, weatherData = null) {
  const weatherDisplay = document.querySelector(".displayWeatherInfo");
  let content = `
          <p class="weather-description" id="city">${temp}°C</p>
          <p class="weather-description" id="temp">${city}</p>
           `;
  if (icon) {
    content += `<img id="weather-icon" src="${icon}" alt="Иконка погоды" />`;
  }
  if (weatherData) {
    content += `
           <p class="weather-description">Дата и время: ${weatherData.formattedTime}</p>
            <p class="weather-description">Скорость ветра: ${weatherData.windKph} km/h</p>
          <p class="weather-description">Влажность: ${weatherData.humidity}%</p>
            `;
  }
  weatherDisplay.innerHTML = content;
}
