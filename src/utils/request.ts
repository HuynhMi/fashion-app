import axios from "axios";


// handle interceptors and save token here
const request = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 1000,
    headers: {
        Accept: 'application/json',
    },
});


request.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
    
    return response;
}, function (error) {
    return Promise.reject(error);
});

export default request;