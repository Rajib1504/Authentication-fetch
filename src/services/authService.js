import api from './api';
import tokenStore from './tokenStore';

const authService = {
      async register({ username, email, password, role }) {
            const { data } = await api.post('/users/register', { username, email, password, role })
            // Extract nested data from API response
            tokenStore.setTokens(data.data || data);
            return data;
      },
      async login({ email, password }) {
            const { data } = await api.post('/users/login', { email, password })
            // Extract nested data from API response and store tokens
            const responseData = data.data || data;
            tokenStore.setTokens(responseData);
            return data;
      },
      async logOut() {
            await api.post('/users/logout');
            tokenStore.clearTokens();
      },
      async getProfile() {
            const { data } = await api.get('/users/profile');
            return data;
      }
};

export default authService;