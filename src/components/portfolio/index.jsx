import React from "react";
import SectionTitle from "../common/section-title";
import PortfolioMenu from "./menu";
import PortfolioContent from "./content";
import "./index.css";
import data from "../../data/portfolio.json";

const Portfolio = () => {


	let arr = data.reduce( (t, item) => [...t, ...item.category], ["all"] );
	
	arr = [...new Set(arr)];


	return (
		<section className="portfolio container">
			<SectionTitle title="My Work" subTitle="Portfolio" />

			<div className="section-content">
				<PortfolioMenu categories={arr}/>

				<PortfolioContent images={data} />
			</div>
		</section>
	);
};

export default Portfolio;