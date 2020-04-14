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

//Calculation
function caluclatResult(calculationType) {
  const entredNumber = getUserNumberInput();
  if (
    (calculationType !== "ADD" &&
      calculationType !== "SUBTRACT" &&
      calculationType !== "MUTLIPLY" &&
      calculationType !== "DEVIDE") ||
    !entredNumber
  ) {
    return;
  }
  const intialResutl = currentResult;
  let mathOperator;
  if (calculationType === "ADD") {
    currentResult += entredNumber;
    mathOperator = "+";
  } else if (calculationType === "SUBTRACT") {
    currentResult -= entredNumber;
    mathOperator = "-";
  } else if (calculationType === "MUTLIPLY") {
    currentResult *= entredNumber;
    mathOperator = "*";
  } else if (calculationType === "DEVIDE") {
    currentResult /= entredNumber;
    mathOperator = "/";
  }
  createAndWriteOutput(mathOperator, intialResutl, entredNumber);
  writeToLog(calculationType, intialResutl, entredNumber, currentResult);
}

//Funciton addition
function add() {
  caluclatResult("ADD");
}

//Subtract function
function subtract() {
  caluclatResult("SUBTRACT");
}

//multipy function
function multiply() {
  caluclatResult("MUTLIPLY");
}

//devide function
function devide() {
  caluclatResult("DEVIDE");
}

//listening to event buton
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", devide);
