import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Provider } from 'react-redux';
import AuthLayout from './layouts/AuthLayout';
import MainLayout from './layouts/MainLayout';
import PrivateLayout from './layouts/PrivateLayout';
import HomePage from './pages';
import ForgotPasswordPage from './pages/forgotpassword';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import { store } from './redux/store';
import './styles/index.scss';

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{
				path: '',
				element: (
					<PrivateLayout>
						<HomePage />
					</PrivateLayout>
				),
			},
			{
				path: '/',
				element: <AuthLayout />,
				children: [
					{
						element: <LoginPage />,
						path: '/login',
					},
					{
						path: '/register',
						element: <RegisterPage />,
					},
					{
						path: '/forgotpassword',
						element: <ForgotPasswordPage />,
					},
				],
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>,
);
