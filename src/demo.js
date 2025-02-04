import "./style.css";
import * as ymaps3 from "ymaps3";
import { configureStore, createSlice } from "@reduxjs/toolkit";
document.addEventListener("DOMContentLoaded", function () {
  const apiKey = "f7f0f48145544647b19130539240210";
  const appVersion = "1.0.0"; // Или любая другая версия

  // --- Вспомогательные функции ---

  function displayWeatherInfo() {
    const weatherDisplay = document.querySelector(".displayWeatherInfo");
    const weather = store.getState().weather;

    if (!weather) {
      weatherDisplay.innerHTML = "";
      return;
    }

    const units = store.getState().units === "fahrenheit" ? "°F" : "°C";
    let content = `
        <p class="weather-description" id="city">${weather.city}</p>
        <p class="weather-description" id="temp">${weather.temp}${units}</p>
         `;
    if (weather.iconUrl) {
      content += `<img id="weather-icon" src="${weather.iconUrl}" alt="Иконка погоды" />`;
    }
    content += `
          <p class="weather-description">Скорость ветра: ${weather.windKph} km/h</p>
        <p class="weather-description">Влажность: ${weather.humidity}%</p>
          `;
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

  // --- Redux Store setup ---
  const initialState = {
    weather: null,
    history: [],
    loading: false,
    error: null,
    theme: localStorage.getItem("theme") || "light",
    units: localStorage.getItem("units") || "celsius",
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
        const { city, temp, units } = action.payload;
        if (!state.history.some((item) => item.city === city)) {
          state.history.push({ city: city, temp: temp, units: units });
        }
      },
      deleteHistory: (state) => {
        state.history = [];
        localStorage.removeItem("weatherHistory");
      },
      loadHistoryFromStorage: (state) => {
        const storedHistory = localStorage.getItem("weatherHistory");
        if (storedHistory) {
          try {
            state.history = JSON.parse(storedHistory);
          } catch (e) {
            console.error("Ошибка при разборе истории из localStorage:", e);
            localStorage.removeItem("weatherHistory");
            state.history = []; // Очищаем историю, если произошла ошибка
          }
        }
      },
      setTheme: (state, action) => {
        state.theme = action.payload;
        localStorage.setItem("theme", action.payload);
        applyTheme(action.payload);
      },
      setUnits: (state, action) => {
        state.units = action.payload;
        localStorage.setItem("units", action.payload);
      },
      updateHistory: (state, action) => {
        state.history = action.payload;
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
    setTheme,
    setUnits,
    updateHistory,
  } = weatherSlice.actions;

  // --- API Fetching Functions ---
  async function fetchWeatherByCoords(
    latitude,
    longitude,
    addToHistory = false,
  ) {
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
      let tempCelsius = Math.floor(result.current.temp_c);
      let temp;
      let units = store.getState().units;

      if (units === "fahrenheit") {
        temp = Math.floor((tempCelsius * 9) / 5 + 32);
      } else {
        temp = tempCelsius;
      }
      const city = result.location.name;
      const iconUrl = `https:${result.current.condition.icon}`;
      const windKph = result.current.wind_kph;
      const humidity = result.current.humidity;

      store.dispatch(
        fetchWeatherSuccess({
          temp,
          city: city,
          iconUrl,
          windKph,
          humidity,
        }),
      );

      initMap(longitude, latitude);
      if (addToHistory) {
        store.dispatch(addCityToHistory({ city: city, temp, units }));
      }
    } catch (error) {
      store.dispatch(fetchWeatherFailure(error.message));
      displayWeatherInfo();
    }
  }

  async function fetchWeatherByCity(city, addToHistory = false) {
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
      let tempCelsius = Math.floor(result.current.temp_c);
      let temp;
      let units = store.getState().units;

      if (units === "fahrenheit") {
        temp = Math.floor((tempCelsius * 9) / 5 + 32);
      } else {
        temp = tempCelsius;
      }
      const nameCity = result.location.name;
      const { lon, lat } = result.location;
      const iconUrl = `https:${result.current.condition.icon}`;
      const windKph = result.current.wind_kph;
      const humidity = result.current.humidity;

      store.dispatch(
        fetchWeatherSuccess({
          temp,
          city: nameCity,
          iconUrl,
          windKph,
          humidity,
        }),
      );
      initMap(lon, lat);
      if (addToHistory) {
        store.dispatch(addCityToHistory({ city: nameCity, temp, units }));
      }
    } catch (error) {
      store.dispatch(fetchWeatherFailure(error.message));
      displayWeatherInfo();
    }
  }

  // --- Router and Navigation ---
  function router() {
    const hash = window.location.hash.slice(1);
    const appDiv = document.getElementById("app");
    const settingsPageDiv = document.getElementById("settings-page");
    const aboutPageDiv = document.getElementById("about-page"); // Получаем элемент "О приложении"
    document.getElementById("app-version").textContent = appVersion; //  Добавляем версию

    if (hash === "settings") {
      appDiv.style.display = "none";
      aboutPageDiv.style.display = "none";
      settingsPageDiv.style.display = "block";
      renderSettingsPage();
    } else if (hash === "about") {
      // Новый роут для "О приложении"
      appDiv.style.display = "none";
      settingsPageDiv.style.display = "none";
      aboutPageDiv.style.display = "block";
      //renderAboutPage(); // Если вам нужна отдельная функция для отрисовки "О приложении"
    } else if (hash.startsWith("weather/")) {
      appDiv.style.display = "block";
      settingsPageDiv.style.display = "none";
      aboutPageDiv.style.display = "none";
      const city = hash.slice(8);
      fetchWeatherByCity(city, true); // Добавляем город в историю при поиске
    } else {
      appDiv.style.display = "block";
      settingsPageDiv.style.display = "none";
      aboutPageDiv.style.display = "none";
      getCurrentLocationWeather(false); // Не добавляем в историю при загрузке страницы
    }
  }

  // Функция для получения погоды по геолокации
  function getCurrentLocationWeather(addToHistory = false) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        fetchWeatherByCoords(latitude, longitude, addToHistory); // Передаём флаг
        initMap(longitude, latitude);
      },
      (error) => {
        console.error("Ошибка геолокации:", error);
      },
    );
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

  document.getElementById("settings-button").addEventListener("click", () => {
    window.location.hash = "settings";
  });

  document.getElementById("delHistory").addEventListener("click", () => {
    store.dispatch(deleteHistory());
    // Очищаем hash, чтобы при обновлении показывалась текущая геолокация
    window.location.hash = "";
    displayHistory([]); // Очищаем отображение истории сразу после удаления
  });
  document.getElementById("about-button").addEventListener("click", () => {
    window.location.hash = "about";
  });
  window.addEventListener("hashchange", router);

  // Загружаем историю, затем получаем текущую погоду и запускаем роутер
  store.dispatch(loadHistoryFromStorage());
  getCurrentLocationWeather(false);
  router();

  // --- History Display ---
  function displayHistory(historyData) {
    const historyDiv = document.getElementById("history");
    if (!historyDiv) return;

    historyDiv.innerHTML = "";
    if (!historyData || historyData.length === 0) return;

    historyData.forEach((item) => {
      let temp = item.temp;
      let units = item.units === "fahrenheit" ? "°F" : "°C";
      if (store.getState().units !== item.units) {
        // Конвертируем температуру, если текущие единицы измерения отличаются от сохраненных
        if (store.getState().units === "fahrenheit") {
          temp = Math.floor((item.temp * 9) / 5 + 32);
          units = "°F";
        } else {
          temp = Math.floor(((item.temp - 32) * 5) / 9);
          units = "°C";
        }
      }

      const historyItem = document.createElement("p");
      historyItem.textContent = `${item.city}: ${temp}${units}`;
      historyItem.addEventListener("click", () => {
        window.location.hash = `weather/${item.city}`;
      });
      historyDiv.appendChild(historyItem);
    });
  }

  // --- Settings Page ---
  function renderSettingsPage() {
    const settingsPageDiv = document.getElementById("settings-page");
    settingsPageDiv.innerHTML = `
        <h2>Настройки</h2>
        <div>
            <label>Тема:</label>
            <select id="theme-select">
                <option value="light">Светлая</option>
                <option value="dark">Темная</option>
            </select>
        </div>
        <div>
            <label>Единицы измерения:</label>
            <select id="units-select">
                <option value="celsius">Цельсий</option>
                <option value="fahrenheit">Фаренгейт</option>
            </select>
        </div>
        <button id="save-settings">Сохранить</button>
        <button id="back-button">Назад</button>
    `;

    const themeSelect = document.getElementById("theme-select");
    const unitsSelect = document.getElementById("units-select");
    themeSelect.value = store.getState().theme;
    unitsSelect.value = store.getState().units;

    document.getElementById("save-settings").addEventListener("click", () => {
      store.dispatch(setTheme(themeSelect.value));
      store.dispatch(setUnits(unitsSelect.value));
      router();
    });

    document.getElementById("back-button").addEventListener("click", () => {
      window.location.hash = "";
    });
  }

  // --- Theme Applying ---
  function applyTheme(theme) {
    document.body.className = theme === "dark" ? "dark-theme" : "";
  }

  // --- Store Subscription ---
  store.subscribe(() => {
    const state = store.getState();
    displayWeatherInfo();
    displayHistory(state.history);
    applyTheme(state.theme);
  });

  // --- Сохранение history в localStorage при изменении ---
  // Убрал логику обновления истории здесь, так как она может вызывать рекурсию
  store.subscribe(() => {
    const state = store.getState();

    // Update history temps
    if (state.units !== localStorage.getItem("units")) {
      const updatedHistory = state.history.map((item) => {
        let temp = item.temp;
        let newUnits = state.units;
        if (state.units === "fahrenheit" && item.units === "celsius") {
          temp = Math.floor((item.temp * 9) / 5 + 32);
        } else if (state.units === "celsius" && item.units === "fahrenheit") {
          temp = Math.floor(((item.temp - 32) * 5) / 9);
        }
        return { ...item, temp: temp, units: newUnits }; //save new units
      });
      // Вызов updateHistory здесь!
      store.dispatch(updateHistory(updatedHistory));
    }

    // Save history to local storage
    localStorage.setItem("units", state.units);
    localStorage.setItem("weatherHistory", JSON.stringify(state.history));
  });

  // --- Initial Theme Application ---
  applyTheme(store.getState().theme);

  // Код для инициализации карты и загрузки истории поиска
  getCurrentLocationWeather(false); // или другой код инициализации
});
