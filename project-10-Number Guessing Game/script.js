const guessInput = document.getElementById("guess-input");
const guessButton = document.getElementById("guess-button");
const resetButton = document.getElementById("reset-button");
const resultMessage = document.getElementById("result-message");

let randomNumber = generateRandomNumber();

function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

function checkGuess() {
  const userGuess = Number(guessInput.value);

  if (userGuess < 1 || userGuess > 100 || guessInput.value === "") {
    resultMessage.textContent = "Please enter a number from 1 to 100";
    return;
  }

  if (userGuess > randomNumber) {
    resultMessage.textContent = "Too High";
  } else if (userGuess < randomNumber) {
    resultMessage.textContent = "Too Low";
  } else {
    resultMessage.textContent = "Correct Answer";
  }
}

function resetGame() {
  randomNumber = generateRandomNumber();
  guessInput.value = "";
  resultMessage.textContent = "Start guessing!";
  guessInput.focus();
}

guessButton.addEventListener("click", checkGuess);
resetButton.addEventListener("click", resetGame);

guessInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    checkGuess();
  }
});
