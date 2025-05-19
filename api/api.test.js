import axios from 'axios';
import { config } from '../utils/config.js';

(async () => {
  try {
    const response = await axios.get(config.baseUrl);
    console.log('API Status Code:', response.status);
  } catch (err) {
    console.error('API test failed:', err.message);
  }
})();
