import React from 'react';
import { Navigate } from 'react-router-dom';
import { selectUserInfoState } from '../redux/auth/selectors';
import { useAppSelector } from '../redux/hooks';
import { ROUTES } from '../utils/routes';

interface PrivateLayoutProps {
	children?: React.ReactNode;
}

const PrivateLayout: React.FC<PrivateLayoutProps> = ({ children }) => {
	const userProfile = useAppSelector(selectUserInfoState);

	return userProfile?.displayName ? (
		children
	) : (
		<Navigate
			to={ROUTES.login}
			replace={true}
		/>
	);
};

export default PrivateLayout;
