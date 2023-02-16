const { async } = require('regenerator-runtime');
const assert = require('assert');
Feature('Liking Restaurant');

Scenario('liking one restaurant', async ({ I }) => {
	// --------------------------------
	// #Favorite: pastikan data kosong
	// --------------------------------
	I.amOnPage('/#/favorite');
	I.waitForElement('.error', 10); // secs
	I.see(
		'Tidak ada data untuk ditampilkan. Silakan favoritkan beberapa restoran!',
		'.error'
	);

	// --------------------------------
	// #Home: klik detail
	// --------------------------------
	I.amOnPage('./');
	I.waitForElement('my-card', 30);
	I.click(locate('my-card').first());
	const nameInCardDetail = await I.grabTextFrom('pierce/.item-name');
	I.waitForVisible('pierce/.description', 5);
	I.waitForVisible('pierce/.detail', 5);
	I.click('pierce/.detail');

	// --------------------------------
	// #Detail: klik favorite
	// --------------------------------
	I.waitForElement('h3', 10);
	const nameInDetail_fromHome = await I.grabTextFrom('h3');
	assert.strictEqual(nameInCardDetail, nameInDetail_fromHome);
	I.see('Makanan', 'h4');
	I.see('Minuman', 'h4');
	I.see('Apa Kata Mereka', 'h4');
	I.see('Tulis Komentarmu!', 'h4');
	I.seeElement('#form-review');
	I.seeElement('#likeButton');
	I.click(
		locate('button').withAttr({ 'aria-label': 'Favoritkan restoran ini' })
	);

	// --------------------------------
	// #Favorite: cek
	// --------------------------------
	I.amOnPage('./#/favorite');
	I.waitForElement('my-card', 30);
	I.click(locate('my-card').first());
	const nameInCardFavorite = await I.grabTextFrom('pierce/.item-name');
	I.waitForVisible('pierce/.description', 5);
	I.waitForVisible('pierce/.detail', 5);
	I.click('pierce/.detail');

	// --------------------------------
	// #Detail: klik unFavorite
	// --------------------------------
	I.waitForElement('h3', 10);
	const nameInDetail_fromFavorite = await I.grabTextFrom('h3');
	assert.strictEqual(nameInCardFavorite, nameInDetail_fromFavorite);
	I.click(
		locate('button').withAttr({ 'aria-label': 'Hapus dari daftar favorit' })
	);

	// --------------------------------
	// #Favorite: pastikan data kosong
	// --------------------------------
	I.amOnPage('./#/favorite');
	I.waitForElement('.error', 10); // secs
	I.see(
		'Tidak ada data untuk ditampilkan. Silakan favoritkan beberapa restoran!',
		'.error'
	);
});
