import axios from 'axios';
import { BASE_URL } from './url';
export default axios.create({ baseURL: BASE_URL });
