import React from "react";

const Testimonal = ({ image, name, location, message, rate }) => {
	return (
		<div className="testimonial">
			<div className="title">
				<img src={`img/${image}`} alt={name} />
				<div>
					<h4>{name}</h4>
					<p>User from {location}</p>
				</div>
			</div>
			<p>{message}</p>
			<label>{[...new Array(rate)].map(() => "⭐")}</label>
		</div>
	);
};

export default Testimonal;