import URL from '../config/url';
import dataApi from '../data/data-api';
import UrlParser from '../routes/url-parser';

const Detail = {
	async renderHeader() {
		const hero = document.querySelector('#hero');
		hero.innerHTML = `
			<img src="./images/hero.jpg" alt="gambar hero" id="hero-img" />
		`;

		const main = document.querySelector('#main');
		main.innerHTML = `
            <h2 id="detail-title">Detail Warung</h2>
            <div class="container" id="card-container"></div>
        `;
	},

	async renderContent() {
		const id = UrlParser.parseActiveUrlWithoutCombiner().id;
		try {
			const result = await dataApi.getRestaurant(id);
			const restaurant = result.restaurant;
			console.log(restaurant);
			document
				.querySelector('#hero-img')
				.setAttribute('src', `${URL.PICTURE.MEDIUM}/${restaurant.pictureId}`);
			document.querySelector('#detail-title').innerText = restaurant.name;
		} catch (error) {
			alert(error.message);
		}
	},
};
export default Detail;
