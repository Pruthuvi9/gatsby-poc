import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import './AustraliaProofPoint.css';

const AusProofPoint = () => {
	return (
		<div className='australia-proof-point-container'>
			<StaticImage
				src='../../../images/mb_icon_australia.webp'
				alt='map of australia icon'
				className='australia-icon'
			/>
			<p className='australia-pp-text'>
				For 25 years, MyBudget has helped 130,000+ Australians fast track their
				financial goals by reducing their debt and building savings.
			</p>
		</div>
	);
};

export default AusProofPoint;
