import RestaurantIdb from '../src/scripts/data/data-idb';
import * as TestFactories from './helpers/testFactories';

describe('Favorite a restaurant -- ', () => {
	beforeEach(() => {
		TestFactories.addFavoriteButtonContainer();
	});

	it('should show the favorite button when the restaurant has not been favorite before', async () => {
		await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });
		expect(TestFactories.labelFavorite()).toBeTruthy();
	});

	it('should not show the unfavorite button when the restaurant has not been favorite before', async () => {
		await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });
		expect(TestFactories.labelUnfavorite()).toBeFalsy();
	});

	it('should be able to add a restaurant to favorite', async () => {
		await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });

		TestFactories.clickButton();
		const restaurant = await RestaurantIdb.getRestaurant(1);

		expect(restaurant).toEqual({ id: 1 });
		RestaurantIdb.deleteRestaurant(1);
	});

	it('should not add a restaurant again when its already favorite', async () => {
		await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });

		// Tambahkan film dengan ID 1 ke daftar film yang disukai
		await RestaurantIdb.putRestaurant({ id: 1 });

		// Simulasikan pengguna menekan tombol suka film
		TestFactories.clickButton();

		// tidak ada film yang ganda
		expect(await RestaurantIdb.getAllRestaurants()).toEqual([{ id: 1 }]);
		RestaurantIdb.deleteRestaurant(1);
	});

	it('should not add a restaurant when it has no id', async () => {
		await TestFactories.createFavoriteButtonPresenterWithRestaurant({});

		TestFactories.clickButton();
		expect(await RestaurantIdb.getAllRestaurants()).toEqual([]);
	});
});
