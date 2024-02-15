import { Link } from 'gatsby';
import React from 'react';

import './TopNav.css';
import { StaticImage } from 'gatsby-plugin-image';

const TopNav = () => {
	let iconHeight = 20;
	let layoutType = 'fixed';

	return (
		<div className='top-nav__container'>
			<div className='top-nav__sub-container'>
				<Link className='top-nav-link' to='/'>
					<StaticImage
						src='../../images/menu-icons/mb_resources_icon.png'
						alt='resources icon'
						layout={layoutType}
						height={iconHeight}
					/>
					Resources
				</Link>
				<Link className='top-nav-link' to='/'>
					<StaticImage
						src='../../images/menu-icons/mb_podcast_icon.png'
						alt='podcast icon'
						layout={layoutType}
						height={iconHeight}
					/>
					Podcast
				</Link>
				<Link className='top-nav-link' to='/blog/'>
					<StaticImage
						src='../../images/menu-icons/mb_pencil_icon.png'
						alt='blog icon'
						layout={layoutType}
						height={iconHeight}
					/>
					Our blog
				</Link>
				<Link className='top-nav-link' to='/'>
					<StaticImage
						src='../../images/menu-icons/mb_phone_icon.png'
						alt='phone icon'
						layout={layoutType}
						height={iconHeight}
					/>
					Contact us
				</Link>
				<Link className='top-nav-link' to='/'>
					<StaticImage
						src='../../images/menu-icons/mb_client_login.png'
						alt='client login icon'
						layout={layoutType}
						height={iconHeight}
					/>
					Client login
				</Link>
			</div>
		</div>
	);
};

export default TopNav;
