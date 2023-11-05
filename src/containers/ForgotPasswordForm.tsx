import { useForm } from 'react-hook-form';
import { HiArrowLeft } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';
import Button from '../components/commons/Button';
import TextField from '../components/forms/TextField';
import { IFormValues } from '../interfaces';
import { ROUTES } from '../utils/routes';
import { emailSchema } from '../utils/validations';

const ForgotPasswordForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IFormValues>({
		defaultValues: {
			email: '',
		},
	});

	const onSubmit = (val: IFormValues) => console.log(val);

	return (
		<form
			className="form"
			onSubmit={handleSubmit(onSubmit)}
		>
			<h2 className="form-title">Request password</h2>
			<div className="form-container">
				<TextField
					id="email"
					type="email"
					placeholder="Enter your email"
					name="email"
					register={register}
					label="email"
					errorMessage={errors?.email?.message}
					rules={emailSchema.email}
				/>
			</div>
			<div className="form-action-group">
				<Button
					type="submit"
					title="Send"
					color="info"
				/>
			</div>
			<div className="form-switch center">
				<NavLink
					to={ROUTES.login}
					className="form-switch-link"
				>
					<HiArrowLeft />
					Quay lại
				</NavLink>
			</div>
		</form>
	);
};

export default ForgotPasswordForm;
