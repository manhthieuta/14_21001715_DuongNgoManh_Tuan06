let input = document.getElementById('input');

function insert(num) {
    input.value += num;
}

function clearInput() {
    input.value = '';
}

function backspace() {
    input.value = input.value.slice(0, -1);
}

function calculate() {
    let expression = input.value;
    let result = eval(expression);
    input.value = result;
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Khong the chia cho 0!";
    } else {
        return a / b;
    }
}

function rectangleArea(width, height) {
    return multiply(width, height);
}

