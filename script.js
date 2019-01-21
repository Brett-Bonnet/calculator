
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
}

let arr = [];



numBtn.forEach(button => button.addEventListener('click', runCalc));
operBtn.forEach(button => button.addEventListener('click', runCalc));


function runCalc(e) {
let current = e.target.firstChild.nodeValue;
let i = arr.findIndex(el => isNaN(el) && el !== '.');
let j = i + 1;
if (current === '=') {
  let first = arguments.firstArg = parseFloat(arr.slice(0, i).join(''));
  let second = arguments.secondArg = parseFloat(arr.slice(j).join(''));
  let oper = arguments.operator = arr[i];
	console.log(first);
	console.log(second);
	console.log(oper);
    console.log(getResult(first, second, oper))
	 	 
} else if (current === 'C'){
    arr.clear();
	
	console.log(arr);

  } else {
	arr.push(current);
    console.log(arr);  
  }
}

function getResult(a, b, c) {
	return c === '+' ? a + b
	     : c === '-' ? a - b
		 : c === '*' ? a * b
		 : c === '/' ? a / b
         : false;		 
}


