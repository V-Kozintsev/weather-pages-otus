import './index.css';

const map = document.getElementById('map');
/* const apiKey = "0156499c689a265c930535eb44e9e4e0"; */
async function loadMap() {
  try {
    const position = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    // Делаем запрос на openWeatherMap
    const openWeatherMap = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=0156499c689a265c930535eb44e9e4e0`;

    map.src = `https://static-maps.yandex.ru/1.x/?ll=${longitude},${latitude}&size=400,300&z=10&l=map`;
    console.log(latitude, longitude);

    // Получаем температуру
    const response = await fetch(openWeatherMap);
    const data = await response.json();
    const temp = Math.floor(data.main.temp - 273.15);
    document.getElementById('temp').textContent = temp;

    // Выводим город
    const geocodingAPI = `http://api.openweathermap.org/geo/1.0/direct?q=${data.name}&limit=10&appid=0156499c689a265c930535eb44e9e4e0`;
    const responseGeo = await fetch(geocodingAPI);
    const dataGeo = await responseGeo.json();
    document.getElementById('city').textContent = dataGeo[1].name;
    console.log(dataGeo.dataGeo[1]);
  } catch (error) {
    console.error('Ошибка запроса');
  }
}
loadMap();
