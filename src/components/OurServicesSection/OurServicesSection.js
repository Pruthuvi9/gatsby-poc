import React from 'react';

import SlidingMenu from '../ui/SlidingMenu/SlidingMenu';
import './OurServicesSection.css';

import BecJarradImage from '../../images/bec_jarrad_370.jpg';
import MegCreaghImage from '../../images/meg_creagh_370.jpg';
import LeahImage from '../../images/leah_370.webp';

const OurServicesSection = (props) => {
	let ourServicesData = [
		{
			id: 'sl1',
			slideTitle: 'Personal budgeting',
			imgSrc: BecJarradImage,
			imgAlt: 'Bec and Jarrad spending time on the beach with their kids',
			title:
				"Together, we'll design a tailored budget plan that makes your money go further.",
			list: [
				{
					id: 'l1',
					listItem: "We'll help you understand how to budget effectively",
				},
				{
					id: 'l2',
					listItem: 'Create short and long-term savings plans you can stick to',
				},
				{
					id: 'l3',
					listItem: 'Build emergency savings to prepare you for the unexpected',
				},
				{
					id: 'l4',
					listItem:
						'Let us take away your money worries and do the heavy lifting for you.',
				},
			],
		},
		{
			id: 'sl2',
			slideTitle: 'Debt solutions',
			imgSrc: MegCreaghImage,
			imgAlt: 'Megan and Creagh shopping at the market',
			title: "We'll help design a tailored plan that provides you debt relief.",
			list: [
				{
					id: 'l5',
					listItem: 'Implement practical ways to pay off your debt',
				},
				{
					id: 'l6',
					listItem: 'Rebuild your credit rating by paying your bills on time',
				},
				{
					id: 'l7',
					listItem:
						"We'll do the heavy lifting by talking with your creditors so you don't have to",
				},
				{
					id: 'l8',
					listItem: 'We do the work that keeps your repayments on track',
				},
				{
					id: 'l9',
					listItem:
						'Let us take away your money worries and gain peace of mind.',
				},
			],
		},
		{
			id: 'sl3',
			slideTitle: 'Total visibility & support',
			imgSrc: LeahImage,
			imgAlt: 'Leah, MyBudget team member',
			title:
				"Imagine total financial freedom -- got it? Now let's get you there.",
			list: [
				{
					id: 'l10',
					listItem:
						'Get a tailored budget plan that helps you achieve your financial goals',
				},
				{
					id: 'l11',
					listItem: 'Get out of debt and start saving',
				},
				{
					id: 'l12',
					listItem: 'Have peace on mind knowing your bills are paid on time',
				},
				{
					id: 'l13',
					listItem: 'We do all the heavy lifting so you can focus on living.',
				},
			],
		},
	];

	return (
		<div className='mb-section-container'>
			<div className='mb-section-subcontainer'>
				<h2 className='section-main-title center-text'>Our services</h2>
				<p className='mb_body_text_24 mt-24 center-text'>
					We can manage your budget for you
				</p>
				<SlidingMenu items={ourServicesData} className='our-services-slider' />
				<div className='slides-container'>
					{ourServicesData.map((slide) => (
						<div key={slide.id} className='slide-container'>
							<div className='text-image-subcontainer-2'>
								<div className='image-column'>
									<img
										src={slide.imgSrc}
										alt={slide.imgAlt}
										className='img-col-img'
									/>
								</div>
								<div className='text-column'>
									<h3 className='text-col-title-2'>{slide.title}</h3>
									<p className='text-col-subtitle'>{props.subtitle}</p>
									{slide.description && (
										<div className='text-col-desc-container'>
											{props.description}
										</div>
									)}
									{slide.list && (
										<ul className='mb-unordered-list'>
											{slide.list.map((item) => (
												<li key={item.id} className='mb-list-item'>
													<p>{item.listItem}</p>
												</li>
											))}
										</ul>
									)}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default OurServicesSection;
