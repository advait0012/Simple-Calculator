const num1 = document.querySelector(".number1");
const num2 = document.querySelector(".number2");
const operator = document.querySelector(".operators");
const cal = document.querySelector(".btn-cal");
const reset = document.querySelector(".btn-reset");
const option = document.querySelector("option");
const displayResult = document.querySelector(".displayResult");

operator.addEventListener("change", () => operator.value);

cal.addEventListener("click", () => {
  if (operator.value === "+") {
    displayResult.textContent = parseFloat(num1.value) + parseFloat(num2.value);
  }
  if (operator.value === "-") {
    displayResult.textContent = parseFloat(num1.value) - parseFloat(num2.value);
  }
  if (operator.value === "*") {
    displayResult.textContent = parseFloat(num1.value) * parseFloat(num2.value);
  }
  if (operator.value === "/") {
    if (num2.value === 0) {
      displayResult.textContent = "Infinity";
    } else {
      displayResult.textContent =
        parseFloat(num1.value) / parseFloat(num2.value);
    }
  }
});

reset.addEventListener("click", () => {
  displayResult.textContent = 0;
  num1.value = 0;
  num2.value = 0;
});
