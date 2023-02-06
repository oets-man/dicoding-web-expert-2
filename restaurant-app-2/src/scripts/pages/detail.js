import URL from '../config/url';
import dataApi from '../data/data-api';
import UrlParser from '../routes/url-parser';
import createStar from '../utils/create-star';
import alertify from 'alertifyjs';

const Detail = {
	async renderHeader() {
		const hero = document.querySelector('#hero');
		hero.innerHTML = `
			<img src="./images/hero.jpg" alt="gambar hero" id="hero-img" />
			<div class="favorite-container">
				<div class="rating">
					<div class="stars-outer">
						<div class="stars-inner" id="stars-inner"></div>
					</div>
					<span class="number-rating" id="number-rating">0.0</span>
				</div>
				<button aria-label="favoritkan restorant ini" id="btn-favorite" class="favorite-btn">
					<i class="fa-regular fa-heart" aria-hidden="true"></i>
				</button>
			</div>
		`;

		const main = document.querySelector('#main');
		main.innerHTML = `
            <h2 id="detail-title">Detail Warung</h2>
			<p class="address" id="address">alamat warung</p>
			<p class="categories" id="categories">Kategori: Masakan</p>
            <div class="container-detail" id="container-detail"></div>
			<div class="reviews-container">
				<h3>Apa Kata Mereka</h3>
				<div class="reviews" id="reviews"></div>
			</div>
			<div class="add-reviews">
				<h3>Tulis Komentarmu!</h3>
				<div class="form-container" id="form-container"></div>
			</div>
        `;
	},

	async renderContent() {
		const id = UrlParser.parseActiveUrlWithoutCombiner().id;
		try {
			const result = await dataApi.getRestaurant(id);
			const restaurant = result.restaurant;
			// console.log(restaurant);
			const { name, description, address, city, pictureId, rating } =
				restaurant;
			const categories = restaurant.categories
				.map((category) => [category.name].join(' '))
				.join('; ');
			const drinks = restaurant.menus.drinks
				.map((drink) => [drink.name].join(' '))
				.join('; ');
			const foods = restaurant.menus.foods
				.map((food) => [food.name].join(' '))
				.join('; ');
			const { customerReviews } = restaurant;

			document
				.querySelector('#hero-img')
				.setAttribute('src', `${URL.PICTURE.MEDIUM}/${pictureId}`);
			document.querySelector('#detail-title').innerText = name;
			document.querySelector(
				'#address'
			).innerText = `${address} - ${city.toUpperCase()}`;
			document.querySelector('#categories').innerText += ` ${categories}`;

			this._parsingDetailRestaurant({ foods, drinks, description });
			this._parsingCustomerReviews(customerReviews);
			this._parsingForm(restaurant.id);

			const starElement = document.querySelector('#stars-inner');
			const ratingElement = document.querySelector('#number-rating');
			createStar({ rating, starElement, ratingElement });

			this._handleClickReview(document.querySelector('#form-review'));
		} catch (error) {
			alert(error.message);
		}
	},

	_parsingForm(restauranId) {
		document.querySelector('#form-container').innerHTML = `
			<form id="form-review">
				<input type="hidden" name="id" value="${restauranId}">
				<label for="name">Nama:</label>
				<input required="" type="text" name="name" id="name" placeholder="Tulis namamu!" autocomplete="off">
				<label for="review">Komentar:</label>
				<textarea required="" id="review" name="review" rows="3" placeholder="Tulis komentarmu!" autocomplete="off"></textarea>
				<div class="buttons">
					<button type="reset">Reset</button>
					<button type="submit">Kirim</button>
				</div>
			</form>
		`;
	},

	_parsingCustomerReviews(customerReviews) {
		customerReviews.forEach((review) => {
			document.querySelector('#reviews').innerHTML += `
				<div class="card-review">
					<p>${review.review}</p>
					<div>
						<p class="by">— ${review.name}</p>
						<p class="on">— ${review.date}</p>
					</div>
				</div>
			`;
		});
	},

	_parsingDetailRestaurant({ foods, drinks, description }) {
		document.querySelector('#container-detail').innerHTML = `
		<div class="detail-restaurant">
			<div class="menus">
				<div class=foods>
					<h3>Makanan</h3>
					<p>${foods}</p>
				</div>
				<div class=drinks>
					<h3>Minuman</h3>
					<p>${drinks}</p>
				</div>
			</div>
			<div class="description">
				<p>${description}</p>
			</div>
		</div>
	`;
	},

	_handleClickReview(form) {
		form.addEventListener('submit', async (e) => {
			e.preventDefault();
			const data = new FormData(form);
			try {
				const post = await dataApi.addReview(data);
				if (!post.error) {
					const { customerReviews } = post;
					this._parsingCustomerReviews(customerReviews);
					form.reset();
					alertify.alert('Sukses', 'Terima kasih telah memberikan komentar.');
				}
			} catch (error) {
				alertify.alert(
					'Ops..',
					'Review gagal dikirim. Cek koneksi internet Anda!'
				);
				console.log(error);
			}
		});
	},
};
export default Detail;
