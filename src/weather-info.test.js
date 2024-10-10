import { displayWeatherInfo, updateMap } from './weather-info';

describe('Функция для отображения в окне информации о погоде', () => {
  beforeEach(() => {
    document.body.innerHTML = `
    <div>
        <h1 id="city"></h1>
        <h2 id="temp"></h2>
    </div>`;
  });
  it('Должен правильно отображать город и температуру', () => {
    const city = 'Москва';
    const temp = 15;

    displayWeatherInfo(city, temp);
    expect(document.getElementById('city').innerText).toBe(`Город: ${city}`);
    expect(document.getElementById('temp').innerText).toBe(
      `Температура: ${temp}°C`,
    );
  });
});

describe('Функция для обновления карты', () => {
  beforeEach(() => {
    document.body.innerHTML = `
        <div class="div">
            <iframe
                class="map"
                id="map"
                src=""
                frameborder="0"
                title="Карта с текущим местоположением"
            ></iframe>
        </div>`;
  });
  it('Должен правильно отображать карту', () => {
    const latitude = 55.751244;
    const longitude = 37.618423;
    const mapUrl = `https://static-maps.yandex.ru/1.x/?ll=${longitude},${latitude}&z=10&l=map`;

    updateMap(latitude, longitude);

    expect(document.getElementById('map').src).toBe(mapUrl);
  });
});
