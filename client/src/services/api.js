import axios from 'axios';
import JWT_CONSTANTS from '../constants/standard.contants';

let BASE_URL = 'http://localhost:8000';

if (import.meta.env.VITE_API_URL) {
    BASE_URL = import.meta.env.VITE_API_URL;
}
if (import.meta.env.VITE_API_URL.endsWith('.com')) {
    BASE_URL = `${import.meta.env.VITE_API_URL}`;
} else {
    BASE_URL = `${import.meta.env.VITE_API_URL}:${import.meta.env.VITE_API_PORT}`;
}

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    maxBodyLength: Infinity,
    maxContentLength: Infinity,
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        console.error('Request Error [api.js]:', error);
        return Promise.reject(error);
    },
);

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response) {
            console.error('API Error:', error.response.data || error.message);
            if (error.response.status === 401) {
                // Unauthorized
                sessionStorage.removeItem(JWT_CONSTANTS.JWT_TOKEN_KEY);
                window.location.href = '/session-expired';
            }
        } else {
            console.error('Network or Unknown Error:', error.message);
        }
        return Promise.reject(error);
    },
);

export default api;
