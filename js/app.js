const clock = document.querySelector(".status-bar__column:nth-child(2)");
const wifi = document.querySelector(".status-bar__column:first-child span");

const date = new Date();

clock.innerText = `${date.getHours()}:${date.getMinutes()}`;

function handleWifiOnline() {
  wifi.innerText = "service";
}
function handleWifiOffline() {
  wifi.innerText = "No service";
}

window.addEventListener("online", handleWifiOnline);
window.addEventListener("offline", handleWifiOffline);
