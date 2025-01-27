import HistoryModel from "./HistoryModel.js";
import displayHistory from "./HistoryView.js";

class HistorySearch {
  constructor() {
    this.historyModel = new HistoryModel();
  }

  initDisplayHistory() {
    this.updateView();
  }
  addCity(city, temp) {
    const isAdded = this.historyModel.addCity(city, temp);
    if (isAdded) {
      this.updateView();
    }
  }
  getHistory() {
    return this.historyModel.getHistory();
  }

  delHistory() {
    this.historyModel.delHistory();
    this.updateView();
  }
  updateView() {
    const historyDiv = document.getElementById("history");
    const weatherData = this.historyModel.getHistory();
    displayHistory(weatherData, historyDiv, (city) => {
      window.location.hash = `weather/${city}`;
    });
  }
}
export default HistorySearch;
