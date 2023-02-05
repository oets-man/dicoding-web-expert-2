import UrlParser from './routes/url-parser';
import routes from './routes';
import DrawerInitiator from './utils/drawer-initiator';

class App {
	constructor({ button, drawer, hero, main }) {
		this._button = button;
		this._drawer = drawer;
		this._hero = hero;
		this._main = main;

		this._initialAppShell();
	}

	_initialAppShell() {
		DrawerInitiator.init({
			button: this._button,
			drawer: this._drawer,
			hero: this._hero,
			main: this._main,
		});
	}

	async renderPage() {
		const url = UrlParser.parseActiveUrlWithCombiner();
		const page = routes[url];
		await page.renderHeader();
		await page.renderContent();
	}
}

export default App;
