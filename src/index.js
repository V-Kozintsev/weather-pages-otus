import './index.css';

let inputValue;
document.getElementById('btn').addEventListener('click', (element) => {
  element.preventDefault();
  const inputElement = document.getElementById('form-input');
  inputValue = inputElement.value;
  console.log(inputValue);
});
const API_KEY = '0156499c689a265c930535eb44e9e4e0';

async function getWeatherData() {
  navigator.geolocation.getCurrentPosition(async (succes) => {
    const { latitude, longitude } = succes.coords;
    console.log(latitude, longitude);
    document.getElementById('map').src = `https://static-maps.yandex.ru/1.x/?ll=${longitude},${latitude}&size=400,300&z=10&l=map`;
    const responce = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`,
    );
    const data = await responce.json();
    console.log(data.name);

    const temp = Math.floor(data.main.temp);
    const city = data.name;

    document.getElementById('city').innerText = `Город: ${city}`;
    document.getElementById('temp').innerText = `Температура: ${temp}°C`;
  });
}
getWeatherData();
