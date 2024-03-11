import React from "react";

const Skill = ({ title, rate }) => {

    rate = rate > 100 ? 100 : rate;
    
	return (
		<>
			<h6>
				<span>{title}</span>
				<span>{rate}%</span>
			</h6>
			<div className="progress">
				<span style={{width: `${rate}%`}}></span>
			</div>
		</>
	);
};

export default Skill;