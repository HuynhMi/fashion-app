import React from 'react';
import { Outlet } from 'react-router-dom';
import './styles.scss';

interface AuthLayoutProps {
	children?: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = () => {
	return (
		<div className="auth-layout">
			<div className='auth-container'>
				<Outlet />
			</div>
		</div>
	);
};

export default AuthLayout;
