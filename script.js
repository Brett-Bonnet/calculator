
const numBtn = document.querySelectorAll('.numbutton');
const operBtn = document.querySelectorAll('.operbutton');
const crntArgs = document.getElementById('arguments');
const result = document.getElementById('result');
const equalBtn = document.getElementById('#equals');
let display = 0;
let arguments = {};
let array = [];
let newArray = [];


result.textContent = display 

numBtn.forEach(button => button.addEventListener('click', runCalc));
operBtn.forEach(button => button.addEventListener('click', runCalc));


function runCalc(e) {
let current = e.target.firstChild.nodeValue;
  if(ifNaN(current)) {
   console.log('operator')
   checkOperator();
  } else {
  	array.push(current)
  	arguments.holding = [array.join('')]
  	console.log(arguments.holding);
  }
}




function checkOperator(arr, val) {
  return arr.some(function(arrVal) {
  	return val === arrVal;
  });
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
