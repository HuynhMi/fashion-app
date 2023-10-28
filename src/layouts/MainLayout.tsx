import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { ROUTES } from '../utils/routes';

interface MainLayoutProps {
	children?: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = () => {
	const renderNav = () =>
		Object.keys(ROUTES).map((key) => (
			<NavLink
				key={key}
				to={ROUTES[key]}
				className={({ isActive, isPending }) =>
					isPending ? 'pending' : isActive ? 'active' : ''
				}
			>
				{key}
			</NavLink>
		));

	return (
		<div>
			{/* {renderNav()} */}
			<Outlet />
		</div>
	);
};

export default MainLayout;