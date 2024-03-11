import React from "react";
import Skill from "./skill";

const Skills = () => {
	return (
		<div className="skills">
			<h3>My Skills</h3>
			<div className="row">
				<ul>
					<li>
						<Skill title="Web Design" rate="85" />
					</li>
					<li>
						<Skill title="Web Design" rate="85" />
					</li>
					<li>
						<Skill title="Web Design" rate="35" />
					</li>
				</ul>
				<ul>
					<li>
						<Skill title="Web Design" rate="99" />
					</li>
					<li>
						<Skill title="Web Design" rate="175" />
					</li>
					<li>
						<Skill title="Web Design" rate="85" />
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Skills;