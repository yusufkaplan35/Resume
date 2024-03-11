import React from "react";

const SkillItem = ({ title, desc, icon }) => {
	return (
		<li>
			<i>{icon}</i>
			<div>
				<h3>{title}</h3>
				<p>{desc}</p>
			</div>
		</li>
	);
};

export default SkillItem;