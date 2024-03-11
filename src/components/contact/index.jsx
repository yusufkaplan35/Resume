import React from "react";
import "./index.css";
import SectionTitle from "../common/section-title";
import ContactInfo from "./info";
import ContactForm from "./form";

const Contact = () => {
	return (
		<section className="contact container">
			<SectionTitle title="Contact" subTitle="Get in Touch" />

			<div className="section-content">
				<div className="row">
					<ContactInfo />
					<ContactForm />
				</div>
			</div>
		</section>
	);
};

export default Contact;