import React from "react";
import SectionTitle from "../common/section-title";
import Technical from "./technical";
import Soft from "./soft";
import "./index.css"

const WhatIDo = () => {
	return (
		<section className="what-i-do container">
            <SectionTitle title="What I Do" subTitle="Skills"/>
			

			<div className="section-content">
				<div className="row">
					<Technical/>

					<Soft/>
				</div>
			</div>
		</section>
	);
};

export default WhatIDo;