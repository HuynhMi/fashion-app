import { NavLink, useNavigate } from 'react-router-dom';
import Button from '../components/commons/Button';
import { setUserInfo } from '../redux/auth/authSlice';
import { selectUserInfoState } from '../redux/auth/selectors';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import authService from '../services/auth.service';
import { ROUTES } from '../utils/routes';

const HomePage = () => {
	const dispatch = useAppDispatch();
	const profile = useAppSelector(selectUserInfoState);
	const navigate = useNavigate();

	const handleLogout = async () => {
		try {
			await authService.logout();
			dispatch(setUserInfo({ email: null }));
			navigate(ROUTES.login);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="flex flex--center h-100">
			<div>
				<h1>Welcome</h1>
				{profile?.email ? (
					<>
						<div className="profile">
							<div className="profile-txt">
								Email: {profile.email || 'none'}
							</div>
							<div className="profile-txt">
								User name: {profile.displayName || 'none'}
							</div>

							<div className="mt-20">
								<NavLink to={ROUTES.updateProfile}>
									Update Profile
								</NavLink>
							</div>
							<div className="mt-20">
								<Button
									type="button"
									title="Logout"
									color="error"
									onClick={() => handleLogout()}
								/>
							</div>
						</div>
					</>
				) : (
					<>
						<div className="mt-20 flex">
							<h4>You already have an account ?</h4>
							<NavLink
								to={ROUTES.login}
								className="ml-5"
							>
								Login
							</NavLink>
						</div>
						<div className="mt-20 flex">
							<h4>Or</h4>
							<NavLink
								to={ROUTES.register}
								className="ml-5"
							>
								Create an account
							</NavLink>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default HomePage;
