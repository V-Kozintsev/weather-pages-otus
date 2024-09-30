const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Используйте CORS
app.use(cors());

const API_KEY = '0156499c689a265c930535eb44e9e4e0'; // Вставьте сюда ваш API ключ

app.get('/weather', async (req, res) => {
  const { lat } = req.query;
  const { lon } = req.query;

  try {
    const response = await axios.get(
      'https://api.openweathermap.org/data/2.5/weather',
      {
        params: {
          lat,
          lon,
          appid: API_KEY,
          units: 'metric',
        },
      },
    );
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Ошибка при получении данных о погоде');
  }
});

app.listen(PORT, () => {
  console.log(`Сервер работает на http://localhost:${PORT}`);
});
