import "./style.css";
import { loadHistoryFromStorage, deleteHistory } from "./store/weatherSlice";
import { router } from "./router";
import { store } from "./store";
import { displayWeatherInfo } from "./components/WeatherDisplay";
import { displayHistory } from "./components/HistoryDisplay";

// Инициализация истории и роутера
store.dispatch(loadHistoryFromStorage());
router();

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

document
  .getElementById("search-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const valueCity = document.getElementById("inputCity").value;
    const valueCityStr = valueCity.trim();
    window.location.hash = `weather/${valueCityStr}`;
    document.getElementById("inputCity").value = "";
  });
