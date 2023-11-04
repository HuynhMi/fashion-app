import { useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';
import Button from '../components/commons/Button';
import TextField from '../components/forms/TextField';
import { IFormValues } from '../interfaces';
import { setUserInfo } from '../redux/auth/authSlice';
import { useAppDispatch } from '../redux/hooks';
import authService from '../services/auth.service';
import { ROUTES } from '../utils/routes';
import { registerSchema } from '../utils/validations';

const RegisterForm = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm<IFormValues>({
		defaultValues: {
			// username: '',
			email: '',
			password: '',
			confirmPassword: '',
		},
	});

	const onSubmit = async (val: IFormValues) => {
		const { data } = await authService.register(val);
		dispatch(setUserInfo({ email: data.email }));
		navigate(ROUTES.home);
	};

	return (
		<form
			className="form"
			onSubmit={handleSubmit(onSubmit)}
		>
			<h2 className="form-title">Register Form</h2>
			<div className="form-container">
				{/* <TextField
					id="username"
					type="text"
					placeholder="Enter your username"
					name="username"
					register={register}
					label="User name"
					errorMessage={errors?.username?.message}
					rules={registerSchema.username}
				/> */}
				<TextField
					id="email"
					type="text"
					placeholder="Enter your email"
					name="email"
					register={register}
					label="Email"
					errorMessage={errors?.email?.message}
					rules={registerSchema.email}
				/>
				<TextField
					id="password"
					type="password"
					placeholder="Enter your password"
					name="password"
					register={register}
					label="Password"
					errorMessage={errors?.password?.message}
					rules={registerSchema.password}
				/>
				<TextField
					id="confirmPassword"
					type="password"
					placeholder="Enter your confirmPassword"
					name="confirmPassword"
					register={register}
					label="confirmPassword"
					errorMessage={errors?.confirmPassword?.message}
					rules={{
						...registerSchema.confirmPassword,
						validate: (value: string) => {
							if (watch('password') != value) {
								return 'Your password do no match.';
							}
						},
					}}
				/>
			</div>
			<div className="form-action-group">
				<Button
					type="submit"
					title="Create Account"
				/>
			</div>

			<div className="form-switch">
				<span>Already have an account ?</span>
				<NavLink
					to={ROUTES.login}
					className="form-switch-link"
				>
					Login
				</NavLink>
			</div>
		</form>
	);
};

export default RegisterForm;
