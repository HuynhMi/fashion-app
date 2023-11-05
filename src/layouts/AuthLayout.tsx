import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { selectUserInfoState } from '../redux/auth/selectors';
import { useAppSelector } from '../redux/hooks';
import { ROUTES } from '../utils/routes';
import './styles.scss';

interface AuthLayoutProps {
	children?: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = () => {
	
	const user = useAppSelector(selectUserInfoState);

	return user?.email ? (
		<Navigate
			to={ROUTES.home}
			replace
		/>
	) : (
		<div className="auth-layout">
			<div className="auth-container">
				<Outlet />
			</div> 
		</div>
	);
};

export default AuthLayout;
