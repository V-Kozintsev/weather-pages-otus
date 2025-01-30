import { fetchWeatherByCoords, fetchWeatherByCity } from "./api/weatherApi";

export function router() {
  const hash = window.location.hash.slice(1);
  if (hash.startsWith("weather/")) {
    const city = hash.slice(8);
    fetchWeatherByCity(city);
  } else {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      fetchWeatherByCoords(latitude, longitude);
      (error) => {
        console.error("Ошибка геолокации:", error);
      };
    });
  }
}

window.addEventListener("hashchange", router);
