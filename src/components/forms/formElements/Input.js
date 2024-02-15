import React from 'react';

import './Input.css';

const Input = (props) => {
	if (props.textarea) {
		return (
			<div className={`textarea-container ${props.className || ''}`}>
				<label htmlFor={props.id}>{props.label}</label>
				<textarea id={props.id} name={props.id} rows={props.rows || 3} />
			</div>
		);
	} else {
		return (
			<div className={`input-container ${props.className || ''}`}>
				<label htmlFor={props.id}>{props.label}</label>
				<input
					className={props.inputClassName || ''}
					type={props.type}
					id={props.id}
					name={props.id}
					maxLength={props.maxLength}
					autoComplete={props.autoComplete}
					inputMode={props.inputMode}
					required={props.required}
				/>
			</div>
		);
	}
};

export default Input;
