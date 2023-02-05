import alertify from 'alertifyjs';
import createStar from '../../utils/create-star';
import css from './style.css';
import html from './template.html';

class ListCard extends HTMLElement {
	constructor() {
		super();
		this.shadow = this.attachShadow({ mode: 'open' });
	}

	set item(restaurant) {
		this._item = restaurant;
		this.render();
	}

	render() {
		const { id, name, description, urlPicture, city, rating } = this._item;
		this.shadow.innerHTML = `
			<style>${css}</style>
			<div>${html}</div>
		`;
		this.shadow.querySelector('.card').setAttribute('id', `restaurantId-${id}`);
		this.shadow.querySelector('img').setAttribute('src', urlPicture);
		this.shadow.querySelector('#name').innerText = name;
		this.shadow.querySelector('#city').innerText = city;
		this.shadow.querySelector('#description').innerText = description;

		createStar({
			rating: rating,
			starElement: this.shadow.querySelector('#stars-inner'),
			ratingElement: this.shadow.querySelector('#number-rating'),
		});

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
		this.shadow
			.querySelector('#a-detail')
			.addEventListener('click', (e) => this.goToDetail(e));
		this.shadow
			.querySelector('#a-detail')
			.addEventListener('keypress', (e) => this.goToDetail(e));
	}

	goToDetail = (e) => {
		e.stopPropagation();
		e.preventDefault();
		alertify.alert('Maaf', 'Fitur ini masih dalam pengembangan!');
	};
}
customElements.define('list-card', ListCard);
