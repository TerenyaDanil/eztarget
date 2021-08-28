

const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__nav');

if (burger && menu) {
	burger.onclick = function () {
		burger.classList.toggle('active');
		menu.classList.toggle('active');
	}
}



function showPassword() {
	const password = document.querySelectorAll('.password__img');

	for (let i = 0; i < password.length; i++) {
		password[i].addEventListener('click', () => {
			if (password[i].previousElementSibling.getAttribute('type') === 'password') {
				password[i].previousElementSibling.setAttribute("type", "text")

			}
			else {
				password[i].previousElementSibling.setAttribute("type", "password")
			}
		})


	}
}

showPassword()

const lan = document.querySelectorAll('.lan-welcome');

for (let i = 0; i < lan.length; i++) {
	lan[i].onclick = function () {
		lan[i].classList.toggle('active');
	}
}
