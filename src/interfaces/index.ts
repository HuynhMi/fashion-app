export interface IFormValues {
	username: string;
	password: string;
	rememberMe: boolean;
	email: string;
	confirmPassword: string;
	firstName: string;
	lastName: string
}

export type IFormKeys = keyof IFormValues

export type AxiosRegisterResponse = { "email": string, "password": string, "returnSecureToken": boolean }