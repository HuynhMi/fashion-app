import axios from "axios";
import { destroyCookie, parseCookies, setCookie } from "nookies";

export const COOKIE_NAME = "AUTH_APP_TEST";
export const setCookies = (name: string, val: string) => setCookie(null, name, val, {
    maxAge: 30 * 24 * 60 * 60,
    path: '/',
});

export const getCookies = (name: string) => parseCookies()[name];
export const destroyCookies = (name: string) => {
    destroyCookie(null, name)
}

// handle interceptors and save token here
const request = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 1000,
    headers: {
        Accept: 'application/json',
    },
});


request.interceptors.request.use(function (config) {
    // if (token) {
    //     config.headers['Authorization'] = `Bearer ${token}`;
    // }
    return config;
}, function (error) {
    return Promise.reject(error);
});

request.interceptors.response.use(function (response) {
    response.data.idToken
        && setCookies(COOKIE_NAME, response.data.idToken)
    return response;
}, function (error) {
    return Promise.reject(error);
});

export default request;