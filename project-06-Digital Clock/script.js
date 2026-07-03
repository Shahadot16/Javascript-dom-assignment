const clock = document.getElementById("clock");

function formatTimeUnit(unit) {
  return unit.toString().padStart(2, "0");
}

function updateClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const period = hours >= 12 ? "PM" : "AM";
  const displayHours = hours % 12 || 12;

  clock.textContent = `${formatTimeUnit(displayHours)}:${formatTimeUnit(minutes)}:${formatTimeUnit(seconds)} ${period}`;
}

updateClock();
setInterval(updateClock, 1000);
