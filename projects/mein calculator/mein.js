const currentResult = document.querySelector('[data-current-result]') ;
const previousResult = document.querySelector('[data-previous-result]')
const clearButton = document.querySelector('[data-all-clear]');
const deleteButton = document.querySelector('[data-delete]');
const operators = document.querySelectorAll('[data-operation]');
const numbersButton = document.querySelectorAll('[data-number]');
const equalButton = document.querySelector('[data-equals]');



class Calculator {
    constructor(previousResult, currentResult){
    this.previousResult= previousResult,
    this.currentResult = currentResult,
    this.clear()
    };

    clear(){
        this.currentOperand = '';
        this.previousOperand ='';
        this.operation = undefined;
    };

    appendNumber (number){
        if(this.currentOperand.includes('.') && number === '.')return
        this.currentOperand = this.currentOperand.toString() + number.toString();
    };

    operators(operator){
    if(this.currentOperand === '') return
    if(this.previousOperand !== ''){
        this.compute();
    }
    this.operation = operator.innerText;
    this.previousOperand = this.currentOperand;
    this.currentOperand = '';
    };

    delete(){
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
    };

    compute(){
        let computation;
        let previous = parseFloat(this.previousOperand);
        let current  = parseFloat(this.currentOperand);

        if (isNaN(previous)||isNaN(current))return 

        switch (this.operation) {
                case '+':
                    computation = previous + current;
                break;
                case '-':
                    computation = previous - current;
                break;
                case '*':
                    computation = previous * current;
                break;
                case '÷':
                    computation = previous / current;    
                break;
            default:
                return
        }
        this.currentOperand=computation;
        this.operation= undefined;
        this.previousOperand='';

    };
    getDisplayNumber(number){
        const stringNumber  = number.toString();
        const integerDigits = parseFloat(stringNumber.split('.')[0]);
        const decimalDigits = stringNumber.split('.')[1];
        let integerDisplay ; 
        if(isNaN(integerDigits)){
            integerDisplay= '';
        }else {
            integerDisplay = integerDigits.toLocaleString('en', {maximumFractionDigits: 0});
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`; 
        }else{
            return integerDisplay;
        }
    };
    updateDisplay(){
        this.currentResult.innerText = this.getDisplayNumber(this.currentOperand);
        if(this.operation != null) {
            this.previousResult.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
        }else{
            this.previousResult.innerText = '';
        }
       
        
    };
};

const calcul = new Calculator(previousResult, currentResult);

numbersButton.forEach(number => {
    number.addEventListener('click', ()=>{
        calcul.appendNumber(number.innerText);
        calcul.updateDisplay()
    })
})

operators.forEach(operator => {
    operator.addEventListener('click', ()=>{
        calcul.operators(operator);
        calcul.updateDisplay();
    })
})
clearButton.addEventListener('click', ()=>{
    calcul.clear();
    calcul.updateDisplay();
})
deleteButton.addEventListener('click', ()=>{
    calcul.delete()
    calcul.updateDisplay()
})
equalButton.addEventListener('click', ()=>{
    calcul.compute();
    calcul.updateDisplay();
})