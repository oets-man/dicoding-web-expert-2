import FavoriteButtonPresenter from '../../src/scripts/utils/favorite-button-presenter';

const createFavoriteButtonPresenterWithRestaurant = async (restaurant) => {
	await FavoriteButtonPresenter.init({
		favoriteButtonContainer: document.querySelector(
			'#favorite-button-container'
		),
		restaurant,
	});
};
const clickButton = () =>
	document.querySelector('#btn-favorite').dispatchEvent(new Event('click'));

const addFavoriteButtonContainer = () => {
	document.body.innerHTML = '<div id="favorite-button-container"></div>';
};

const labelFavorite = () =>
	document.querySelector('[aria-label="Favoritkan restoran ini"]');

const labelUnfavorite = () =>
	document.querySelector(
		'[aria-label="Hapus restoran ini dari daftar favorit"]'
	);
export {
	createFavoriteButtonPresenterWithRestaurant,
	clickButton,
	addFavoriteButtonContainer,
	labelFavorite,
	labelUnfavorite,
};
