import '../components/list-card';
import '../components/load-spinner';
import alertify from 'alertifyjs';
import dataApi from '../data/data-api';
import URL from '../config/url';

const Home = {
	async renderHeader() {
		const hero = document.querySelector('#hero');
		hero.innerHTML = `
			<img src="./images/hero.jpg" alt="gambar hero" id="hero-img" />;
			<div class="hero-content">
				<p class="hero-title">Cita Rasa</p>
				<p class="hero-subtitle">Kuliner Nusantara</p>
			</div>
		`;

		const main = document.querySelector('#main');
		main.innerHTML = `
            <h2>Daftar Warung Nusantara</h2>
            <div class="container" id="card-container"></div>
        `;
	},

	async renderContent() {
		const container = document.querySelector('#card-container');
		try {
			const results = await dataApi.getRestaurants();
			if (results.error) {
				return alertify.alert('Ops... #1', results.message);
			}
			const { restaurants } = results;
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
		} catch (error) {
			alertify.alert('Ops... #2', error.message);
		}
	},
};

export default Home;
