import React from "react";
import "./index.css"

const Banner = () => {
	return (
		<section className="banner">
			<img src="img/john-doe-banner.jpg" alt="John Doe" />

			<div className="banner-text">
				<h5>Welcome</h5>
				<h2>I'm a developer</h2>
				<p>based in Los Angeles, California</p>
				<button className="btn btn-outline">Hire me</button>
			</div>
		</section>
	);
};

export default Banner;