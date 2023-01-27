const drawer = () => {
	const menu = document.querySelector('#menu');
	const hero = document.querySelector('.hero');
	const main = document.querySelector('main');
	const drawer = document.querySelector('nav');

	menu.addEventListener('click', (e) => {
		drawer.classList.toggle('open-nav');
		e.stopPropagation();
	});

	hero.addEventListener('click', () => {
		drawer.classList.remove('open-nav');
	});

	main.addEventListener('click', () => {
		drawer.classList.remove('open-nav');
	});
};
export default drawer;
