import axios from "axios";
import tokenStore from "./tokenStore";

const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";
const api = axios.create({
      baseURL: BASE_URL,
      headers: {
            "Content-Type": "application/json",
      }
});

api.interceptors.request.use((config) => {
      const accessToken = tokenStore.getAccessToken();
      if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config
}), (error) => Promise.reject(error);

api.interceptors.response.use(
      (response) => response,
      async (error) => {
            if (error.response && error.response.status === 401) Promise.reject(error);
      });
export default api;