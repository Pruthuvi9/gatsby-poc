import React from 'react';

import './Button.css';
import { Link } from 'gatsby';

const Button = (props) => {
	let btnLg = 'mb-btn-lg';
	let btnMd = 'mb-btn-md';
	let btnSm = 'mb-btn-sm';

	let anchorBtn = (
		<Link
			className={`mb-btn mb-btn-${props.btnStyle} ${
				props.size === 'lg' ? btnLg : props.size === 'md' ? btnMd : btnSm
			} ${props.mainMenuBtn ? 'mb-menu-btn' : ''} ${
				props.className ? props.className : ''
			}`}
			to={props.to || '/'}
		>
			{props.children}
		</Link>
	);

	let regularBtn = (
		<button
			className={`mb-btn mb-btn-${props.btnStyle} ${
				props.size === 'lg' ? btnLg : props.size === 'md' ? btnMd : btnSm
			} ${props.mainMenuBtn ? 'mb-menu-btn' : ''} ${
				props.className ? props.className : ''
			}`}
			type={props.type || 'button'}
			value={props.value}
		>
			{props.children}
		</button>
	);

	if (props.btnType === 'anchor') {
		return anchorBtn;
	} else {
		return regularBtn;
	}
};

export default Button;
