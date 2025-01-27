import {
  fetchWeatherStart,
  fetchWeatherSuccess,
  fetchWeatherFailure,
  addCityToHistory,
} from "../store/weatherSlice";
import { formatDateTime } from "../utils/formatDateTime";
import { initMap } from "../components/MapComponent";
import { displayWeatherInfo } from "../components/WeatherDisplay";
import { store } from "../store";

const apiKey = "f7f0f48145544647b19130539240210";

export async function fetchWeatherByCoords(latitude, longitude) {
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

export async function fetchWeatherByCity(city) {
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
