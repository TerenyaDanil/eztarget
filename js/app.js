

const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__nav');

if (burger && menu) {
	burger.onclick = function () {
		burger.classList.toggle('active');
		menu.classList.toggle('active');
	}
}



const password = document.querySelectorAll('.password__img');

for (let i = 0; i < password.length; i++) {
	password[i].onclick = function () {
		password[i].previousElementSibling.setAttribute("type", "text")
	}
}




const lan = document.querySelectorAll('.lan-welcome');

for (let i = 0; i < lan.length; i++) {
	lan[i].onclick = function () {
		lan[i].classList.toggle('active');
	}
}
