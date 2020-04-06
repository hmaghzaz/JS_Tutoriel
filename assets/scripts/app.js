const defaultResult = 0;
let currentResult = defaultResult;

//function convert to int the input user
function getUserNumberInput() {
  return parseInt(userInput.value);
}

//Funciton addition
function add() {
  const entredNumber = getUserNumberInput();
  const calcDescription = `${currentResult} + ${entredNumber}`;
  currentResult = currentResult + entredNumber;
  outputResult(currentResult, calcDescription);
}

//listening to event add buton
addBtn.addEventListener("click", add);
