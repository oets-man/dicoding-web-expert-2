import '../components/card/list-card';
import data from './data-source';
import { URL_PICTURE } from '../config/url';

const main = () => {
	const container = document.querySelector('#card-container');
	const start = async () => {
		try {
			const results = await data.getRestaurant();
			const { restaurants } = results;
			restaurants.forEach((restaurant, index) => {
				setTimeout(() => {
					restaurant.picture = `${URL_PICTURE.SMALL}/${restaurant.pictureId}`;
					const list = document.createElement('list-card');
					list.item = restaurant;
					container.appendChild(list);
				}, 250 * index);
			});
		} catch (error) {
			alert(error);
		}
	};

	window.addEventListener('load', start);
};

export default main;
