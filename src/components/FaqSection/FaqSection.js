import React from 'react';
import FaqBlock from './FaqBlock';

import './FaqSection.css';

let toggleAccordion = (event) => {
	event.preventDefault();

	event.target.parentElement.parentElement.nextElementSibling.classList.toggle(
		'show'
	);
};

const FaqSection = (props) => {
	let data = props.data;

	return (
		<div className='mb-section-container mb-faqs-section'>
			<h2 className='section-main-title center-text'>{props.mainTitle}</h2>
			<div className='faqs-container'>
				{data.map((faq) => (
					<FaqBlock
						key={faq.id}
						question={faq.question}
						answer={faq.answer}
						onClick={toggleAccordion}
					/>
				))}
			</div>
			<p className='more-faqs-text'>
				Can't find what you're looking for? <a href='#'>More FAQs.</a>
			</p>
		</div>
	);
};

export default FaqSection;
