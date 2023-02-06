import api from '../config/api';
import URL from '../config/url';

class dataApi {
	static getAllRestaurants = async () => {
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

	static addReview = async (data) => {
		const config = {
			method: 'post',
			url: URL.REVIEW,
			headers: {
				'Content-Type': 'application/json',
			},
			data: data,
		};
		const review = await api(config);
		return review.data;
	};
}

export default dataApi;
