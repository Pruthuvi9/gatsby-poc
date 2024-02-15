import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

import HeroSection from '../components/HeroSection';
import VideoCardSection from '../components/VideoCardSection';
import ImageTextSection from '../components/ui/ImageTextSection';
import SmallProofPoint from '../components/SmallProofPointSection';
import FaqSection from '../components/FaqSection/FaqSection';
import OurServicesSection from '../components/OurServicesSection/OurServicesSection';

import TammyImage from '../images/mbfounder_tammy_540_1.webp';
import TestimonialSection from '../components/TestimonialSections/TestimonialSection';

const Homepage = (props) => {
	// const data = useStaticQuery(graphql`
	// 	query {
	// 		allFile {
	// 			edges {
	// 				node {
	// 					name
	// 				}
	// 			}
	// 		}
	// 	}
	// `);

	// const tammyImage = getImage(
	// 	data.allFile.edges.node.name === 'mbfounder_tammy_540_1'
	// );

	let faqs = [
		{
			id: 'q1',
			question: 'What is MyBudget?',
			answer:
				"MyBudget is considered one of Australia's most trusted budgeting, debt solutions, and money management service companies. We’ve been helping people get out of debt, save and manage their money since 1999. Our state-of-the-art budgeting system and tailored money management services take the time and worry out of having to manage your finances.",
		},
		{
			id: 'q2',
			question: 'How much does MyBudget cost?',
			answer:
				'Your first appointment with MyBudget is free. If you decide to join, your fees will depend on the complexity of your financial situation and the level of support you need. Our mission is to improve financial wellbeing, so our fees are designed to be an affordable investment towards helping you achieve your financial goals.',
		},
		{
			id: 'q3',
			question: 'Do I qualify for MyBudget services?',
			answer: `Our clients come from all walks of life. From young to old, casual workers to CEOs, from people on government benefits to those with six-figure salaries. The requirements are that you have a regular and reliable income that is paid into a bank account. You will need to meet minimum income and serviceability thresholds.
				During the initial chat, we will ask you some questions about your financial situation to assess your eligibility.`,
		},
		{
			id: 'q4',
			question: 'How are MyBudget appointments conducted?',
			answer:
				'The majority of our appointments are conducted virtually or over the phone, which means they can be done in the comfort of your own home or office at a time that is best for you. We do offer face-to-face office appointments for our South Australian clients if preferred.',
		},
		{
			id: 'q5',
			question: 'What can I expect at a FREE MyBudget appointment?',
			answer: `Your MyBudget journey begins with an initial conversation with one of our money experts. They will chat to you about your financial position and gain an understanding of the financial goals you want to achieve. Once we have this snapshot, we will connect you with your very own Personal Budgeting Specialist. We can arrange a time convenient to you (and your partner where relevant). At that session we create a complete picture of your 12-month budget plan that is yours to keep for FREE!
				This budget plan provides you with a detailed understanding of how, together with the support of MyBudget, you can live a life free from money worries and achieve your financial goals.`,
		},
		{
			id: 'q6',
			question: 'Can I adjust my budget and access my money?',
			answer: `Absolutely. You have complete control and visibility of your finances. When you make a change to your budget, you'll see your future forecast and payments update in real-time. New or unexpected expenses are easily added to your budget via our desktop or mobile apps or over the phone. Ideally, unexpected expenses will be covered by surplus savings. (We'll help you develop a savings safety net.) If savings are not available, one of our money experts will help to adjust your budget so that the new expense fits.
			It's your money—you're always in control—and we're always here to help. Moving money between your MyBudget and personal accounts is done via bank transfer.`,
		},
	];

	let tammySectionText = {
		title: 'Tammy Barton',
		subtitle: 'Founder and Director',
		description: (
			<p>
				I started MyBudget a little over 25 years ago, to help as many people as
				possible live their lives without having to worry about money. We know
				that money is inter-connected with almost all parts of our life, and so
				the way we manage our money has such a big impact on the way our life
				turns out.
				<br />
				<br />
				If you want to get ahead, to live your best life, you need a different
				set of tools. You need a system and the support that helps you plan for
				the future—to look ahead, not behind you. And so we created a personal
				budgeting platform that supports Australians to achieve their financial
				goals with confidence.';
			</p>
		),
	};

	return (
		<>
			<Seo title='Personal Budget Specialists | MyBudget Australia' />
			<Layout>
				<HeroSection
					heroTitle='MyBudget'
					heroTagline='Live your life free from money worries'
					heroBodyText="We'll pay your bills on time, reduce your debt and create savings,
					so you can achieve your financial goals."
					ausProofPoint
					enquiryForm
				/>
				<SmallProofPoint text='The majority of MyBudget clients pay off 90% of their unsecured debt in just over 3 years.' />
				<ImageTextSection
					imgSrc={TammyImage}
					imgAlt='A greyscale image of Tammy Barton'
					title={tammySectionText.title}
					titleClassName='cursive-font'
					subtitle={tammySectionText.subtitle}
					description={tammySectionText.description}
					quoteStyle
				/>
				<OurServicesSection />
				<VideoCardSection
					mainTitle='How does MyBudget work?'
					secondaryTitle='We can manage your budget for you'
				/>
				<TestimonialSection />
				<FaqSection mainTitle='MyBudget FAQs' data={faqs} />
			</Layout>
		</>
	);
};

export default Homepage;
