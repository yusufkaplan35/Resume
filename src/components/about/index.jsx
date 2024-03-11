import React from "react";
import SectionTitle from "../common/section-title";
import WhoAmI from "./who-am-i";
import Personal from "./personal";
import Stats from "./stats";
import "./index.css"

const About = () => {
	return (
		<section className="about container">
			<SectionTitle title="Know Me More" subTitle="About Me" />

			<div className="section-content">
				<div className="row">
					<WhoAmI />

					<Personal />
				</div>

				<Stats />
			</div>
		</section>
	);
};

export default About;