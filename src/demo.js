import "./style.css";
import * as ymaps3 from "ymaps3";
import { configureStore, createSlice } from "@reduxjs/toolkit";

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

// Redux Store setup
const initialState = {
  weather: null,
  history: [],
  loading: false,
  error: null,
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    fetchWeatherStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchWeatherSuccess: (state, action) => {
      state.weather = action.payload;
      state.loading = false;
    },
    fetchWeatherFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    addCityToHistory: (state, action) => {
      const { city, temp } = action.payload;
      if (!state.history.some((item) => item.city === city)) {
        state.history.push({ city: city, temp: temp });
      }
    },
    deleteHistory: (state) => {
      state.history = [];
      localStorage.removeItem("weatherHistory");
    },
    loadHistoryFromStorage: (state) => {
      const storedHistory = localStorage.getItem("weatherHistory");
      if (storedHistory) {
        state.history = JSON.parse(storedHistory);
      }
    },
  },
});
const store = configureStore({
  reducer: weatherSlice.reducer,
});

const {
  fetchWeatherStart,
  fetchWeatherSuccess,
  fetchWeatherFailure,
  addCityToHistory,
  deleteHistory,
  loadHistoryFromStorage,
} = weatherSlice.actions;

async function fetchWeatherByCoords(latitude, longitude) {
  store.dispatch(fetchWeatherStart());
  try {
    const weatherApi = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${latitude},${longitude}&aqi=no`,
    );
    if (!weatherApi.ok) {
      store.dispatch(
        fetchWeatherFailure(
          `Ошибка HTTP: ${weatherApi.status} ${weatherApi.statusText}`,
        ),
      );
      return;
    }

    const result = await weatherApi.json();
    if (!result || !result.location || !result.current) {
      store.dispatch(fetchWeatherFailure("Неверный формат ответа от API"));
      return;
    }
    const temp = Math.floor(result.current.temp_c);
    const city = result.location.name;
    const iconUrl = `https:${result.current.condition.icon}`;
    const windKph = result.current.wind_kph;
    const humidity = result.current.humidity;
    const localTime = new Date(result.location.localtime);
    const formattedTime = formatDateTime(localTime);
    store.dispatch(
      fetchWeatherSuccess({
        temp,
        city,
        iconUrl,
        windKph,
        humidity,
        formattedTime,
      }),
    );

    displayWeatherInfo(temp, city, iconUrl, {
      windKph,
      humidity,
      formattedTime,
    });
    initMap(longitude, latitude);
  } catch (error) {
    store.dispatch(fetchWeatherFailure(error.message));
    displayWeatherInfo(
      "Ошибка",
      "Произошла ошибка при обращении к серверу",
      "",
      null,
    );
  }
}

async function fetchWeatherByCity(city) {
  store.dispatch(fetchWeatherStart());
  try {
    const weatherApi = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`,
    );
    if (!weatherApi.ok) {
      store.dispatch(
        fetchWeatherFailure(
          `Ошибка HTTP: ${weatherApi.status} ${weatherApi.statusText}`,
        ),
      );
      return;
    }
    const result = await weatherApi.json();
    if (!result || !result.location || !result.current) {
      store.dispatch(fetchWeatherFailure("Неверный формат ответа от API"));
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

    store.dispatch(
      fetchWeatherSuccess({
        temp,
        city: nameCity,
        iconUrl,
        windKph,
        humidity,
        formattedTime,
      }),
    );
    displayWeatherInfo(temp, nameCity, iconUrl, {
      windKph,
      humidity,
      formattedTime,
    });
    initMap(lon, lat);
    store.dispatch(addCityToHistory({ city: nameCity, temp }));
  } catch (error) {
    store.dispatch(fetchWeatherFailure(error.message));
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
store.dispatch(loadHistoryFromStorage());
router();

function displayHistory(historyData) {
  const historyDiv = document.getElementById("history");
  if (!historyDiv) return;

  historyDiv.innerHTML = "";
  if (!historyData || historyData.length === 0) return;
  historyData.forEach((item) => {
    const historyItem = document.createElement("p");
    historyItem.textContent = `${item.city}: ${item.temp}°C`;
    historyItem.addEventListener("click", () => {
      window.location.hash = `weather/${item.city}`;
    });
    historyDiv.appendChild(historyItem);
  });
}

store.subscribe(() => {
  const state = store.getState();
  if (state.weather) {
    displayWeatherInfo(
      state.weather.temp,
      state.weather.city,
      state.weather.iconUrl,
      {
        windKph: state.weather.windKph,
        humidity: state.weather.humidity,
        formattedTime: state.weather.formattedTime,
      },
    );
  }

  displayHistory(state.history);
});
document.getElementById("delHistory").addEventListener("click", () => {
  store.dispatch(deleteHistory());
});
