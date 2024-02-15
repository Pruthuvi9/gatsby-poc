import { Link } from 'gatsby';
import React from 'react';

import './FooterNav.css';
import Button from '../ui/Button';
import { StaticImage } from 'gatsby-plugin-image';

const FooterNav = () => {
	const logoWidth = 130;

	return (
		<div className='footer'>
			<div className='footer-nav-link__container'>
				<Link to='/' className='footer-nav-link'>
					About us
				</Link>
				<Link to='/' className='footer-nav-link'>
					FAQs
				</Link>
				<Link to='/' className='footer-nav-link'>
					Careers
				</Link>
				<Link to='/' className='footer-nav-link'>
					Employee financial wellness program
				</Link>
				<Link to='/' className='footer-nav-link'>
					Loans
				</Link>
				<Link to='/' className='footer-nav-link'>
					MyHomeBuild
				</Link>
				<Link to='/' className='footer-nav-link'>
					Contact us
				</Link>
				<Button btnStyle='primary' size='md'>
					Call 1300 300 922
				</Button>
			</div>
			<div className='footer-ndis-logo-container'>
				<StaticImage
					src='../../images/footer-icons/mblogo_ndis_footer.png'
					alt='NDIS logo'
				/>
			</div>
			<div className='footer-rating-app-links-container'>
				<div className='footer-rating-container'>
					<a
						href='https://www.productreview.com.au/listings/my-budget'
						target='_blank'
						rel='noreferrer'
					>
						<StaticImage
							src='../../images/footer-icons/my-budget-product-review.webp'
							alt='Product Review logo'
							width={logoWidth}
							className='prod-rev-logo-footer'
						/>
					</a>
					<a
						href='https://au.trustpilot.com/review/mybudget.com.au'
						target='_blank'
						rel='noreferrer'
					>
						<StaticImage
							src='../../images/footer-icons/my-budget-trustpilot.webp'
							alt='Trustpilot logo'
							width={logoWidth}
							className='trustpilot-logo-footer'
						/>
					</a>
				</div>
				<div className='footer-app-link-container'>
					<a
						href='https://apps.apple.com/au/app/mybudget-client-app/id1562177248'
						target='_blank'
						rel='noreferrer'
					>
						<StaticImage
							src='../../images/footer-icons/my-budget-apple-app-store.webp'
							alt='Apple App Store icon'
							width={logoWidth}
						/>
					</a>
					<a
						href='https://play.google.com/store/apps/details?id=au.com.mybudget.mymobile'
						target='_blank'
						rel='noreferrer'
					>
						<StaticImage
							src='../../images/footer-icons/my-budget-google-play-store.webp'
							alt='Google Play Store icon'
							width={logoWidth}
						/>
					</a>
				</div>
			</div>
			<div className='footer-disclaimer-container'>
				<p>
					© 2021 MyBudget Pty Ltd, ACN 093 118 597 AFSL and Australian Credit
					Licence 391759
				</p>
				<p>
					MyBudget Loans Pty Ltd, ACN 613 857 104 Australian Credit Licence
					492064
				</p>
				<p>
					MyDebtSolution Pty Ltd, ACN 125 292 739 Registered Debt Agreement
					Administrator No. 1173
				</p>
				<p>
					The information contained on this website is general information only.
					Any advice is general in nature and does not consider your objectives,
					financial situation or needs. For personal budgeting advice, consult
					one of our trained budgeting experts. Please then refer to the
					relevant disclosure documents, including the Terms of Service,
					provided to you in accordance with financial services law and credit
					legislation to help you decide if the service is right for you.
				</p>
			</div>
			<div className='footer-bottom-nav-container'>
				<div className='footer-bottom-links-container'>
					<Link className='footer-bottom-link' to='/'>
						Complaints
					</Link>
					<Link className='footer-bottom-link' to='/'>
						Privacy policy
					</Link>
					<Link className='footer-bottom-link' to='/'>
						Sitemap
					</Link>
					<Link className='footer-bottom-link' to='/'>
						Glossary
					</Link>
				</div>
				<div className='footer-socials-container'>
					<a href='https://www.facebook.com/mybudget/'>
						<StaticImage
							src='../../images/footer-icons/mbicon_facebook.webp'
							alt='Facebook icon'
							target='_blank'
							rel='noreferrer'
							className='footer-social-icon'
						/>
					</a>
					<a href='https://www.instagram.com/mybudgetau/'>
						<StaticImage
							src='../../images/footer-icons/mbicon_instagram.webp'
							alt='Instagram icon'
							target='_blank'
							rel='noreferrer'
							className='footer-social-icon'
						/>
					</a>
					<a href='https://twitter.com/mybudgetcomau'>
						<StaticImage
							src='../../images/footer-icons/mbicon_twitter.webp'
							alt='Twitter icon'
							target='_blank'
							rel='noreferrer'
							className='footer-social-icon'
						/>
					</a>
					<a href='https://www.linkedin.com/company/mybudget'>
						<StaticImage
							src='../../images/footer-icons/mbicon_linkedin.png'
							alt='Linkedin icon'
							target='_blank'
							rel='noreferrer'
							className='footer-social-icon'
						/>
					</a>
					<a href='https://www.youtube.com/channel/UCuFyBPFh9cmFXinbe1bu1Qg'>
						<StaticImage
							src='../../images/footer-icons/mbicon_youtube.png'
							alt='Youtube icon'
							target='_blank'
							rel='noreferrer'
							className='footer-social-icon'
						/>
					</a>
				</div>
			</div>
		</div>
	);
};

export default FooterNav;
