let numOne = '';
let operator ='';
let numTwo = '';
const $operator = document.querySelector('#operator');
const $output = document.querySelector('#output'); 
const onClickNumber = (event) => {
    if (!operator) {
        numOne += event.target.textContent;
        $output.value += event.target.textContent;
        return;
    }

    if (!numTwo) {
        $output.value = '';
    }
    numTwo += event.target.textContent;
    $output.value += event.target.textContent;
};

document.querySelector('#b0').addEventListener('click', onClickNumber);
document.querySelector('#b1').addEventListener('click', onClickNumber);
document.querySelector('#b2').addEventListener('click', onClickNumber);
document.querySelector('#b3').addEventListener('click', onClickNumber);
document.querySelector('#b4').addEventListener('click', onClickNumber);
document.querySelector('#b5').addEventListener('click', onClickNumber);
document.querySelector('#b6').addEventListener('click', onClickNumber);
document.querySelector('#b7').addEventListener('click', onClickNumber);
document.querySelector('#b8').addEventListener('click', onClickNumber);
document.querySelector('#b9').addEventListener('click', onClickNumber);


const onClickOperator = (op) => () => {
    if (numOne) {
        operator = op;
        $operator.value = op;
    } else {
        alert('숫자를 입력하세요.');
    }
}


document.querySelector('#divide').addEventListener('click', onClickOperator('÷'));
document.querySelector('#multiply').addEventListener('click', onClickOperator('*'));
document.querySelector('#minus').addEventListener('click', onClickOperator('-'));
document.querySelector('#plus').addEventListener('click', onClickOperator('+'));
document.querySelector('#calculate').addEventListener('click', () => {
    if (numTwo) {
        switch (operator) {
            case '÷':
                $output.value = numOne / numTwo;
                break;
            case '*':
                $output.value = numOne * numTwo;
                break;
            case '-':
                $output.value = numOne - numTwo;
                break;
            case '+':
                $output.value = parseInt(numOne) + parseInt(numTwo);    
            default:
                break;
            }
            $operator.value = '';
            numOne = $output.value;
            operator = '';    
            numTwo = '';   
        } else {
            alert('숫자를 입력하세요.');
        }
    });
    document.querySelector('#AC').addEventListener('click', () => {
        numOne = '';
        operator = '';
        numTwo = '';
        $operator.value = '';
        $output.value = '';
    });
 

document.querySelector('#dot').addEventListener('click', onClickNumber);   

 document.querySelector('#positiveNegative').addEventListener('click', onClickNumber);

 document.querySelector('#percentage').addEventListener('click', () => {
    $output.value = $output.value % 100;    // 안됨
 });

 // . , +/-, % 구현 못함
 // 일단 커밋해놓고 eval 써보고 다른 방법 또 찾기