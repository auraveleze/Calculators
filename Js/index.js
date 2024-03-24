//* Calc1
const displayPreviousVal = document.getElementById('previous');
const displayCurrentVal = document.getElementById('current');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');

const display = new Display(displayPreviousVal, displayCurrentVal);

numberButtons.forEach(button => {
    button.addEventListener('click', () => display.addNumber(button.innerHTML));
});

operatorButtons.forEach(button => {
    button.addEventListener('click', () => display.compute(button.value))
});

//* Calc2


//* Calc3


//* Calc4
