const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));

Feature('Post Review');

Scenario('post a review', async ({ I }) => {
	I.amOnPage('/');
	await delay(4000);

	I.waitForElement('list-card', 30);
	I.click(locate('list-card').first());
	I.waitForVisible('pierce/#a-detail', 5);
	I.click('pierce/#a-detail');

	I.waitForElement('#form-review', 10);
	I.fillField('#name', 'oets');
	I.fillField('#review', 'halo... halo...');
	I.click('Kirim');
});
