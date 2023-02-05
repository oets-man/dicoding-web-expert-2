import api from '../config/api';
import URL from '../config/url';

class dataApi {
	static getRestaurants = async () => {
		const get = await api.get('list');
		const { count, restaurants, message, error } = get.data;
		if (error) {
			return {
				message,
			};
		}
		return {
			count,
			restaurants,
		};
	};
	static getRestaurant = async (id) => {
		const get = await api.get(URL.DETAIL(id));
		const { restaurant, message, error } = get.data;
		if (error) {
			return {
				message,
			};
		}
		return {
			restaurant,
		};
	};
}

export default dataApi;
