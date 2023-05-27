// Строгий режим
"use strict";


function gayFunction() {
	alert('Я тоже');
};

function notGayFunction() {
	alert('Нихуя ты изворотливый')
};

const random = (min, max) => {
	const rand = min + Math.random() * (max - min + 1);
	console.log(rand)
	return Math.floor(rand);
}

const btnRun = document.getElementById('btn2')
console.log(btnRun)

btnRun.addEventListener('mouseenter', () => {
	btnRun.style.left = `${random(0, 90)}%`;
	btnRun.style.top = `${random(0, 90)}%`;
	console.log('event Listener')
})