import React from "react";
import SectionTitle from "../common/section-title";
import "./index.css";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";
import { TfiDownload } from "react-icons/tfi";

const Resume = () => {
	return (
		<section className="resume container">
			<SectionTitle title="Resume" subTitle="Summary" />

			<div className="section-content">
				<div className="row">
					<Education />

					<Experience />
				</div>

				<Skills />

				<div className="text-center">
					<button className="btn">
						Download CV <TfiDownload />
					</button>
				</div>
			</div>
		</section>
	);
};

export default Resume;