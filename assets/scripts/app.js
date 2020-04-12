const defaultResult = 0;
let currentResult = defaultResult;
const logEnteries = [];

//function convert to int the input user
function getUserNumberInput() {
  return parseInt(userInput.value);
}

// write the calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); //from vendor file
}

//function write in log object
function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntery = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };

  logEnteries.push(logEntery);
  console.log(logEnteries);
}

//Funciton addition
function add() {
  const entredNumber = getUserNumberInput();
  const intialResutl = currentResult;
  currentResult += entredNumber;
  createAndWriteOutput("+", intialResutl, entredNumber);
  writeToLog("ADD", intialResutl, entredNumber, currentResult);
}

//Subtract function
function subtract() {
  const entredNumber = getUserNumberInput();
  const intialResutl = currentResult;
  currentResult -= entredNumber;
  createAndWriteOutput("-", intialResutl, entredNumber);
  writeToLog("SUBSTRUCT", intialResutl, entredNumber, currentResult);
}

//multipy function
function multiply() {
  const entredNumber = getUserNumberInput();
  const intialResutl = currentResult;
  currentResult *= entredNumber;
  createAndWriteOutput("*", intialResutl, entredNumber);
  writeToLog("MUTLIPLY", intialResutl, entredNumber, currentResult);
}

//devide function
function devide() {
  const entredNumber = getUserNumberInput();
  const intialResutl = currentResult;
  currentResult /= entredNumber;
  createAndWriteOutput("/", intialResutl, entredNumber);
  writeToLog("DEVIDE", intialResutl, entredNumber, currentResult);
}

//listening to event buton
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", devide);
