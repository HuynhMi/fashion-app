import { useState } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { PiEyeClosedLight, PiEyeLight } from 'react-icons/pi';
import { IFormKeys, IFormValues } from '../../interfaces';
import './styles.scss';

type TextFieldProps = {
	id: string;
	name: IFormKeys;
	type: 'text' | 'password' | 'email';
	placeholder: string;
	label?: string;
	errorMessage?: string;
	register: UseFormRegister<IFormValues>;
	rules?: {
		[key: string]:
			| string
			| { value: number | RegExp; message: string }
			| ((val: string) => unknown);
	};
};

const TextField: React.FC<TextFieldProps> = ({
	id,
	name,
	label,
	errorMessage,
	register,
	type,
	rules,
	...rest
}: TextFieldProps) => {
	const [open, setOpen] = useState(false);

	return (
		<div className="form-group">
			{label && <label htmlFor={id}>{label}</label>}
			<div
				className={`form-group-input ${
					errorMessage ? 'has-error' : ''
				}`}
			>
				<input
					id={id}
					type={open && type === 'password' ? 'text' : type}
					{...rest}
					{...register(name, rules && { ...rules })}
				/>

				{type === 'password' && (
					<button
						onClick={() => setOpen(!open)}
						className="btn-toggle-password"
						type="button"
					>
						{open ? <PiEyeClosedLight /> : <PiEyeLight />}
					</button>
				)}
			</div>
			{errorMessage && <p className="error-message">{errorMessage}</p>}
		</div>
	);
};

export default TextField;
