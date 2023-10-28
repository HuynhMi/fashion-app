import { AxiosRegisterResponse, IFormValues } from "../interfaces";
import request from "../utils/request";

const authService = {
    register: (data: IFormValues) =>
        request.post<AxiosRegisterResponse>(`/accounts:signUp?key=${import.meta.env.VITE_API_KEY}`, data),
    login: (data: IFormValues) =>
        request.post<AxiosRegisterResponse>(`/accounts:signInWithPassword?key=${import.meta.env.VITE_API_KEY}`, data),
    saveUserToDB: () => { },
    getUser: () => { },
    getUserFromDB: () => { }
}

export default authService