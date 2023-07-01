"use strict";

const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	IOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.IOS() ||
			isMobile.Opera() ||
			isMobile.Windows());
	},
};



function gayFunction() {
	alert('Я тоже');
};

function notGayFunction() {
	if (isMobile.any()) {
	} else {
		alert('Нихуя ты изворотливый')
	}
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
