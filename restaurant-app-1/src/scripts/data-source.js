import api from '../config/api';

class DataSource {
	static getRestaurant = async () => {
		try {
			const get = await api.get('list');
			const response = get.data;
			if (!response.error) {
				return {
					count: response.count,
					restaurants: response.restaurants,
				};
			}
			return {
				message: response.message,
			};
		} catch (error) {
			return {
				message: 'Cek koneksi internet Anda!',
				error,
			};
		}
	};
}

export default DataSource;
