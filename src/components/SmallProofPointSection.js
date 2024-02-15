import React from 'react';

import './SmallProofPointSection.css';

const SmallProofPoint = (props) => {
	return (
		<div className='mb-section-container'>
			<div className='mb-section-subcontainer'>
				<div className='proofpoint-text-container'>
					<p>{props.text}</p>
				</div>
			</div>
		</div>
	);
};

export default SmallProofPoint;
