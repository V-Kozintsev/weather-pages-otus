/* import { sum } from './sum.js'; */
import './index.css';

const map = document.getElementById('map');

async function loadMap() {
  // Проверка поддержки геолокации
  if (!navigator.geolocation) {
    console.error('Геолокация не поддерживается вашим браузером.');
    return;
  }

  // загрузка карты по текущему местоположению
  try {
    const position = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
    const { latitude, longitude } = position.coords;
    map.src = `https://static-maps.yandex.ru/1.x/?ll=${longitude},${latitude}&size=400,300&z=10&l=map`;
  } catch (error) {
    console.error('Ошибка при получении геолокации:', error);
  }
}
loadMap();
