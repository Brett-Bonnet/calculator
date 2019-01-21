
const numBtn = document.querySelectorAll('.numbutton');
const operBtn = document.querySelectorAll('.operbutton');
const crntArgs = document.getElementById('arguments');
const result = document.getElementById('result');
const equalBtn = document.getElementById('#equals');
let display = 0;

let arguments = {
  firstArg: [],
  operator: '',
  secondArg: [],	
}

let array = [];


result.textContent = display ;

numBtn.forEach(button => button.addEventListener('click', runCalc));
operBtn.forEach(button => button.addEventListener('click', runCalc));


function runCalc(e) {
let current = e.target.firstChild.nodeValue;
let i = (array.indexOf('+') || array.indexOf('-') || array.indexOf('*') || array.indexOf('/'));
let j = i + 1;
if (current === '=') {
    arguments.firstArg = array.slice(0, i);
	arguments.secondArg = array.slice(j);
	arguments.operator = array[i];
    console.log(arguments.firstArg);
	console.log(arguments.secondArg);
	console.log(arguments.operator);
} else {
  array.push(current);
  console.log(array);
		
}

}





function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}


function multiply(array) {
  return array.reduce((current, total) => total * current, 1);
}
