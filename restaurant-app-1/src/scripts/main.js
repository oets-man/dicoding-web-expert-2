import '../components/list-card';
import '../components/load-spinner';
import data from '../DATA.json';

const main = () => {
	const container = document.querySelector('#card-container');
	const start = () => {
		data.restaurants.forEach((restaurant, index) => {
			const spinner = document.createElement('load-spinner');
			const card = document.createElement('list-card');
			setTimeout(() => {
				container.appendChild(spinner);
				container.appendChild(card);
				setTimeout(() => {
					container.removeChild(spinner);
					card.item = restaurant;
				}, 500);
			}, 500 * index);
		});
	};

	window.addEventListener('load', start);
};

export default main;
