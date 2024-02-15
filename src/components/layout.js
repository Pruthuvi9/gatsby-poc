import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import TopNav from './navigation/TopNav';
import MainNav from './navigation/MainNav';
import FooterNav from './navigation/FooterNav';

const Layout = ({ children }) => {
	const {
		wp: {
			generalSettings: { title },
		},
	} = useStaticQuery(graphql`
		query LayoutQuery {
			wp {
				generalSettings {
					title
					description
				}
			}
		}
	`);

	return (
		<div className='global-wrapper'>
			<header className='global-header'>
				<>
					<TopNav />
					<MainNav />
				</>
			</header>

			<main>{children}</main>

			<footer>
				<FooterNav />
			</footer>
		</div>
	);
};

export default Layout;
