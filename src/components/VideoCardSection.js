import React from 'react';

import './VideoCardSection.css';
import Blurb from './ui/Blurb';
import piggyBankIcon from '../images/icons/mb-icon-piggy-bank.png';
import beachIcon from '../images/icons/mb-icon-beach.png';
import calcIcon from '../images/icons/mb-icon-calc.png';

const VideoCardSection = ({ mainTitle, secondaryTitle }) => {
	return (
		<div className='mb-section-container'>
			<div className='card-element'>
				<h2 className='section-main-title center-text'>{mainTitle}</h2>
				<div className='video-embed-container'>
					<iframe
						width='960'
						height='540'
						src='https://www.youtube.com/embed/FSrIDrO-RwM?si=BB5zXWKAx8Ecz0i_'
						title='YouTube video player'
						// frameBorder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
						allowFullScreen
					></iframe>
				</div>
				{secondaryTitle && (
					<h3 className='section-sec-title center-text'>{secondaryTitle}</h3>
				)}
				<div className='blurbs-container'>
					<Blurb
						imgSrc={piggyBankIcon}
						imgAlt=''
						blurbTitle='12 month tailored budget plan'
						blurbDesc='Our dedicated team will get you set up for success with a plan that helps you achieve your goals.'
					/>
					<Blurb
						imgSrc={calcIcon}
						imgAlt=''
						blurbTitle='We do the hard work'
						blurbDesc='All your bills, savings and payments are managed for you. We can even negotiate with creditors.'
					/>
					<Blurb
						imgSrc={beachIcon}
						imgAlt=''
						blurbTitle='Watch your finances improve'
						blurbDesc='You’ll have access to our app. A great, helpful tool that gives you complete visibility and control of your money.'
					/>
				</div>
			</div>
		</div>
	);
};

export default VideoCardSection;
