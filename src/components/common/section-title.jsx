import React from "react";
import "./section-title.css";

const SectionTitle = ({ title, subTitle }) => {
	return (
		<div className="section-title">
			<h2>{subTitle}</h2>
			<h4>{title}</h4>
		</div>
	);
};

export default SectionTitle;