const output = document.getElementById("output");
const evaluate = document.getElementById("evaluate");
const clearInput = document.getElementById("clearInput");

/**
 * @method appendInput
 * @param {*} e
 * @desc Appends the button value to the input
 */
function appendInput(e) {
  const val = e.target.innerText;

  output.value += val;
}

// Calculate
evaluate.addEventListener("click", function(e) {
  const calcualtedValue = eval(output.value);

  output.value = calcualtedValue;
});

// Cleat input
clearInput.addEventListener("click", function(e) {
  output.value = "";
});

// Find Pow
function findPow(e) {
  const pow = e.target.lastElementChild.textContent;
  const squared = Math.pow(output.value, pow);

  output.value = squared;
}
