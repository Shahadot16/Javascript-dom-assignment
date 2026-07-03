const passwordOutput = document.getElementById("password-output");
const generateButton = document.getElementById("generate-button");

const passwordLength = 8;
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

function generatePassword() {
  let password = "";

  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  passwordOutput.textContent = password;
}

generateButton.addEventListener("click", generatePassword);
