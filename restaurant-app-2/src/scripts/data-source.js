import api from '../config/api';

class DataSource {
  static getRestaurant = async () => {
    try {
      const get = await api.get('list');
      const response = get.data;
      const {
        count, restaurants, message, error,
      } = response;
      if (error) {
        return {
          message,
        };
      }
      return {
        count,
        restaurants,
      };
    } catch (error) {
      const message = 'Cek koneksi internet Anda!';
      return {
        message,
        error,
      };
    }
  };
}

export default DataSource;
