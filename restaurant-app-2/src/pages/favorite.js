const Favorite = {
	async renderHeader() {
		return `
            <h2>Daftar Warung Favorit</h2>
            <div class="container" id="card-container"></div>
        `;
	},

	async renderContent() {
		console.log('Fungsi ini akan dipanggil setelah ');
	},
};
export default Favorite;
