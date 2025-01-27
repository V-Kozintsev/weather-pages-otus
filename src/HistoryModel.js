class HistoryModel {
  constructor(key = "weatherHistory") {
    this.key = key;
    this.weatherData = this.loadData();
  }

  addCity(city, temp) {
    if (!this.weatherData.some((item) => item.city === city)) {
      this.weatherData.push({ city: city, temp: temp });
      this.saveData();
      return true; // Вернем true если город был добавлен
    }
    return false; // Вернем false если город уже есть
  }

  saveData() {
    localStorage.setItem(this.key, JSON.stringify(this.weatherData));
  }

  loadData() {
    const storedData = localStorage.getItem(this.key);
    return storedData ? JSON.parse(storedData) : [];
  }

  getHistory() {
    return this.weatherData;
  }

  delHistory() {
    this.weatherData = [];
    localStorage.removeItem(this.key);
  }
}

export default HistoryModel;
