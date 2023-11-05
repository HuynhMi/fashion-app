export interface IFormValues {
	username: string;
	password: string;
	rememberMe: boolean;
	email: string;
	confirmPassword: string;
	firstName: string;
	lastName: string;
	displayName: string

}

export type IFormKeys = keyof IFormValues

export type AxiosRegisterResponse = { "email": string, "returnSecureToken": boolean }

export interface RequestByTokenProp {
	idToken: string
}