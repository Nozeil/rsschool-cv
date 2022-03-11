const burger = document.querySelector('.header-container-burger');
const nav = document.querySelector('.nav');

const toogleClass = () => {
	burger.classList.toggle('active');
	nav.classList.toggle('active');
}

burger.addEventListener('click', toogleClass);

nav.addEventListener('click', (event) => {
	if (event.target.classList.contains('nav-link')) toogleClass();
})
