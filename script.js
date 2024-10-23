// Variable to store the current input and the result
let currentInput = '';
let operator = '';
let previousInput = '';

// Function to append a number or decimal point to the current input
function appendNumber(number) {
    // Don't allow multiple decimals
    if (number === '.' && currentInput.includes('.')) return;

    currentInput = currentInput + number;
    updateDisplay(currentInput);
}

// Function to handle operators (+, -, *, /)
function appendOperator(op) {
    if (currentInput === '') return;

    if (previousInput !== '') {
        calculate();
    }
    
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

// Function to update the display
function updateDisplay(value) {
    const display = document.getElementById('display');
    display.innerHTML = value;
}

// Function to calculate the result based on the operator
function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }

    currentInput = result;
    operator = '';
    previousInput = '';
    updateDisplay(currentInput);
}

// Function to clear the display
function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    updateDisplay('0');
}

// Function to delete the last character
function deleteLast() {
    currentInput = currentInput.toString().slice(0, -1);
    updateDisplay(currentInput || '0');
}
