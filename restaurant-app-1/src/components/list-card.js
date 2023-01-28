import css from './list-card.css';
// import text from './list-card.html'

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
			<div class="item" tabindex="0" id="restaurantId-${id}">
				<div class="content">
					<img src="${picture}" alt="gambar restoran"/>
					<table>
						<tr>
							<td>nama:</td>
							<td class="item-name">${name}</td>
						</tr>
						<tr>
							<td>kota:</td>
							<td>${city}</td>
						</tr>
						<tr>
							<td>rating:</td>
							<td>${rating}</td>
						</tr>
					</table>
				</div>
				<div id="description" class="description">
					<div class="btn">
						<a id="a-detail" aria-label="tampilkan detail restoran" tabindex="0">Detail</a>
					</div>
					<p>${description}</p>
				</div>
			</div>
		`;
		// card item
		const elDescription = this.shadow.querySelector('#description');
		this.shadow.querySelector('.item').addEventListener('click', () => {
			elDescription.classList.toggle('open');
		});
		this.shadow.querySelector('.item').addEventListener('keypress', (e) => {
			if (e.key === 'Enter' || e.key === ' ') {
				elDescription.classList.toggle('open');
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
