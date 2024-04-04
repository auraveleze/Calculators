const displayPreviousVal = document.getElementById('previous');
const displayCurrentVal = document.getElementById('current');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');

class Display {
    constructor(displayPreviousVal, displayCurrentVal) {
        this.displayCurrentVal = displayCurrentVal;
        this.displayPreviousVal = displayPreviousVal;
        this.scientificCalc = new Scientific();
        this.typeOperation = undefined;
        this.currentVal = '';
        this.previousVal = '';
        this.signs = {
            add: '+',
            subtract: '-',
            multiply: 'x',
            divide: '/'
        };
    }
    
    deleteNumber() {
        this.currentVal = this.currentVal.toString().slice(0,-1);
        this.printValues();
    }
    
    removeNumbers() {
        this.currentVal = '';
        this.previousVal = '';
        this.typeOperation = undefined;
        this.printValues();
    }
    
    compute(type) {
        this.typeOperation !== 'equal' && this.calculate();
        this.typeOperation = type;
        this.previousVal = this.currentVal || this.previousVal;
        this.currentVal = '';
        this.printValues();
    }
    
    addNumber(number) {
        if(number === '.' && this.currentVal.includes('.')) return
        this.currentVal = this.currentVal.toString() + number.toString();
        this.printValues();
    }
    
    printValues() {
        this.displayCurrentVal.textContent = this.currentVal;
        this.displayPreviousVal.textContent = `${this.previousVal} ${this.signs[this.typeOperation] || ''}`;
    }
    
    calculate() {
        const previousVal = parseFloat(this.previousVal);
        const currentVal = parseFloat(this.currentVal);
        
        if (isNaN(currentVal) || isNaN(previousVal)) return
        this.currentVal = this.scientificCalc[this.typeOperation](previousVal, currentVal).toString();
    }
}

class Scientific {
    add(num1, num2) {
        return num1 + num2;
    }

    subtract(num1, num2) {
        return num1 - num2;
    }
    
    multiply(num1, num2) {
        return num1 * num2;
    }

    divide(num1, num2) {
        return num1 / num2;
    }
}

const display = new Display(displayPreviousVal, displayCurrentVal);

numberButtons.forEach(button => {
    button.addEventListener('click', () => display.addNumber(button.innerHTML));
});

operatorButtons.forEach(button => {
    button.addEventListener('click', () => display.compute(button.value))
});