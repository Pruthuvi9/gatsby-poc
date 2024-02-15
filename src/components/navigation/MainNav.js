import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import './MainNav.css';
import Button from '../ui/Button';

const MainNav = () => {
	return (
		<div className='main-nav__container'>
			<div className='main-nav__sub-container'>
				<Link className='main-nav-mybudget-logo' to='/'>
					<StaticImage
						src='../../images/mb-logo-1.png'
						alt='client login icon'
						width={200}
					/>
				</Link>
				<div className='main-nav_sublinks'>
					<Link className='main-nav-link' to='/'>
						How it works
					</Link>
					<Link className='main-nav-link' to='/'>
						Personal budget services
					</Link>
					<Link className='main-nav-link' to='/'>
						Debt Solutions
					</Link>
					<button className='search-btn' aria-label='search button'>
						<StaticImage
							src='../../images/my-budget-icon-search.webp'
							alt='search icon'
						/>
					</button>
				</div>
				<div className='main-nav-cta-container'>
					<Button
						btnStyle='primary'
						btnType='anchor'
						size='sm'
						className='enquiry-btn'
						mainMenuBtn
					>
						Enquire online
					</Button>
					<Button
						btnStyle='secondary'
						size='sm'
						className='mb-btn-w-icon'
						mainMenuBtn
					>
						<StaticImage
							src='../../images/menu-icons/mb_icon_call.png'
							alt=''
							width={16}
						/>
						1300 300 922
					</Button>
				</div>
			</div>
		</div>
	);
};

export default MainNav;
