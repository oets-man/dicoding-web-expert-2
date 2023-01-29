import css from './style.css';
import html from './template.html';
import alertify from 'alertifyjs';

class ListCard extends HTMLElement {
	constructor() {
		super();
		this.shadow = this.attachShadow({ mode: 'open' });
	}

	set item(item) {
		this._item = item;
		this.render();
	}

	render() {
		const { id, name, description, picture, city, rating } = this._item;
		this.shadow.innerHTML = `
			<style>${css}</style>
			<div>${html}</div> 
		`;
		this.shadow.querySelector('.card').setAttribute('id', `restaurantId-${id}`);
		this.shadow.querySelector('img').setAttribute('src', picture);
		this.shadow.querySelector('#name').innerText = name;
		this.shadow.querySelector('#city').innerText = city;
		this.shadow.querySelector('#rating').innerText = rating;
		this.shadow.querySelector('#description').innerText = description;

		this.createStar(rating);

		// open description
		const desc = this.shadow.querySelector('#description-container');
		this.shadow.querySelector('.card').addEventListener('click', () => {
			desc.classList.toggle('open');
		});
		this.shadow.querySelector('.card').addEventListener('keypress', (e) => {
			if (e.key === 'Enter' || e.key === ' ') {
				desc.classList.toggle('open');
			}
		});

		// detail
		const toDetail = (e) => {
			e.stopPropagation();
			e.preventDefault();
			alertify.alert('Maaf', 'Fitur ini masih dalam pengembangan!');
		};
		this.shadow
			.querySelector('#a-detail')
			.addEventListener('click', (e) => toDetail(e));
		this.shadow
			.querySelector('#a-detail')
			.addEventListener('keypress', (e) => toDetail(e));
	}

	createStar(rating) {
		// https://www.youtube.com/watch?v=u3rylF3y3og&list=LL&index=1

		// Get percentage
		const starPercentage = (rating / 5) * 100;

		// Round to nearest 10
		const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;

		// Set width of stars-inner to percentage
		this.shadow.querySelector('.stars-inner').style.width =
			starPercentageRounded;

		// Add number rating
		this.shadow.querySelector('.number-rating').innerHTML =
			parseFloat(rating).toFixed(1);
	}
}
customElements.define('list-card', ListCard);
