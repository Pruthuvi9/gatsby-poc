import React from 'react';

import './SlidingMenu.css';

const SlidingMenu = ({ items, className, listItemClassName, btnClassName }) => {
	return (
		<ul className={`mb-sliding-menu ${className || ''}`}>
			{items.map((item) => (
				<li key={item.id} className={listItemClassName}>
					<button className={`slider-btn ${btnClassName || ''}`}>
						{item.slideTitle}
					</button>
				</li>
			))}
		</ul>
	);
};

export default SlidingMenu;
