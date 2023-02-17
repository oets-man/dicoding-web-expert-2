const assert = require('assert');
const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));

Feature('Liking Restaurant');
Scenario('liking one restaurant', async ({ I }) => {
	/**
	 * FAVORITE
	 * no data
	 * */

	I.amOnPage('/#/favorite');
	I.waitForElement('.no-restaurant', 10); // secs
	I.see('Belum ada warung yang difavoritkan.', '.no-restaurant');

	/**
	 * HOME
	 * click anchor
	 */
	I.amOnPage('/');
	await delay(4000);

	I.waitForElement('list-card', 30);
	I.click(locate('list-card').first());
	I.waitForElement('pierce/.name', 30);
	const nameInHOME = await I.grabTextFrom('pierce/.name');
	I.waitForVisible('pierce/#description', 5);
	I.waitForVisible('pierce/#a-detail', 5);
	I.click('pierce/#a-detail');

	/**
	 * DETAIL
	 * add to favorite
	 */
	I.waitForElement('h2', 10);
	const nameInDETAIL_fromHOME = await I.grabTextFrom('h2');
	assert.strictEqual(nameInHOME, nameInDETAIL_fromHOME);
	I.see('Makanan', 'h3');
	I.see('Minuman', 'h3');
	I.see('Apa Kata Mereka', 'h3');
	I.see('Tulis Komentarmu!', 'h3');
	I.seeElement('#form-review');
	I.seeElement('#btn-favorite');
	I.click(
		locate('button').withAttr({ 'aria-label': 'Favoritkan restoran ini' })
	);

	/**
	 * FAVORITE
	 * check result
	 */
	I.amOnPage('/#/favorite');
	await delay(2000);

	I.waitForElement('list-card', 30);
	I.click(locate('list-card').first());
	I.waitForElement('pierce/.name', 30);
	const nameInFAVORITE = await I.grabTextFrom('pierce/.name');
	I.waitForVisible('pierce/#description', 5);
	I.waitForVisible('pierce/#a-detail', 5);
	I.click('pierce/#a-detail');

	/**
	 * DETAIL
	 * remove from favorite
	 */
	I.waitForElement('h2', 10);
	const nameInDETAIL_fromFAVORITE = await I.grabTextFrom('h2');
	assert.strictEqual(nameInFAVORITE, nameInDETAIL_fromFAVORITE);
	I.click(
		locate('button').withAttr({
			'aria-label': 'Hapus restoran ini dari daftar favorit',
		})
	);

	/**
	 * FAVORITE
	 * no data
	 * */
	I.amOnPage('/#/favorite');
	I.waitForElement('.no-restaurant', 10); // secs
	I.see('Belum ada warung yang difavoritkan.', '.no-restaurant');
});
