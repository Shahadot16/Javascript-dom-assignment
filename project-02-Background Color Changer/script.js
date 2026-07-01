const changeColorButton = document.getElementById("change-color-btn");
const colorValue = document.getElementById("color-value");

function generateRandomColor() {
  const letters = "0123456789abcdef";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * letters.length);
    color += letters[randomIndex];
  }

  return color;
}

changeColorButton.addEventListener("click", function () {
  const randomColor = generateRandomColor();

  document.body.style.backgroundColor = randomColor;
  colorValue.textContent = randomColor;
});
