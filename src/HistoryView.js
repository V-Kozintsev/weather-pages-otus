function displayHistory(weatherData, historyDiv, onCityClick) {
  if (!historyDiv) {
    return;
  }
  historyDiv.innerHTML = "";
  if (!weatherData || weatherData.length === 0) {
    return;
  }
  weatherData.forEach((item) => {
    const historyItem = document.createElement("p");
    historyItem.textContent = `${item.city}: ${item.temp}°C`;
    historyItem.addEventListener("click", () => {
      onCityClick(item.city);
    });
    historyDiv.appendChild(historyItem);
  });
}

export default displayHistory;
