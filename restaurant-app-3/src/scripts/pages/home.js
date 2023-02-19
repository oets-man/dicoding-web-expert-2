import alertify from 'alertifyjs';
import dataApi from '../data/restaurants-api';
import parsingListRestaurants from '../components/template-creator/list-restaurants';

const Home = {
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
		try {
			const results = await dataApi.getAllRestaurants();
			if (results.error) {
				return alertify.alert('Ops... #1', results.message);
			}
			const { restaurants } = results;
			const container = document.querySelector('#card-container');
			parsingListRestaurants(container, restaurants);
		} catch (error) {
			alertify.alert('Ops... #2', error.message);
		}
	},
};

export default Home;
