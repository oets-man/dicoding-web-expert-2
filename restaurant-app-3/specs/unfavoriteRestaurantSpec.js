import RestaurantIdb from '../src/scripts/data/data-idb';
import * as TestFactories from './helpers/testFactories';

describe('Unfavorite a restaurant -- ', () => {
	beforeEach(async () => {
		TestFactories.addFavoriteButtonContainer();
		await RestaurantIdb.putRestaurant({ id: 1 });
	});

	afterEach(async () => {
		await RestaurantIdb.deleteRestaurant(1);
	});

	it('should display unfavorite widget when the restaurant has been favorite', async () => {
		await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });
		expect(TestFactories.labelUnfavorite()).toBeTruthy();
	});

	it('should not display favorite widget when the restaurant has been favorite', async () => {
		await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });
		expect(TestFactories.labelFavorite()).toBeFalsy();
	});

	it('should be able to remove favorite restaurant  from the list', async () => {
		await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });
		TestFactories.clickButton();
		expect(await RestaurantIdb.getAllRestaurants()).toEqual([]);
	});

	it('should not throw error if the unfavorite restaurant is not in the list', async () => {
		await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });

		// hapus dulu film dari daftar film yang disukai
		await RestaurantIdb.deleteRestaurant(1);
		// kemudian, simulasikan pengguna menekan widget batal menyukai film
		TestFactories.clickButton();
		expect(await RestaurantIdb.getAllRestaurants()).toEqual([]);
	});
});
