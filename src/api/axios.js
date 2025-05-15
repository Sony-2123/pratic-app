import axios from './axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.example.com/', // Your API base URL
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

export default axiosInstance;
