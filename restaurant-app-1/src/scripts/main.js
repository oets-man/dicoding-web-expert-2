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
				setTimeout(() => {
					container.appendChild(spinner);
					container.appendChild(card);
					setTimeout(() => {
						container.removeChild(spinner);
						card.item = restaurant;
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
