import parsingListRestaurants from '../components/template-creator/list-restaurants';
import dataIdb from '../data/restaurants-idb';

const Favorite = {
	async renderHeader() {
		const main = document.querySelector('#main');
		main.innerHTML = `
            <h2>Daftar Warung Favorit</h2>
            <div class="container" id="card-container"></div>
        `;
	},

	async renderContent() {
		const container = document.querySelector('#card-container');
		try {
			const restaurants = await dataIdb.getAllRestaurants();
			if (restaurants.length == 0) {
				container.innerHTML += `
					<p role='alert' class='no-restaurant'>Belum ada warung yang difavoritkan. <br/>Silakan favoritkan beberapa warung!</p>
				`;
				return;
			}
			parsingListRestaurants(container, restaurants);
		} catch (error) {
			container.innerHTML += `
				<p role='alert' class='no-restaurant'>Terjadi keasalahan.<br/>${error}</p>
			`;
		}
	},
};
export default Favorite;
