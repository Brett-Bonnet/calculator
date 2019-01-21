
const numBtn = document.querySelectorAll('.numbutton');
const operBtn = document.querySelectorAll('.operbutton');
const crntArgs = document.getElementById('arguments');
const result = document.getElementById('result');
const equalBtn = document.getElementById('#equals');

let arguments = {
  firstArg: [],
  operator: '',
  secondArg: [],	
}

let array = [];



numBtn.forEach(button => button.addEventListener('click', runCalc));
operBtn.forEach(button => button.addEventListener('click', runCalc));


function runCalc(e) {
let current = e.target.firstChild.nodeValue;
let i = array.findIndex(el => isNaN(el) && el !== '.');
let j = i + 1;
if (current === '=') {
  let first = arguments.firstArg = parseFloat(array.slice(0, i).join(''));
  let second = arguments.secondArg = parseFloat(array.slice(j).join(''));
  let oper = arguments.operator = array[i];
	console.log(first);
	console.log(second);
	console.log(oper);
    console.log(getResult(first, second, oper))
	 	 
} else {
  array.push(current);
  console.log(array);
		
  }
}

function getResult(a, b, c) {
	return c === '+' ? a + b
	     : c === '-' ? a - b
		 : c === '*' ? a * b
		 : c === '/' ? a / b
         : false;		 
}




function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
	return a / b;
	
}

