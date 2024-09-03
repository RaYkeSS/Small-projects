const calculatorApp = document.getElementById('calc');

const btns = [];
for(let i = 0; i < 14; i++) {
    btns.push(document.createElement('button'));
}

const [tabButton, SelectButtonCalc, SelectButtonConvert, toggleMode, memoryTab, currentNum, clear, backSpace, toPercents, division, multiply, decrease, increase, equals] = btns;

const nums = [];
for(let i = 0; i < 12; i++) {
    nums.push(document.createElement('button'));
}

tabButton.textContent = '--'
SelectButtonCalc.textContent = 'Calculator';
SelectButtonConvert.textContent = 'Converter';
toggleMode.textContent = '>>>'
currentNum.textContent = '0'
clear.textContent = 'AC'
backSpace.textContent = 'Back'
toPercents.textContent = '%'
division.textContent = '/'
multiply.textContent = 'X'
decrease.textContent = '-'
increase.textContent = '+'
equals.textContent = '='


const [number0, number1, number2, number3, number4, number5, number6, number7, number8, number9, plusMinus, point] = nums;

for(let i = 0; i < nums.length - 2; i++) {
    nums[i].textContent = i
};
plusMinus.textContent = '+-';
point.textContent = '.'


memoryTab.classList.add('w-full', 'text-2xl')
currentNum.classList.add('w-full', 'text-9xl')

btns.forEach(btn => {
    btn.dataset.id = btn.textContent
    btn.classList.add('relative', 'inline-flex', 'items-center', 'px-4', 'py-2', 'text-sm', 'font-semibold', 'text-gray-900', 'ring-1', 'ring-inset', 'ring-gray-300', 'hover:bg-gray-50', 'focus:z-20', 'focus:outline-offset-0', 'rounded-2xl')
    calculatorApp.append(btn)
})
nums.forEach(num => {
    num.dataset.id = num.textContent
    num.classList.add('num', 'relative', 'inline-flex', 'items-center', 'px-4', 'py-2', 'text-sm', 'font-semibold', 'text-gray-900', 'ring-1', 'ring-inset', 'ring-gray-300', 'hover:bg-gray-50', 'focus:z-20', 'focus:outline-offset-0', 'rounded-2xl')
    calculatorApp.append(num)
})

calculatorApp.addEventListener('click', function(e) {
    if (!e.target.closest('.num')) {
        return
    }
    currentNum.textContent += e.target.dataset.id
})

document.addEventListener('keypress', function(e) {
    if (!nums.find(el => el.dataset.id === e.key) && !btns.find(el => el.dataset.id === e.key)) {
        return
    }
    if(true) {}
    console.log(e.key);
    currentNum.textContent += e.key

})