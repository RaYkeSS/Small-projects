// const display = document.getElementById('display');

// function appendToDisplay(input) {
//     display.value += input;
// }

// function clearDisplay() {
//     display.value = '';
// }

// function calculate() {
//     try {
//         display.value = eval(display.value); // поменять
//     }
//     catch(error) {
//         display.value = 'error';
//     }
// }

let a = '';
let b = '';
let operator = '';
let equals = false;

// const matchDigit = new RegExp('/[0-9]/g');
const matchDigit = new RegExp('[0-9]|[.]');

const matchOperator = new RegExp('[-+/*]');

const calculator = document.getElementById('calculator')
const display = calculator.querySelector('#display');
const keys = calculator.querySelector('#keys');



function clearAll () {
    a = '';
    b = '';
    operator = '';
    equals = false;
    display.value = '0';
}

keys.addEventListener('click', function(e) {
    if (!e.target.closest('button')) return;
    if (e.target.dataset.key === 'Esc') clearAll();

    display.value = '';
    const key = e.target.dataset.key;

    if (key.match(matchDigit)) {
        if (b === '' && operator === '') {
            a += key;
            display.value = a;
        }
        else if (a !== '' && b !== '' && equals) {
            b = key;
            equals = false;
            display.value = b;
        }
        else {
            b += key;
            display.value = b;
        }
        console.log(a, operator, b);
        return;
    }

    if (key.match(matchOperator)) {
        operator = key;
        display.value = key;
        return;
    }

    if (key === '=') {
        switch (operator) {
            case '+':
                a = Number(a) + Number(b);
                break;
            case '-':
                a = Number(a) - Number(b);
                break;
            case '*':
                a = Number(a) * Number(b);
                break;
            case '/':
                a = Number(a) / Number(b);
                break;
        }
        equals = true;
        display.value = a;
    }
})

document.addEventListener('keypress', function(e) {
    if (!e.key.match(matchDigit) && !e.key.match(matchOperator)) return;
    if (e.key === 'Esc') clearAll();

    display.value = '';
    const key = e.key;

    if (key.match(matchDigit)) {
        if (b === '' && operator === '') {
            a += key;
            display.value = a;
        }
        else if (a !== '' && b !== '' && equals) {
            b = key;
            equals = false;
            display.value = b;
        }
        else {
            b += key;
            display.value = b;
        }
        console.log(a, operator, b);
        return;
    }

    if (key.match(matchOperator)) {
        operator = key;
        display.value = key;
        return;
    }

    if (key === '=') {
        switch (operator) {
            case '+':
                a = Number(a) + Number(b);
                break;
            case '-':
                a = Number(a) - Number(b);
                break;
            case '*':
                a = Number(a) * Number(b);
                break;
            case '/':
                a = Number(a) / Number(b);
                break;
        }
        equals = true;
        display.value = a;
    }
})
