import React from "react";

const ContactForm = () => {
	return (
		<div>
			<h4>SEND US A NOTE</h4>
			<form action="">
				<div>
					<input
						type="text"
						name="name"
						className="form-control"
						id="name"
						placeholder="Name"
					/>
					<input
						type="email"
						name="email"
						className="form-control"
						id="email"
						placeholder="E-mail"
					/>
				</div>
				<div>
					<textarea
						name="message"
						id="message"
						className="form-control"
						cols="30"
						rows="5"
						placeholder="Your message"
					></textarea>
				</div>
				<div className="text-center">
					<button className="btn btn-bg">Send Message</button>
				</div>
			</form>
		</div>
	);
};

export default ContactForm;