




class Calculator {
    constructor(displayElement) {
        this.displayElement = displayElement;
        this.displayContent ='';
    }
    appendNum(number) {
        this.displayContent += Number;
    }
    
    appendResult(result) {
        this.displayContent += result;
    }
    updateDisplay() {
        this.displayElement.value = this.displayContent;
    }
}


const buttons = calculator.querySelectorAll('button');
const displayElement = document.querySelector('input');
const calculator = new Calculator(displayElement);



buttons.forEach(button => {
    button.addEventListener('click', () => {
        switch (button.dataset.type) {
            case 'operator':
                console.log('operator');
                break
            case 'positiveNegative':
                console.log('positiveNegative');
                break
            case 'percentage':
                console.log('percentage');
                break 
            case 'AC':
                console.log('AC');
            case 'result':
                console.log('result');
            default:
                console.log('number');
                break
        }
    })
})