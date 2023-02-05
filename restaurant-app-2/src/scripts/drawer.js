const drawer = () => {
	const menu = document.querySelector('#menu');
	const hero = document.querySelector('.hero');
	const main = document.querySelector('main');
	const drawerButton = document.querySelector('nav');

	menu.addEventListener('click', (e) => {
		drawerButton.classList.toggle('open-nav');
		e.stopPropagation();
	});

	hero.addEventListener('click', () => {
		drawerButton.classList.remove('open-nav');
	});

	main.addEventListener('click', () => {
		drawerButton.classList.remove('open-nav');
	});
};
export default drawer;
