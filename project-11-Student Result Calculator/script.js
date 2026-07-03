const banglaInput = document.getElementById("bangla");
const englishInput = document.getElementById("english");
const mathInput = document.getElementById("math");
const calculateButton = document.getElementById("calculate-button");
const resultOutput = document.getElementById("result-output");

function getGrade(average) {
  if (average >= 80) {
    return "A+";
  } else if (average >= 70) {
    return "A";
  } else if (average >= 60) {
    return "A-";
  } else if (average >= 50) {
    return "B";
  } else if (average >= 40) {
    return "C";
  } else if (average >= 33) {
    return "D";
  }

  return "F";
}

function isInvalidMark(mark, inputValue) {
  return inputValue === "" || mark < 0 || mark > 100;
}

function calculateResult() {
  const bangla = Number(banglaInput.value);
  const english = Number(englishInput.value);
  const math = Number(mathInput.value);

  if (
    isInvalidMark(bangla, banglaInput.value) ||
    isInvalidMark(english, englishInput.value) ||
    isInvalidMark(math, mathInput.value)
  ) {
    resultOutput.textContent = "Please enter marks between 0 and 100";
    return;
  }

  const total = bangla + english + math;
  const average = total / 3;
  const grade = getGrade(average);

  resultOutput.textContent = `Total: ${total}, Average: ${average.toFixed(2)}, Grade: ${grade}`;
}

calculateButton.addEventListener("click", calculateResult);
