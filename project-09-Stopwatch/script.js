const secondsDisplay = document.getElementById("seconds");
const startButton = document.getElementById("start-button");
const stopButton = document.getElementById("stop-button");
const resetButton = document.getElementById("reset-button");

let seconds = 0;
let timerId = null;

function updateDisplay() {
  secondsDisplay.textContent = seconds;
}

function startStopwatch() {
  if (timerId !== null) {
    return;
  }

  timerId = setInterval(function () {
    seconds++;
    updateDisplay();
  }, 1000);
}

function stopStopwatch() {
  clearInterval(timerId);
  timerId = null;
}

function resetStopwatch() {
  stopStopwatch();
  seconds = 0;
  updateDisplay();
}

startButton.addEventListener("click", startStopwatch);
stopButton.addEventListener("click", stopStopwatch);
resetButton.addEventListener("click", resetStopwatch);
