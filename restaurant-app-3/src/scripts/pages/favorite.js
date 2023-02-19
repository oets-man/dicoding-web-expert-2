import parsingListRestaurants from '../components/template-creator/list-restaurants';
import dataIdb from '../data/restaurants-idb';

const Favorite = {
	async renderHeader() {
		const hero = document.querySelector('#hero');
		hero.innerHTML = `
			<picture>
				<source type="image/webp" media="(max-width: 480px)" srcset="./images-sm/hero.webp">
				<source type="image/jpeg" media="(max-width: 480px)" srcset="./images-sm/hero.jpg">

				<source type="image/webp" media="(max-width: 768px)" srcset="./images-md/hero.webp">
				<source type="image/jpeg" media="(max-width: 768px)" srcset="./images-md/hero.jpg">

				<source type="image/webp" srcset="./images-lg/hero.webp">
				<source type="image/jpeg" srcset="./images-lg/hero.jpg">

				<img src="./images-lg/hero.jpg" alt="hero" id="hero-img" />
			</picture>
			<div class="hero-content" id="hero-content">
				<p class="hero-title">Cita Rasa</p>
				<p class="hero-subtitle">Kuliner Nusantara</p>
			</div>
		`;

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
