const BASE_URL = 'https://restaurant-api.dicoding.dev/';
const URL = {
	BASE: BASE_URL,
	LIST: 'list',
	DETAIL: (id) => `${BASE_URL}detail/${id}`,
	PICTURE: {
		SMALL: `${BASE_URL}images/small`,
		MEDIUM: `${BASE_URL}images/medium`,
		LARGE: `${BASE_URL}images/large`,
	},
	REVIEW: `${BASE_URL}review`,
};

export default URL;
