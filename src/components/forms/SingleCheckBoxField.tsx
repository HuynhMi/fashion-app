import { UseFormRegister } from 'react-hook-form';
import './styles.scss';
import { IFormValues } from '../../interfaces';

type CheckBoxFieldProps = {
	id: string;
	name: 'rememberMe';
	placeholder: string;
	label: string;
	errorMessage?: string;
	register: UseFormRegister<IFormValues>;
	rules?: { [key: string]: string | { value: number; message: string } };
};

const SingleCheckBoxField: React.FC<CheckBoxFieldProps> = ({
	id,
	name,
	label,
	errorMessage,
	register,
	rules,
	...rest
}: CheckBoxFieldProps) => {
	return (
		<div className="form-group">
			<div className="form-group-checkbox">
				<input
					id={id}
					type="checkbox"
					{...rest}
					{...register(name, rules && { ...rules })}
				/>
				<label htmlFor={id}>{label}</label>
			</div>
			{errorMessage && (
				<span className="error-message">{errorMessage}</span>
			)}
		</div>
	);
};

export default SingleCheckBoxField;
