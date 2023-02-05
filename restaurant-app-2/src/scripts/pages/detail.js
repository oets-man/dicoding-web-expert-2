const Detail = {
	async renderHeader() {
		return `
            <h2>Daftar Warung detail</h2>
            <div class="container" id="card-container"></div>
        `;
	},

	async renderContent() {
		console.log('Fungsi ini akan dipanggil setelah ');
	},
};
export default Detail;
