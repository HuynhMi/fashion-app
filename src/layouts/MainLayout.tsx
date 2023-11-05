import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { auth } from '../config/firebase';
import { setUserInfo } from '../redux/auth/authSlice';
import { useAppDispatch } from '../redux/hooks';

interface MainLayoutProps {
	children?: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = () => {
	const dispatch = useAppDispatch();
	
	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				dispatch(
					setUserInfo({
						email: user.email,
						displayName: user.displayName,
					}),
				);
			}
		});
	}, [dispatch]);

	return <Outlet />;
};

export default MainLayout;
