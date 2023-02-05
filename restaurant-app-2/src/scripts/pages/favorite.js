const Favorite = {
	async renderHeader() {
		const hero = document.querySelector('#hero');
		hero.innerHTML = `
			<img src="./images/hero.jpg" alt="gambar hero" />
			<div class="hero-content">
				<p class="hero-title">Cita Rasa</p>
				<p class="hero-subtitle">Kuliner Nusantara</p>
			</div>
		`;

		const main = document.querySelector('#main');
		main.innerHTML = `
            <h2>Daftar Warung Favorit</h2>
            <div class="container" id="card-container"></div>
        `;
	},

	async renderContent() {
		console.log('Fungsi ini akan dipanggil setelah ');
	},
};
export default Favorite;
