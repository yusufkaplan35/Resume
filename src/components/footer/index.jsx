import React from "react";
import "./index.css";

const Footer = () => {
	return (
		<footer className="container">
			<div className="row">
				<p>
					Copyright &copy;2023{" "}
					<span className="text-green">John Doe</span>. All rights
					reserved.
				</p>

				<nav>
					<ul>
						<li>
							<a href="#terms">Terms &amp; Policy</a>
						</li>
						<li>
							<a href="#disclaimer">Disclaimer</a>
						</li>
					</ul>
				</nav>
			</div>
		</footer>
	);
};

export default Footer;