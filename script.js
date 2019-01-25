
const numBtn = document.querySelectorAll('.numbutton');
const operBtn = document.querySelectorAll('.operbutton');
const crntArgs = document.getElementById('arguments');
const result = document.getElementById('result');
const equalBtn = document.getElementById('#equals');
const operList = ['+', '-', '*', '/'];
const btn = document.querySelectorAll('button');

numBtn.forEach(button => button.addEventListener('click', runCalc));
operBtn.forEach(button => button.addEventListener('click', runCalc));
window.addEventListener('keydown', runCalc);


let arguments = {
  firstArg: [],
  operator: '',
  secondArg: [],
  dispArr: [],
  argsArr: [],
  arr: [],  
}

let arr = arguments.arr;
let dispArr = arguments.dispArr;
let argsArr = arguments.argsArr;
let firstArg = arguments.firstArg;
let secondArg = arguments.secondArg;
let operator = arguments.operator;

displayResult('0');

function runCalc(e) {
  let key = document.querySelector(`button[data-key="${e.keyCode}"]`)
  let keyValue = key.textContent;
  let current = e.target.firstChild.nodeValue && keyValue;
  console.log(keyValue);
  let i = arr.findIndex(el => isNaN(el) && el !== '.');
  let j = i + 1;
  firstArg = parseFloat(arr.slice(0, i).join(''));
  secondArg = parseFloat(arr.slice(j).join(''));
  operator = arr[i];
  let answer = cleanNum(getResult(firstArg, secondArg, operator));

  if (current === '=') {
   if(operator) {
     if (answer === Infinity) {
         displayResult("Don't do that");
           arr.pop();      
     } else {
       displayResult(answer);
             displayArgs('')
     }
   }  else {
     displayResult('ERROR');
   }
  } else if (current === 'C') {
      clearCalc();
  } else if (operList.includes(current)) {
      
      if (!isSecondOper(arr)) {
          pushToArrs(current, arr, argsArr);
          displayArgs(argsArr.join(''));
      
       } else if (isSecondOper(arr)) {
                if (answer === Infinity) {
                displayResult("Don't do that");
                  arr.pop()         
         } else {      
             argsArr.push(current);
             displayResult(answer);
             displayArgs(argsArr.join(''));
             arr = [answer, current];
           }
     }
  } else if (isSecondOper(arr)){
    dispArr.clear();
    pushToArrs(current, arr, dispArr, argsArr);
    displayResult((arr.slice(j).join('')));
    
  } else {
    pushToArrs(current, arr, dispArr, argsArr);
      displayResult(dispArr.join(''));
  }
};


function getResult(a, b, c) {
    return c === '+' ? a + b
       : c === '-' ? a - b
       : c === '*' ? a * b
       : c === '/' ? a / b
       : false;     
}

function displayResult(num) {
  result.textContent = num;
}

function cleanNum(num) {
   if (!isInt(num*1)) {
     return num.toString().length > 7 ? Math.round(100*num)/100 : num
   } else {
     return num;
   }
}

function displayArgs(nums) {
  crntArgs.textContent = nums;
}

function clearCalc() {
  arr.clear();
  dispArr.clear();
  argsArr.clear();
  displayResult('0');
  displayArgs('');
}

function pushToArrs(curr, ...arrs) {
   const push = arrs.forEach(array => array.push(curr));
}

function isSecondOper(array) {
  let value = /\+|\-|\*|\//.test(array);
  return value;
}

function isInt(n) {
  return n % 1 === 0;
}

Array.prototype.clear = function() {
    this.splice(0, this.length);
};
