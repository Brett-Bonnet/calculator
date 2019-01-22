
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
const operList = ['+', '-', '*', '/'];


numBtn.forEach(button => button.addEventListener('click', runCalc));
operBtn.forEach(button => button.addEventListener('click', runCalc));


function runCalc(e) {
let current = e.target.firstChild.nodeValue;
let i = arr.findIndex(el => isNaN(el) && el !== '.');
let j = i + 1;
let first = arguments.firstArg = parseFloat(arr.slice(0, i).join(''));
let second = arguments.secondArg = parseFloat(arr.slice(j).join(''));
let oper = arguments.operator = arr[i];





  if (current === '=') {
  	 const answer = getResult(first, second, oper);	 
	 console.log(answer);
  } else if (current === 'C') {
    arr.clear();
	console.log(arr);
  } else if (operList.includes(current)) {
	  if (!isSecondOper(arr)) {
			console.log('first operator');
			arr.push(current);
			console.log(arr);
	    } else if (isSecondOper(arr)) { 
		    const answer = getResult(first, second, oper);
		    arr = [answer, current];
		    console.log(answer);
		    console.log(arr);
		    console.log('second operator');
	    }
	
	
  } else {
	  arr.push(current)
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

function isSecondOper(array) {
  let value = /\+|\-|\*|\//.test(array);
  return value;
}


