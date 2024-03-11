import React from "react";

const PortfolioMenu = ({ categories }) => {
	return (
		<nav>
			<ul>
				{categories.map((item, index) => (
					<li key={index}>
						<a href={`#${item}`}>{item}</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default PortfolioMenu;