
function updateDisplay(symbol) {
    const display = document.getElementById("CalculatorDisplay");

    display.innerHTML += symbol;
}

function clearDisplay() {
    const display = document.getElementById("CalculatorDisplay");

    display.innerHTML = "";
}

function pressButton(symbol) {
    updateDisplay(symbol);
}

function evaluateExpression() {
    const display = document.getElementById("CalculatorDisplay");

    let expression = display.innerHTML;

    let result = eval(expression);

    display.innerHTML = result;
}