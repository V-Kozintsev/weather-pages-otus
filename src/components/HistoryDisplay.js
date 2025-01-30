export function displayHistory(historyData) {
  const historyDiv = document.getElementById("history");
  if (!historyDiv) return;
  historyDiv.innerHTML = "";
  if (!historyData || historyData.length === 0) return;
  historyData.forEach((item) => {
    const historyItem = document.createElement("p");
    historyItem.textContent = `${item.city}: ${item.temp}°C`;
    historyItem.addEventListener("click", () => {
      window.location.hash = `weather/${item.city}`;
    });
    historyDiv.appendChild(historyItem);
  });
}
