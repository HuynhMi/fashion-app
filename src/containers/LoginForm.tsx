import { useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';
import Button from '../components/commons/Button';
import SingleCheckBoxField from '../components/forms/SingleCheckBoxField';
import TextField from '../components/forms/TextField';
import { IFormValues } from '../interfaces';
import { setUserInfo } from '../redux/auth/authSlice';
import { useAppDispatch } from '../redux/hooks';
import authService from '../services/auth.service';
import { notify } from '../utils/helper';
import { ROUTES } from '../utils/routes';
import { loginSchema } from '../utils/validations';

const LoginForm = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IFormValues>({
		defaultValues: {
			email: '',
			password: '',
			rememberMe: false,
		},
	});

	const onSubmit = async ({ email, password, rememberMe }: IFormValues) => {
		try {
			if (!rememberMe) {
				await authService.setPersistence();
			}
			const { user } = await authService.login(email, password);
			dispatch(
				setUserInfo({
					email: user.email,
					displayName: user.displayName,
				}),
			);
			notify('Login successful', 'success');
			navigate(ROUTES.home);
		} catch (error) {
			notify('Login failed', 'error');
		}
	};

	return (
		<form
			className="form"
			onSubmit={handleSubmit(onSubmit)}
		>
			<h2 className="form-title">Login Form</h2>
			<div className="form-container">
				<TextField
					id="email"
					type="email"
					placeholder="Enter your email"
					name="email"
					register={register}
					label="Email"
					errorMessage={errors?.email?.message}
					rules={loginSchema.email}
				/>
				<TextField
					id="password"
					type="password"
					placeholder="Enter your password"
					name="password"
					register={register}
					label="Password"
					errorMessage={errors?.password?.message}
					rules={loginSchema.password}
				/>
				<div className="form-subgroup">
					<SingleCheckBoxField
						id="rememberMe"
						placeholder="Enter your rememberMe"
						name="rememberMe"
						register={register}
						label="Remember Me"
						errorMessage={errors?.rememberMe?.message}
					/>

					<NavLink
						to={ROUTES.forgot}
						className="form-link"
					>
						Forgotten password ?
					</NavLink>
				</div>
			</div>
			<div className="form-action-group">
				<Button
					type="submit"
					title="Login"
					color="info"
				/>
			</div>
			<div className="form-switch">
				<span>Don't have an account yet ?</span>
				<NavLink
					to={ROUTES.register}
					className="form-switch-link"
				>
					Create account
				</NavLink>
			</div>
		</form>
	);
};

export default LoginForm;
