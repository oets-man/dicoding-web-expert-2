import '../components/list-card';
import '../components/load-spinner';
import data from './data-source';
import { URL_PICTURE } from '../config/url';

const main = () => {
	const container = document.querySelector('#card-container');
	const start = async () => {
		try {
			const results = await data.getRestaurant();
			const { restaurants } = results;

			restaurants.forEach((restaurant, index) => {
				restaurant.picture = `${URL_PICTURE.SMALL}/${restaurant.pictureId}`;
				const spinner = document.createElement('load-spinner');
				const card = document.createElement('list-card');
				card.item = restaurant;
				setTimeout(() => {
					container.appendChild(spinner);
					setTimeout(() => {
						container.appendChild(card);
						container.removeChild(spinner);
					}, 500);
				}, 500 * index);
			});
		} catch (error) {
			alert(error);
		}
	};

	window.addEventListener('load', start);
};

export default main;
