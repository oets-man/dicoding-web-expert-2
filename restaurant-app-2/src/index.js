import 'regenerator-runtime'; /* for async await transpile */
import './styles/main.scss';
// import main from './main';
import App from './app';

const app = new App({
	button: document.querySelector('#menu'),
	drawer: document.querySelector('#drawer'),
	hero: document.querySelector('.hero'),
	main: document.querySelector('main'),
});

window.addEventListener('load', () => {
	app.renderPage();
});

window.addEventListener('hashchange', () => {
	app.renderPage();
});
