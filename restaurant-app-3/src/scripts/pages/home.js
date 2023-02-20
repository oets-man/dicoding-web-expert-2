import alertify from 'alertifyjs';
import dataApi from '../data/restaurants-api';
import parsingListRestaurants from '../components/template-creator/list-restaurants';

const Home = {
	async renderHeader() {
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
