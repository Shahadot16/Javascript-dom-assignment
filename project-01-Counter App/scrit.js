let count = 0;

const countElement = document.getElementById("count");
const incrementButton = document.getElementById("increment-btn");
const decrementButton = document.getElementById("decrement-btn");
const resetButton = document.getElementById("reset-btn");

function updateCount() {
  countElement.textContent = count;
}

incrementButton.addEventListener("click", function () {
  count++;
  updateCount();
});

decrementButton.addEventListener("click", function () {
  count--;
  updateCount();
});

resetButton.addEventListener("click", function () {
  count = 0;
  updateCount();
});
