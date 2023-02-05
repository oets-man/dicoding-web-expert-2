const DrawerInitiator = {
	init({ button, drawer, hero, main }) {
		button.addEventListener('click', (event) => {
			this._toggleDrawer(event, drawer);
		});

		hero.addEventListener('click', (event) => {
			this._closeDrawer(event, drawer);
		});

		main.addEventListener('click', (event) => {
			this._closeDrawer(event, drawer);
		});
	},

	_toggleDrawer(event, drawer) {
		event.stopPropagation();
		drawer.classList.toggle('open-nav');
	},

	_closeDrawer(event, drawer) {
		event.stopPropagation();
		drawer.classList.remove('open-nav');
	},
};

export default DrawerInitiator;
