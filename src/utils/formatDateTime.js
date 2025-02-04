export function formatDateTime(date) {
  const day = date.toLocaleDateString("ru-RU", { weekday: "short" });
  const time = date.toLocaleTimeString("ru-RU", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return `${day}, ${time}`;
}
