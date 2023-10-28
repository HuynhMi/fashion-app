import { MouseEventHandler } from 'react';

interface ButtonProps {
	type: 'submit' | 'button' | 'reset';
	title: string;
	onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({ type, title, onClick }) => {
	return (
		<button
			type={type}
			onClick={onClick}
			className="button"
		>
			{title}
		</button>
	);
};

export default Button;
