import api from '../config/api';

class DataSource {
	static getRestaurant = async () => {
		const get = await api.get('list');
		const response = get.data;
		const { count, restaurants, message, error } = response;
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

export default DataSource;
