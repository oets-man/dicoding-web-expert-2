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
						<button id="btn-detail" aria-label="tampilkan detail restoran">Detail</button>
						<button id="btn-favorite" aria-label="tambahkan ke favorit">Favorit</button>
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

		// button detail
		this.shadow.querySelector('#btn-detail').addEventListener('click', (e) => {
			e.stopPropagation();
			alert('Maaf. Fitur tampilkan detail masih dalam pengembangan!');
		});
		this.shadow
			.querySelector('#btn-detail')
			.addEventListener('keypress', (e) => {
				e.stopPropagation();
				if (e.key === ' ') {
					alert('Maaf. Fitur belum siap!');
				}
			});

		// button favorite
		this.shadow
			.querySelector('#btn-favorite')
			.addEventListener('click', (e) => {
				e.stopPropagation();
				alert('Maaf. Fitur belum siap!');
			});
		this.shadow
			.querySelector('#btn-favorite')
			.addEventListener('keypress', (e) => {
				e.stopPropagation();
				if (e.key === ' ') {
					alert('Maaf. Fitur belum siap!');
				}
			});
	}
}
customElements.define('list-card', ListCard);
