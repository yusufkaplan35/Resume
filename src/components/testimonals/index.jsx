import React from "react";
import SectionTitle from "../common/section-title";
import "./index.css";
import data from "../../data/testimonals.json";
import Testimonal from "./testimonal";

const Testimonals = () => {
	return (
		<section className="clients container">
			<SectionTitle title="Client Speak" subTitle="Testimonials" />

			<div className="section-content">
				<div className="row">
					{data.map((item) => (
						<Testimonal key={item.id} {...item} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Testimonals;