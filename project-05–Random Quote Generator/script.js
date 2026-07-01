const quotes = [
  "Dream big and dare to fail.",
  "Stay hungry, stay foolish.",
  "Every moment is a fresh beginning.",
  "Believe you can and you are halfway there.",
  "Do something today that your future self will thank you for.",
  "Success is the sum of small efforts repeated every day."
];

const quoteElement = document.getElementById("quote");
const quoteButton = document.getElementById("quote-btn");

function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteElement.textContent = quotes[randomIndex];
}

quoteButton.addEventListener("click", showRandomQuote);
