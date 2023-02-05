import api from '../config/api';

class dataApi {
	static getRestaurant = async () => {
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
}

export default dataApi;
