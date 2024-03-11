import React from "react";
import SkillItem from "./skill-item";
import { TfiPalette } from "react-icons/tfi";
import { SiMaterialdesignicons } from "react-icons/si";

const Soft = () => {
	return (
		<ul>
			<SkillItem
				title="Web Design"
				desc="Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Labore, odio!"
				icon={<TfiPalette />}
			/>

			<SkillItem
				title="UI/UX Design"
				desc="Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Labore, odio!"
				icon={<SiMaterialdesignicons />}
			/>

			<SkillItem
				title="Business Analysis"
				desc="Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Labore, odio!"
				icon={<TfiPalette />}
			/>
		</ul>
	);
};

export default Soft;