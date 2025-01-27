class HistorySearch {
  constructor(key = "weatherHistory") {
    this.key = key;
    this.weatherData = this.loadData();
    this.displayHistory();
  }

  addCity(city, temp) {
    if (!this.weatherData.some((item) => item.city === city)) {
      this.weatherData.push({ city: city, temp: temp });
      this.saveData();
      this.displayHistory();
    }
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
  displayHistory() {
    const historyDiv = document.getElementById("history");
    historyDiv.innerHTML = "";
    this.weatherData.forEach((item) => {
      const historyItem = document.createElement("p");
      historyItem.textContent = `${item.city}: ${item.temp}°C`;
      historyItem.addEventListener("click", () => {
        window.location.hash = `weather/${item.city}`;
      });
      historyDiv.appendChild(historyItem);
    });
  }

  delHistory() {
    const historyDiv = document.getElementById("history");
    this.weatherData = [];
    historyDiv.innerHTML = "";
    localStorage.removeItem(this.key);
  }
}
const historySearch = new HistorySearch();

export default historySearch;
