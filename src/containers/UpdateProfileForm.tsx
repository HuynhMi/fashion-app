import { useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';
import Button from '../components/commons/Button';
import TextField from '../components/forms/TextField';
import { IFormValues } from '../interfaces';
import authService from '../services/auth.service';
import { notify } from '../utils/helper';
import { ROUTES } from '../utils/routes';

const UpdateProfileForm = () => {
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IFormValues>({
		defaultValues: {
			displayName: '',
			// photoURL: '',
		},
	});

	const onSubmit = async ({ displayName }: IFormValues) => {
		try {
			await authService.updateProfile(displayName, '');
			notify('Update successful', 'success');
			navigate(ROUTES.home);
		} catch (error) {
			notify('Update failed', 'error');
		}
	};

	return (
		<div className="flex flex--center h-100">
			<form
				className="form update-form"
				onSubmit={handleSubmit(onSubmit)}
			>
				<h2 className="form-title">Update Profile</h2>
				<div className="form-container">
					<TextField
						id="displayName"
						type="text"
						placeholder="Enter your name"
						name="displayName"
						register={register}
						label="displayName"
						errorMessage={errors?.displayName?.message}
					/>
				</div>
				<div className="form-action-group">
					<Button
						type="submit"
						title="Save"
						color="info"
					/>
				</div>
				<div className="form-switch">
					<NavLink
						to={ROUTES.home}
						className="form-switch-link"
					>
						Quay lại
					</NavLink>
				</div>
			</form>
		</div>
	);
};

export default UpdateProfileForm;
