const textInput = document.getElementById("text-input");
const characterCount = document.getElementById("character-count");
const wordCount = document.getElementById("word-count");

function updateCounts() {
  const text = textInput.value;
  const trimmedText = text.trim();
  const words = trimmedText === "" ? [] : trimmedText.split(/\s+/);

  characterCount.textContent = text.length;
  wordCount.textContent = words.length;
}

textInput.addEventListener("input", updateCounts);
