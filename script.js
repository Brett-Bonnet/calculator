
const numBtn = document.querySelectorAll('.numbutton');
const operBtn = document.querySelectorAll('.operbutton');
const crntArgs = document.getElementById('arguments');
const result = document.getElementById('result');
const equalBtn = document.getElementById('#equals');

Array.prototype.clear = function() {
    this.splice(0, this.length);
};
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

const operList = ['+', '-', '*', '/'];


displayResult('0');


numBtn.forEach(button => button.addEventListener('click', runCalc));
operBtn.forEach(button => button.addEventListener('click', runCalc));


function runCalc(e) {
let current = e.target.firstChild.nodeValue;
let i = arr.findIndex(el => isNaN(el) && el !== '.');
let j = i + 1;
firstArg = parseFloat(arr.slice(0, i).join(''));
secondArg = parseFloat(arr.slice(j).join(''));
operator = arr[i];




  if (current === '=') {
  	 const answer = getResult(firstArg, secondArg, operator);
     const cleanAnswer = cleanNum(answer);
	 console.log(cleanAnswer);
	 displayResult(cleanAnswer);
	 displayArgs('')
  } else if (current === 'C') {
    arr.clear();
	dispArr.clear();
	argsArr.clear();
	console.log(arr);
	displayResult('0');
	displayArgs('')
	
  } else if (operList.includes(current)) {
	  if (!isSecondOper(arr)) {
			arr.push(current);
			argsArr.push(current);
			displayArgs(argsArr.join(''));
			
	    } else if (isSecondOper(arr)) { 
		    let answer = getResult(firstArg, secondArg, operator);
			argsArr.push(current);
		    displayResult(cleanNum(answer));
			displayArgs(argsArr.join(''));
			arr = [answer, current];
			
	    }
	
	
  } else if (isSecondOper(arr)){
	  dispArr.clear();
	  dispArr.push(current);
	  arr.push(current)
	  dispArr.push(current)
	  argsArr.push(current)
	  displayResult((arr.slice(j).join('')));
      	 
	  
  } else {
	  arr.push(current)
	  dispArr.push(current)
	  argsArr.push(current)
	  displayResult(dispArr.join(''));
	  
  }
}

function getResult(a, b, c) {
    return c === '+' ? a + b
	     : c === '-' ? a - b
		 : c === '*' ? a * b
		 : c === '/' ? a / b
         : false;		 
		 
}

function isSecondOper(array) {
  let value = /\+|\-|\*|\//.test(array);
  return value;
}



function isInt(n) {
	return n % 1 === 0;
}

function cleanNum(num) {
   if (!isInt(num*1)) {
	   return num.toString().length > 6 ? (num*1).toFixed(7) : num
   } else {
	   return num;
   }
}

function displayResult(num) {
	result.textContent = num;
}

function displayArgs(nums) {
	crntArgs.textContent = nums;
	
}


