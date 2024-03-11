import React from "react";
import { LuDownload } from "react-icons/lu";

const Personal = () => {
	return (
		<div>
			<ul className="contact">
				<li>
					<strong>Name:</strong> John Doe
				</li>
				<li>
					<strong>Email:</strong> john@doe.com
				</li>
				<li>
					<strong>Age:</strong> 35
				</li>
				<li>
					<strong>From:</strong> Los Angles, California
				</li>
			</ul>
			<button className="btn btn-bg">
				Download CV <LuDownload />
			</button>
		</div>
	);
};

export default Personal;