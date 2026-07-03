const passwordInput = document.getElementById("password-input");
const showPasswordCheckbox = document.getElementById("show-password");

function togglePasswordVisibility() {
  if (showPasswordCheckbox.checked) {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}

showPasswordCheckbox.addEventListener("change", togglePasswordVisibility);
