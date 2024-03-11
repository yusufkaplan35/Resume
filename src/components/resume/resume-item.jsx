import React from "react";

const ResumeItem = ({ date, title, place, desc }) => {
	return (
		<>
			<span>{date}</span>
			<h4>{title}</h4>
			<h6>{place}</h6>
			<p>{desc}</p>
		</>
	);
};

export default ResumeItem;