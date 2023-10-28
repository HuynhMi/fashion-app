import { MAX_LENGTH_CHARACTERS, MAX_LENGTH_USERNAME, MIN_LENGTH_USERNAME } from "./constant";

const emailSchema = {
    email: {
        required: 'Please enter your email address',
        pattern: {
            value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            message: 'Email is not valid'
        },

    },
};

const loginSchema = {
    ...emailSchema,
    password: {
        required: 'Please enter your password',
        maxLength: {
            value: MAX_LENGTH_CHARACTERS,
            message: `Maximum length is ${MAX_LENGTH_CHARACTERS}`
        }
    }
};

const registerSchema = {
    username: {
        required: 'Please enter your username',
        maxLength: {
            value: MAX_LENGTH_USERNAME,
            message: `Maximum length is ${MAX_LENGTH_USERNAME} characters`
        },
        minLength: {
            value: MIN_LENGTH_USERNAME,
            message: `Minimum length is ${MIN_LENGTH_USERNAME} characters`
        }
    },
    ...emailSchema,
    password: {
        required: 'Please enter your password',
        pattern: {
            value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
            message: `Password must be at least 8 characters long, \n at least an upper case character, \n at least an lower case, \n at least one, \n and at least one digit.`
        },

    },
    confirmPassword: {
        required: 'Please confirm your password',
    }
};

export { emailSchema, loginSchema, registerSchema };

