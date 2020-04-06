const defaultResult = 0;
let currentResult = defaultResult;

//Funciton addition
function add() {
  currentResult = currentResult + parseInt(userInput.value);
  outputResult(currentResult, "");
}

//listening to event add buton
addBtn.addEventListener("click", add);
