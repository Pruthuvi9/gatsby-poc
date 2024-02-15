import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import './ImageTextSection.css';

const ImageTextSection = (props) => {
	return (
		<div className='mb-section-container'>
			<div className='mb-section-subcontainer text-image-subcontainer'>
				<div className='image-column'>
					{/* <GatsbyImage image={props.image} alt={props.alt} /> */}
					<img
						src={props.imgSrc}
						alt={props.imgAlt}
						className={`img-col-img ${props.imgClassName || ''}`}
					/>
				</div>
				<div className={`text-column ${props.textColClassNames}`}>
					<h3 className={`text-col-title ${props.titleClassName}`}>
						{props.title}
					</h3>
					<p className={`text-col-subtitle ${props.subtitleClassName || ''}`}>
						{props.subtitle}
					</p>
					{props.quoteStyle && (
						<div className='quote-style'>
							<StaticImage src='../../images/mb-quote-icon.webp' alt='' />
						</div>
					)}
					<div
						className={`text-col-desc-container ${
							props.descContainerClassName || ''
						}`}
					>
						{props.description}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ImageTextSection;
