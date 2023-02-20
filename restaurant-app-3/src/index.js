import 'regenerator-runtime'; /* for async await transpile */
import App from './scripts/app';
import swRegister from './scripts/pwa/sw-register';

const app = new App({
	button: document.querySelector('#menu'),
	drawer: document.querySelector('#drawer'),
	hero: document.querySelector('#hero'),
	main: document.querySelector('#main'),
});

window.addEventListener('load', () => {
	app.renderPage();
	swRegister();
});

window.addEventListener('hashchange', () => {
	app.renderPage();
});
