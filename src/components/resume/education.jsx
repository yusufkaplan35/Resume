import React from "react";
import data from "../../data/education.json";
import ResumeItem from "./resume-item";

const Education = () => {
	return (
		<div>
			<h3>My Education</h3>

			<ul className="experience">
				{data.map((item) => (
					<li key={item.id}>
						<ResumeItem
							date={item.date}
							title={item.title}
							place={item.school}
							desc={item.desc}
						/>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Education;