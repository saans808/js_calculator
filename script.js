let numOne = '';
let operator ='';
let numTwo = '';
const $operator = document.querySelector('#operator');
const $output = document.querySelector('#output'); 
const onClickNumber = (event) => {
    if (!operator) {    // 비어있다
        numOne += event.target.textContent; // 버튼의 텍스트 가져옴
        $output.value += event.target.textContent;
        return;
    }

    if (!numTwo) {  
        $output.value = ''; 
        // num2가 없으면 화면의 숫자를 지워라(연산자 다음으로 num2 입력을 위해)
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
document.querySelector('#dot').addEventListener('click', () => {
   // 나누어 떨어지지 않는 연산 급발진함 
   $output.value += '.';
    if (($output.value.match(/\./g)?.length) <= 1) {
        numOne = $output.value
        numTwo = $output.value 
        console.log($output.value);
    } else {
        $output.value = $output.value.slice(0, -1); // 알림창만 뜨고 점이 입력돼서 잘라줌
        alert("Only one dot can exist");
    }
});   

const onClickOperator = (op) => () => { // 함수가 함수를 리턴 (고차함수)
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
                $output.value = parseFloat(numOne) + parseFloat(numTwo);   
                 //-*/는 문자열이 숫자로 바뀜 +는 안바뀜 헷갈리면 다 써도 됨
            default:
                break;
            }
            numOne = $output.value;     // = 안누르고 부호만으로 이어서 계산
            numTwo = '';   
        }
    if (numOne) {
        operator = op;
        $operator.value = op;
    } else {
        alert('Enter a number'); ////////////
    }
};


document.querySelector('#divide').addEventListener('click', onClickOperator('÷'));
document.querySelector('#divide').addEventListener('click', onClickOperator('÷'));
document.querySelector('#divide').addEventListener('click', onClickOperator('÷'));
document.querySelector('#multiply').addEventListener('click', onClickOperator('*'));
document.querySelector('#minus').addEventListener('click', onClickOperator('-'));
document.querySelector('#plus').addEventListener('click', onClickOperator('+'));
document.querySelector('#calculate').addEventListener('click', () => {
    if (numTwo) {
        switch (operator) {
            case '÷':
                $output.value = numOne / numTwo;
       //         if ((numTwo) == '0') {
              //      alert("NaN");   // 계산기 안에 출력 고민
             //      $output.value.write("NaN");
             //       document.getElementById('$output').innerHTML = "NaN";
         //       }
                break;
            case '*':
                $output.value = numOne * numTwo;
                break;
            case '-':
                $output.value = numOne - numTwo;
                break;
            case '+':
                $output.value = parseFloat(numOne) + parseFloat(numTwo);   
            default:
                break;
            }
            $operator.value = '';   // ac 안누르고 기존 수에 이어서 계산
            numOne = $output.value;
            operator = '';    
            numTwo = '';   
        } else {
            alert('Enter a number');    // num2가 없을 경우
        }
    });

document.querySelector('#AC').addEventListener('click', () => {
    numOne = '';
    operator = '';
    numTwo = '';
    $operator.value = '';
    $output.value = '';
});
 
document.querySelector('#positiveNegative').addEventListener('click', () => {   // 부호 변환
    if (numOne || numTwo) {
        $output.value = $output.value * -1
        numOne = $output.value
        numTwo = $output.value      // or, numTwo 추가로 -1*-1 = -1 해결
    }
});

document.querySelector('#percentage').addEventListener('click', () => { // 백분율
    if (numOne) {
        $output.value = $output.value * 0.01
        numOne = $output.value
    }
});

// 혼자 처음부터 만들어보기

// 소수점 반올림 구현 못함
// 0으로 나눴을때 
// 글자 경고 등장시 버튼 눌렀을때 화면 초기화
// 최대 텍스트 수 15로 제한하기
// 기호 먼저 쓰기
