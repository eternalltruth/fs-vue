import axios from 'axios';
import router from '../router'

const config = {
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 6000
    // headers: {
    //   'Content-Type': 'application/json',
    // }
}
const instance = axios.create(config);
instance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token')
      if (token) {
        config.headers.Authorization = token
      }
      return config
    },
    (error) => {
        return Promise.reject(error);
    }
)
instance.interceptors.response.use(
    (response) => {
      return Promise.resolve(response.data);
    },
    (error) => {
        return Promise.reject(error);
    }
)
export default instance;
