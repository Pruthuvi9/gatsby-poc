import React from 'react';

import './FaqBlock.css';
import toggleIcon from '../../images/icons/mb_icon_plus.webp';
// import { StaticImage } from 'gatsby-plugin-image';

const FaqBlock = (props) => {
	return (
		<li className='faq-block' key={props.id}>
			<div className='faq-block-heading-container'>
				<h6 className='faq-block-heading'>{props.question}</h6>
				<button className='accordion-toggle' onClick={props.onClick}>
					<img src={toggleIcon} alt='' />
				</button>
			</div>
			<p className='faq-block-description'>{props.answer}</p>
		</li>
	);
};

export default FaqBlock;
