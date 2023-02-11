import { itActsAsFavoriteRestaurantModel } from './contract/favoriteRestaurantContract';
import RestaurantsIdb from '../src/scripts/data/restaurants-idb';

describe('Favorite Movie Idb Contract Test Implementation', () => {
	afterEach(async () => {
		(await RestaurantsIdb.getAllRestaurants()).forEach(async (restaurant) => {
			await RestaurantsIdb.deleteRestaurant(restaurant.id);
		});
	});

	itActsAsFavoriteRestaurantModel(RestaurantsIdb);
});
