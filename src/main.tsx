import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AuthLayout from './layouts/AuthLayout';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages';
import ForgotPasswordPage from './pages/forgotpassword';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import './styles/index.scss';

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{
				path: '',
				element: <HomePage />,
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
		<RouterProvider router={router} />
	</React.StrictMode>,
);
