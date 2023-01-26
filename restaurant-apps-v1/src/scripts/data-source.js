import axios from 'axios';

class DataSource {
	static getRestaurant = async () => {
		try {
			const axiosGet = await axios.get('https://restaurant-api.dicoding.dev/list');
			const response = axiosGet.data;
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

export { DataSource };
