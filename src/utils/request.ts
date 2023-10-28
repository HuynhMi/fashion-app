import axios from "axios";


// handle interceptors and save token here
const request = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 1000,
    headers: {
        Accept: 'application/json',
    },
});

export default request;