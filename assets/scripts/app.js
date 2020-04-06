const defaultResult = 0;
let currentResult = defaultResult;

//function convert to int the input user
function getUserNumberInput() {
  return parseInt(userInput.value);
}

//Function to write to calculation operation
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

//Funciton addition
function add() {
  const entredNumber = getUserNumberInput();
  const intialResutl = currentResult;
  currentResult = currentResult + entredNumber;
  createAndWriteOutput("+", intialResutl, entredNumber);
}

function subtract() {
  const entredNumber = getUserNumberInput();
  const intialResutl = currentResult;
  currentResult = currentResult - entredNumber;
  createAndWriteOutput("-", intialResutl, entredNumber);
}

function multiply() {
  const entredNumber = getUserNumberInput();
  const intialResutl = currentResult;
  currentResult = currentResult * entredNumber;
  createAndWriteOutput("*", intialResutl, entredNumber);
}

function devide() {
  const entredNumber = getUserNumberInput();
  const intialResutl = currentResult;
  currentResult = currentResult / entredNumber;
  createAndWriteOutput("/", intialResutl, entredNumber);
}

//listening to event add buton
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", devide);
