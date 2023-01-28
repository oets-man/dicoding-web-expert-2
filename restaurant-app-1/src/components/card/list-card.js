import css from './list-card.css';
import html from './list-card.html';

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
			alert('Maaf. Fitur tampilkan detail masih dalam pengembangan!');
		};
		this.shadow
			.querySelector('#a-detail')
			.addEventListener('click', (e) => toDetail(e));
		this.shadow
			.querySelector('#a-detail')
			.addEventListener('keypress', (e) => toDetail(e));
	}
}
customElements.define('list-card', ListCard);
