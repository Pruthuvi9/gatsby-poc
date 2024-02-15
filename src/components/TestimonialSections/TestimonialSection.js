import React from 'react';

import './TestimonialSection.css';

import Channel9Logo from '../../images/trusted-sources-icons/Channel-9-Logo.png';
import AbcRadioLogo from '../../images/trusted-sources-icons/mb_logo_mono_abc_radio.webp';
import TheAdvertiserLogo from '../../images/trusted-sources-icons/mb_logo_mono_advertiser.webp';
import ForbesLogo from '../../images/trusted-sources-icons/mb_logo_mono_forbes.png';
import TenNetworkLogo from '../../images/trusted-sources-icons/mb_logo_mono_network_ten.webp';
import SbsLogo from '../../images/trusted-sources-icons/mb_logo_mono_sbs.webp';
import SevenNetworkLogo from '../../images/trusted-sources-icons/mb_logo_mono_seven_network.webp';
import TheAustralianLogo from '../../images/trusted-sources-icons/mb_logo_mono_the_austrlian.png';

const TestimonialSection = (props) => {
	let trustedSourcesLogos = [
		{ id: 'forbes-logo', logo: ForbesLogo, alt: 'Forbes logo' },
		{
			id: 'the-australian-logo',
			logo: TheAustralianLogo,
			alt: 'The Australian logo',
		},
		{ id: 'Ten Network Logo', logo: TenNetworkLogo, alt: 'Ten Network logo' },
		{ id: 'channel-9-logo', logo: Channel9Logo, alt: 'Channel 9 logo' },
		{ id: 'abc-radio-logo', logo: AbcRadioLogo, alt: 'ABC Radio logo' },
		{
			id: 'seven-network-logo',
			logo: SevenNetworkLogo,
			alt: 'Seven Network logo',
		},
		{ id: 'sbs-logo', logo: SbsLogo, alt: 'SBS logo' },
		{
			id: 'the-advertiser-log',
			logo: TheAdvertiserLogo,
			alt: 'The Advertiser logo',
		},
	];

	let clientTestimonials = [
		{
			id: 'test-aleta',
			clientName: 'Aleta',
			date: 'July 2022',
			content:
				"Best decision I've ever made is using MyBudget. As a family of 5 things get tight and out of hand. I've managed to pay off my debt, pay all my bills, buy 2 new cars and take family on several overseas trips including a big trip to Disneyland. I could never have this lifestyle if it wasn't for MyBudget.",
			source: 'trustpilot',
		},
	];

	return (
		<div className='mb-section-container'>
			<div className='mb-section-subcontainer'>
				<h2 className='section-main-title center-text'>
					Don't just take our word for it
				</h2>
				<p className='mb_body_text_24 mt-24 center-text'>
					We're often featured in many trusted sources
				</p>
				<div className='trusted-sources-container'>
					{trustedSourcesLogos.map((item) => (
						<div key={item.id} className='source-logo-container'>
							<img src={item.logo} alt={item.alt} />
						</div>
					))}
				</div>
				<div className='testimonials-container'>
					<button id='prev-slide-btn' className='slider-nav-button'></button>
					{clientTestimonials.map((item) => (
						<div key={item.id} className='testimonial-card'>
							<div className='test-source-logo-container'>
								<img />
							</div>
							<div className='testimonial-container'>
								<div className='testimonial-description-container'>
									<p className='mb_body_text_24'>{item.content}</p>
								</div>
								<div className='client-info-container'>
									<p className='test-client-name'>{item.clientName}</p>
									<p className='test-client-joined-date'>{`${
										`joined ${item.date}` || ''
									}`}</p>
								</div>
							</div>
						</div>
					))}
					<button id='next-slide-btn' className='slider-nav-button'></button>
				</div>
			</div>
		</div>
	);
};

export default TestimonialSection;
