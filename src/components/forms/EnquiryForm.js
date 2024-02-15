import React from 'react';
import Input from './formElements/Input';
import Button from '../ui/Button';

import './EnquiryForm.css';

const EnquiryForm = (props) => {
	return (
		<div id={props.formId} className={`form-container ${props.formClassName}`}>
			<h4 className='mb-form-title'>
				Get started with a FREE tailored budget plan
			</h4>
			<form className='form-elements-container'>
				<Input
					type='text'
					id='fName'
					inputMode='text'
					label='First name'
					autoComplete='given-name'
					className='small-field'
					inputClassName='field_focus_out'
					maxLength='30'
					required
				/>
				<Input
					type='text'
					id='lName'
					inputMode='text'
					label='Last name'
					autoComplete='family-name'
					className='small-field'
					inputClassName='field_focus_out'
					maxLength='30'
					required
				/>
				<Input
					type='email'
					id='email'
					inputMode='email'
					label='Email'
					autocomplete='email'
					className='email-field'
					inputClassName='field_focus_out'
					required
				/>
				<Input
					type='tel'
					id='phone'
					inputMode='tel'
					label='Phone'
					autocomplete='tel-national'
					className='small-field'
					inputClassName='field_focus_out'
					required
				/>
				<Input
					type='text'
					id='postcode'
					inputMode='numeric'
					label='Postcode'
					autocomplete='postal-code'
					className='small-field'
					inputClassName='field_focus_out'
					required
				/>
				<div className='form-checkbox-container'>
					<input
						className='mb_checkbox_input field_focus_out'
						type='checkbox'
						name='enquirySubscribeCheck'
						id='enquirySubscribeCheck'
						value='subscribe'
					/>
					<label className='mb_checkbox_label' htmlFor='enquirySubscribeCheck'>
						I do not want to receive free budgeting and money tips.
					</label>
				</div>
				<Button
					btnStyle='primary'
					type='submit'
					size='md'
					value='submit'
					className='form-submit-btn'
					mainMenuBtn
				>
					Get started
				</Button>
			</form>
		</div>
	);
};

export default EnquiryForm;
