import axios from "axios";

const hotelDataFinder = axios.create({
    baseURL: "http://localhost:5000/api/v1/nomad-app",  // Removed trailing slash
    timeout: 5000,  // Add timeout
    headers: {
        'Content-Type': 'application/json'
    }
});

// Add response interceptor for better error handling
hotelDataFinder.interceptors.response.use(
    response => response,
    error => {
        if (error.response?.status === 500) {
            console.error('Server error:', error.response.data);
        }
        return Promise.reject(error);
    }
);

export default hotelDataFinder;