
const numBtn = document.querySelectorAll('.numbutton');
const operBtn = document.querySelectorAll('.operbutton');
let crntArgs = document.getElementById('arguments');
let result = document.getElementById('result');
let array = new Array();



numBtn.forEach(numbutton => numbutton.addEventListener('click', getNum));
operBtn.forEach(operbutton => operbutton.addEventListener('click', getNum));



function getNum(e) {
	let current = e.target.firstChild.nodeValue;
    result.textContent = current;
	array.push(current);
	console.log(array);
	crntArgs.textContent = array.join(' ');
}

