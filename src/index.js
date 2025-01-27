import "./style.css";
import historySearch from "./HistorySearch";
import * as ymaps3 from "ymaps3";

const apiKey = "f7f0f48145544647b19130539240210";

function formatDateTime(date) {
  const day = date.toLocaleDateString("ru-RU", { weekday: "short" });
  const time = date.toLocaleTimeString("ru-RU", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return `${day}, ${time}`;
}

function displayWeatherInfo(temp, city, icon, weatherData = null) {
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

async function initMap(longitude, latitude) {
  await ymaps3.ready;
  const { YMap, YMapDefaultSchemeLayer } = ymaps3;
  const mapElement = document.getElementById("map");

  if (mapElement.map) {
    mapElement.map.update({
      location: {
        center: [longitude, latitude],
        zoom: 10,
      },
    });
  } else {
    const map = new YMap(mapElement, {
      location: {
        center: [longitude, latitude],
        zoom: 10,
      },
    });
    map.addChild(new YMapDefaultSchemeLayer());
    mapElement.map = map;
  }
}

async function fetchWeatherByCoords(latitude, longitude) {
  try {
    const weatherApi = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${latitude},${longitude}&aqi=no`,
    );
    if (!weatherApi.ok) throw new Error("API не получен");

    const result = await weatherApi.json();
    const temp = Math.floor(result.current.temp_c);
    const city = result.location.name;
    const iconUrl = `https:${result.current.condition.icon}`;
    const windKph = result.current.wind_kph;
    const humidity = result.current.humidity;
    const localTime = new Date(result.location.localtime);
    const formattedTime = formatDateTime(localTime);

    displayWeatherInfo(temp, city, iconUrl, {
      windKph,
      humidity,
      formattedTime,
    });
    initMap(longitude, latitude);
  } catch (error) {
    console.error("Ошибка запроса:", error);
    displayWeatherInfo(
      "Ошибка",
      "Произошла ошибка при обращении к серверу",
      "",
      null,
    );
  }
}

async function fetchWeatherByCity(city) {
  try {
    const weatherApi = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`,
    );
    if (!weatherApi.ok) {
      displayWeatherInfo(
        "Ошибка",
        `Ошибка HTTP: ${weatherApi.status} ${weatherApi.statusText}`,
        "",
        null,
      );
      console.error(
        "Ошибка запроса:",
        `Ошибка HTTP: ${weatherApi.status} ${weatherApi.statusText}`,
      );
      return;
    }

    const result = await weatherApi.json();
    if (!result || !result.location || !result.current) {
      displayWeatherInfo("Ошибка", "Неверный формат ответа от API", "", null);
      console.error("Ошибка запроса: Неверный формат ответа от API", result);
      return;
    }
    const temp = Math.floor(result.current.temp_c);
    const nameCity = result.location.name;
    const { lon, lat } = result.location;
    const iconUrl = `https:${result.current.condition.icon}`;
    const windKph = result.current.wind_kph;
    const humidity = result.current.humidity;
    const localTime = new Date(result.location.localtime);
    const formattedTime = formatDateTime(localTime);
    displayWeatherInfo(temp, nameCity, iconUrl, {
      windKph,
      humidity,
      formattedTime,
    });
    initMap(lon, lat);
    historySearch.addCity(nameCity, temp); // Добавляем вызов addCity
  } catch (error) {
    console.error("Ошибка запроса:", error);
    displayWeatherInfo(
      "Ошибка",
      "Произошла ошибка при обращении к серверу",
      "",
      null,
    );
  }
}

function router() {
  const hash = window.location.hash.slice(1);
  if (hash.startsWith("weather/")) {
    const city = hash.slice(8);
    fetchWeatherByCity(city);
  } else {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      fetchWeatherByCoords(latitude, longitude);
      initMap(longitude, latitude),
        (error) => {
          console.error("Ошибка геолокации:", error);
        };
    });
  }
}

document
  .getElementById("search-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const valueCity = document.getElementById("inputCity").value;
    const valueCityStr = valueCity.trim();
    window.location.hash = `weather/${valueCityStr}`;
    document.getElementById("inputCity").value = "";
  });

window.addEventListener("hashchange", router);
router();

document.getElementById("delHistory").addEventListener("click", () => {
  historySearch.delHistory();
});
