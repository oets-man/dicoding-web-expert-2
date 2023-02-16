Feature('Post Review');

Scenario('post a review', async ({ I }) => {
	I.amOnPage('./');
	I.waitForElement('my-card', 30);
	I.click(locate('my-card').first());
	I.waitForVisible('pierce/.description', 5);
	I.waitForVisible('pierce/.detail', 5);
	I.click('pierce/.detail');

	I.waitForElement('#form-review', 10);
	I.fillField('#name', 'Dara');
	I.fillField('#review', 'Enak sekali!!');
	I.click('Kirim');
	I.acceptPopup();
});
