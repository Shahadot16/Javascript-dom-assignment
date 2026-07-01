const dobInput = document.getElementById("dob");
const calculateButton = document.getElementById("calculate-btn");
const result = document.getElementById("result");

function calculateAge(dateOfBirth) {
  const today = new Date();
  const birthDate = new Date(dateOfBirth);

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();
  const dayDifference = today.getDate() - birthDate.getDate();

  if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
    age--;
  }

  return age;
}

calculateButton.addEventListener("click", function () {
  const dateOfBirth = dobInput.value;

  if (dateOfBirth === "") {
    result.textContent = "Please select your date of birth";
    return;
  }

  const age = calculateAge(dateOfBirth);

  if (age < 0) {
    result.textContent = "Date of birth cannot be in the future";
    return;
  }

  result.textContent = `Your Age: ${age} Years`;
});
