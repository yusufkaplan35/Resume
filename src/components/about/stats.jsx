import React from "react";
import data from "../../data/stats.json";

const Stats = () => {
	return (
		<ul className="stats row">
			{data.map((item) => (
				<li key={item.title}>
					<h3>{item.value}</h3>
					<p>{item.title}</p>
				</li>
			))}
		</ul>
	);
};

export default Stats;