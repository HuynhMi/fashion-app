import Button from '../components/commons/Button';
import { selectUserInfoState } from '../redux/auth/selectors';
import { useAppSelector } from '../redux/hooks';

const HomePage = () => {
	const profile = useAppSelector(selectUserInfoState);
	return (
		<div className="flex flex--center h-100">
			<div className="profile">
				<h1>Welcome</h1>
				<div className="profile-txt">
					Email: {profile?.email || 'none'}
				</div>
				<div className="profile-txt">
					{profile?.displayName
						? `User name: ${profile.displayName}`
						: 'Your profile needs to be updated.'}
				</div>

				<div className="mt-20">
					<Button
						type="button"
						title="Update profile"
					/>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
