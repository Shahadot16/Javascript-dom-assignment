const colorOne = document.getElementById("color-one");
const colorTwo = document.getElementById("color-two");
const cssCode = document.getElementById("css-code");
const generateButton = document.getElementById("generate-button");

function getRandomColor() {
  const randomNumber = Math.floor(Math.random() * 16777215);
  return `#${randomNumber.toString(16).padStart(6, "0")}`;
}

function updateGradient() {
  const firstColor = getRandomColor();
  const secondColor = getRandomColor();
  const gradientCode = `background: linear-gradient(to right, ${firstColor}, ${secondColor});`;

  document.body.style.background = `linear-gradient(to right, ${firstColor}, ${secondColor})`;
  colorOne.textContent = firstColor;
  colorTwo.textContent = secondColor;
  colorOne.style.backgroundColor = firstColor;
  colorTwo.style.backgroundColor = secondColor;
  cssCode.textContent = gradientCode;
}

generateButton.addEventListener("click", updateGradient);
