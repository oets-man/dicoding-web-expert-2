import URL from '../../config/url';
import '../list-card';
import '../load-spinner';

const parsingListRestaurants = (container, restaurants) => {
	restaurants.forEach((restaurant, index) => {
		restaurant.urlPicture = `${URL.PICTURE.SMALL}/${restaurant.pictureId}`;
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
export default parsingListRestaurants;
