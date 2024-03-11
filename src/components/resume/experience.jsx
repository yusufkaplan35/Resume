import React from "react";
import data from "../../data/experience.json";
import ResumeItem from "./resume-item";

const Experience = () => {
	return (
		<div>
			<h3>My Experience</h3>

			<ul className="experience">
				{data.map((item) => (
					<li key={item.id}>
						<ResumeItem
							date={item.date}
							title={item.title}
							place={item.company}
							desc={item.desc}
						/>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Experience;