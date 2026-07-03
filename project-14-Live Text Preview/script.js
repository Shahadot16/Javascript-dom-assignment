const textInput = document.getElementById("text-input");
const previewText = document.getElementById("preview-text");

function updatePreview() {
  const text = textInput.value.trim();
  previewText.textContent = text === "" ? "Type Something..." : textInput.value;
}

textInput.addEventListener("input", updatePreview);
