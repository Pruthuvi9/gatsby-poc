import React from 'react';

import AusProofPoint from './ui/AustraliaProofPoint/AustraliaProofPoint';

import './HeroSection.css';
import EnquiryForm from './forms/EnquiryForm';
import { StaticImage } from 'gatsby-plugin-image';

const HeroSection = (props) => {
	return (
		<div className='mb-hero-section-container'>
			<div className='mb-hero-section-subcontainer'>
				<div className='mb-hero-section-column-1'>
					<div className='title-tagline-container'>
						<h1 className='mb-hero-title'>{props.heroTitle}</h1>
						<p className='mb-hero-tagline'>{props.heroTagline}</p>
					</div>
					<div className='hero-body-text-container'>
						<p className='mb_body_text mb_body_text_24'>{props.heroBodyText}</p>
					</div>
					{props.enquiryForm && (
						<EnquiryForm
							formId='heroEnqForm'
							formClassName='hero-enquiry-form'
						/>
					)}
					{props.ausProofPoint && <AusProofPoint />}
					<div className='trustpilot-widget-container'>
						<StaticImage src='../images/trustpilot-image-desktop.png' alt='' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
