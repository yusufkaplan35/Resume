import React from "react";

const PortfolioContent = ({ images }) => {
	return (
		<div className="masonary-content">
			{images.map((item) => (
				<img
					key={item.id}
					src={`img/${item.image}`}
					alt={item.category.join("-")}
				/>
			))}
		</div>
	);
};

export default PortfolioContent;