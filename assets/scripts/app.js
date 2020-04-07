const defaultResult = 0;
let currentResult = defaultResult;

//function convert to int the input user
function getUserNumberInput() {
  return parseInt(userInput.value);
}

// write the calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); //from vendor file
}

//Funciton addition
function add() {
  const entredNumber = getUserNumberInput();
  const intialResutl = currentResult;
  currentResult += entredNumber;
  createAndWriteOutput("+", intialResutl, entredNumber);
}

//Subtract function
function subtract() {
  const entredNumber = getUserNumberInput();
  const intialResutl = currentResult;
  currentResult -= entredNumber;
  createAndWriteOutput("-", intialResutl, entredNumber);
}

//multipy function
function multiply() {
  const entredNumber = getUserNumberInput();
  const intialResutl = currentResult;
  currentResult *= entredNumber;
  createAndWriteOutput("*", intialResutl, entredNumber);
}

//devide function
function devide() {
  const entredNumber = getUserNumberInput();
  const intialResutl = currentResult;
  currentResult /= entredNumber;
  createAndWriteOutput("/", intialResutl, entredNumber);
}

//listening to event buton
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", devide);
