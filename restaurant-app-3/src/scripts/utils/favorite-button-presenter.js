import dataIdb from '../data/data-idb';
import {
	templateButtonFavorite,
	templateButtonUnfavorite,
} from '../components/template-creator/button-favorite';
import alertify from 'alertifyjs';

const FavoriteButtonPresenter = {
	async init({ favoriteButtonContainer, restaurant }) {
		this._favoriteButtonContainer = favoriteButtonContainer;
		this._restaurant = restaurant;

		await this._renderButton();
	},

	async _renderButton() {
		const { id } = this._restaurant;

		if (await this._isExist(id)) {
			this._renderFavorite();
		} else {
			this._renderUnfavorite();
		}
	},

	async _isExist(id) {
		const restaurant = await dataIdb.getRestaurant(id);
		return !!restaurant;
	},

	_renderFavorite() {
		this._favoriteButtonContainer.innerHTML = templateButtonUnfavorite();
		const button = document.querySelector('#btn-favorite');
		button.addEventListener('click', async () => {
			await dataIdb.deleteRestaurant(this._restaurant.id);
			this._renderButton();
			alertify.warning('Dihapus dari daftar favorit');
		});
	},

	_renderUnfavorite() {
		this._favoriteButtonContainer.innerHTML = templateButtonFavorite();
		const button = document.querySelector('#btn-favorite');
		button.addEventListener('click', async () => {
			await dataIdb.putRestaurant(this._restaurant);
			this._renderButton();
			alertify.success('Ditambahkan ke daftar favorit');
		});
	},
};

export default FavoriteButtonPresenter;
