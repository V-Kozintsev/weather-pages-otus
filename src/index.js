import "./style.css";
import * as ymaps3 from "ymaps3";

navigator.geolocation.getCurrentPosition((position) => {
  const { latitude, longitude } = position.coords;
  updateMapDisplay(longitude, latitude);
  initMap(longitude, latitude);
});

async function initMap(longitude, latitude) {
  await ymaps3.ready;
  const { YMap, YMapDefaultSchemeLayer } = ymaps3;
  const map = new YMap(document.getElementById("map"), {
    location: {
      center: [longitude, latitude],
      zoom: 10,
    },
  });
  map.addChild(new YMapDefaultSchemeLayer());
}

async function updateMap(city) {
  try {
    const weatherApi = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=f7f0f48145544647b19130539240210&q=${city}&aqi=no`,
    );

    if (!weatherApi.ok) {
      const message = `Ошибка HTTP: ${weatherApi.status} ${weatherApi.statusText}`;
      displayWeatherInfo("Ошибка", message, "", null); // Передаем null для iconUrl в случае ошибки
      console.error("Ошибка запроса:", message);
      return;
    }

    const result = await weatherApi.json();

    if (!result || !result.location || !result.current) {
      displayWeatherInfo("Ошибка", "Неверный формат ответа от API", "", null); // Передаем null для iconUrl в случае ошибки
      console.error("Ошибка запроса: Неверный формат ответа от API", result);
      return;
    }

    const temp = Math.floor(result.current.temp_c);
    const nameCity = result.location.name;
    const { lon, lat } = result.location;
    const conditionText = result.current.condition.text;
    const feelsLikeTemp = Math.floor(result.current.feelslike_c);
    const windKph = result.current.wind_kph;
    const humidity = result.current.humidity;

    const iconUrl = `https:${result.current.condition.icon}`;

    initMap(lon, lat);
    displayWeatherInfo(temp, nameCity, iconUrl, {
      conditionText,
      feelsLikeTemp,
      windKph,
      humidity,
    }); // Передаем дополнительные данные
  } catch (error) {
    displayWeatherInfo(
      "Ошибка",
      "Произошла ошибка при обращении к серверу",
      "",
      null,
    );
    console.error("Ошибка запроса:", error);
  }
}

async function updateMapDisplay(longitude, latitude) {
  const weatherApi = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=f7f0f48145544647b19130539240210&q=${latitude},${longitude}&aqi=no`,
  );
  try {
    if (!weatherApi.ok) throw new Error("API не получен");

    const result = await weatherApi.json();
    const temp = Math.floor(result.current.temp_c);
    const city = result.location.name;

    const feelsLikeTemp = Math.floor(result.current.feelslike_c);
    const windKph = result.current.wind_kph;
    const humidity = result.current.humidity;
    const iconUrl = `https:${result.current.condition.icon}`;
    displayWeatherInfo(temp, city, iconUrl, {
      feelsLikeTemp,
      windKph,
      humidity,
    }); // Передаем дополнительные данные
  } catch (error) {
    console.error("Ошибка запроса");
  }
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

        <p class="weather-description">Ощущается как: ${weatherData.feelsLikeTemp}°C</p>
        <p class="weather-description">Скорость ветра: ${weatherData.windKph} km/h</p>
        <p class="weather-description">Влажность: ${weatherData.humidity}%</p>
          `;
  }
  weatherDisplay.innerHTML = content;
}

document.getElementById("delHistory").addEventListener("click", () => {
  historySearch.delHistory();
});

document
  .getElementById("search-form")
  .addEventListener("submit", async function (event) {
    event.preventDefault();
    document.getElementById("map").innerHTML = "";
    const valueCity = document.getElementById("inputCity").value;
    const valueCityStr = valueCity.trim();
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=f7f0f48145544647b19130539240210&q=${valueCityStr}&aqi=no`,
      );
      if (!response.ok) throw new Error("Api по кнопке не получен");
      const dataResponse = await response.json();
      const temp = Math.floor(dataResponse.current.temp_c);
      const city = dataResponse.location.name;

      const iconUrl = `https:${dataResponse.current.condition.icon}`;
      const conditionText = dataResponse.current.condition.text;
      const feelsLikeTemp = Math.floor(dataResponse.current.feelslike_c);
      const windKph = dataResponse.current.wind_kph;
      const humidity = dataResponse.current.humidity;
      historySearch.addCity(city, temp);
      displayWeatherInfo(temp, city, iconUrl, {
        conditionText,
        feelsLikeTemp,
        windKph,
        humidity,
      }); // Передаем дополнительные данные
      initMap(dataResponse.location.lon, dataResponse.location.lat);
    } catch (error) {
      console.error(error);
    }
    document.getElementById("inputCity").value = "";
  });

class HistorySearch {
  constructor(key = "weatherHistory") {
    this.key = key;
    this.weatherData = this.loadData();
    if (this.weatherData.length > 0) {
      const lastCity = this.weatherData[this.weatherData.length - 1].city;
      updateMap(lastCity);
    }
    this.displayHistory();
  }

  addCity(city, temp) {
    // Проверяем, есть ли уже такой город в истории
    if (!this.weatherData.some((item) => item.city === city)) {
      this.weatherData.push({ city: city, temp: temp });
      this.saveData();
      this.displayHistory();
    }
  }

  saveData() {
    localStorage.setItem(this.key, JSON.stringify(this.weatherData));
  }

  loadData() {
    const storedData = localStorage.getItem(this.key);
    return storedData ? JSON.parse(storedData) : [];
  }

  getHistory() {
    return this.weatherData;
  }

  displayHistory() {
    const historyDiv = document.getElementById("history");

    historyDiv.innerHTML = "";

    this.weatherData.forEach((item) => {
      const historyItem = document.createElement("p");
      historyItem.textContent = `${item.city}: ${item.temp}°C`;
      historyItem.addEventListener("click", async () => {
        document.getElementById("map").innerHTML = "";
        await updateMap(item.city);
      });
      historyDiv.appendChild(historyItem);
    });
  }
  delHistory() {
    const historyDiv = document.getElementById("history");
    this.weatherData = [];
    historyDiv.innerHTML = "";
    localStorage.removeItem(this.key);
  }
}

const historySearch = new HistorySearch();
