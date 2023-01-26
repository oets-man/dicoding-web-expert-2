import '../component/my-card';
import { DataSource } from './data-source';

const main = () => {
	const cardContainer = document.querySelector('#card-container');
	const urlPicture = 'https://restaurant-api.dicoding.dev/images/small';
	const start = async () => {
		try {
			const results = await DataSource.getRestaurant();
			const { restaurants } = results;
			for (const [index, restaurant] of restaurants.entries()) {
				setTimeout(() => {
					restaurant.picture = `${urlPicture}/${restaurant.pictureId}`;
					const myCard = document.createElement('my-card');
					myCard.item = restaurant;
					cardContainer.appendChild(myCard);
				}, 250 * index);
			}
		} catch (error) {
			alert(error);
		}
	};

	window.addEventListener('load', start);
};

export { main };
