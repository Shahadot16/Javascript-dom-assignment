const firstNumberInput = document.getElementById("first-number");
const secondNumberInput = document.getElementById("second-number");
const resultScreen = document.getElementById("result");
const operationButtons = document.querySelectorAll("[data-operation]");

function showResult(value) {
  resultScreen.textContent = `Result: ${value}`;
}

function calculate(operation) {
  const firstNumber = Number(firstNumberInput.value);
  const secondNumber = Number(secondNumberInput.value);

  if (firstNumberInput.value === "" || secondNumberInput.value === "") {
    showResult("Please enter two numbers");
    return;
  }

  if (operation === "add") {
    showResult(firstNumber + secondNumber);
  } else if (operation === "subtract") {
    showResult(firstNumber - secondNumber);
  } else if (operation === "multiply") {
    showResult(firstNumber * secondNumber);
  } else if (operation === "divide") {
    if (secondNumber === 0) {
      showResult("Cannot divide by zero");
      return;
    }

    showResult(firstNumber / secondNumber);
  }
}

operationButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    calculate(button.dataset.operation);
  });
});
