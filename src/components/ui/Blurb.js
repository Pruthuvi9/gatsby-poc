import React from 'react';

import './Blurb.css';

const Blurb = (props) => {
	return (
		<div className='blurb-container'>
			<div className='blurb-image-container'>
				<img src={props.imgSrc} alt={props.imgAlt} className='blurb-img' />
			</div>
			<h6 className='blurb-title'>{props.blurbTitle}</h6>
			<p className='blurb-description'>{props.blurbDesc}</p>
		</div>
	);
};

export default Blurb;
