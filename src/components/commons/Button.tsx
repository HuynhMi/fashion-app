import { MouseEventHandler } from 'react';

interface ButtonProps {
	type: 'submit' | 'button' | 'reset';
	title: string;
	onClick?: MouseEventHandler<HTMLButtonElement>;
	color: 'info' | 'error'
}

const Button: React.FC<ButtonProps> = ({ type, title, onClick, color }) => {
	return (
		<button
			type={type}
			onClick={onClick}
			className={`button ${color}`}
		>
			{title}
		</button>
	);
};

export default Button;
