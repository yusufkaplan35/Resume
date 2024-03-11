import React from "react";
import "./social-menu.css";
import { TfiLinkedin, TfiTwitter, TfiFacebook } from "react-icons/tfi";

const SocialMenu = () => {
	return (
		<nav className="social-menu">
			<ul>
				<li>
					<a
						href="https://linkedin.com"
						target="_blank"
						rel="no-opener no-referrer"
					>
						<TfiLinkedin/>
					</a>
				</li>
				<li>
					<a
						href="https://twitter.com"
						target="_blank"
						rel="no-opener no-referrer"
					>
						<TfiTwitter/>
					</a>
				</li>
				<li>
					<a
						href="https://facebook.com"
						target="_blank"
						rel="no-opener no-referrer"
					>
						<TfiFacebook/>
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default SocialMenu;