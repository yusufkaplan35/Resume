import React from "react";
import SocialMenu from "../header/social-menu";
import { TfiHeadphoneAlt, TfiMobile, TfiEmail } from "react-icons/tfi"

const ContactInfo = () => {
	return (
		<div className="info">
			<div className="address">
				<h4>ADDRESS</h4>
				<address>
					Lorem ipsum dolor, sit amet consectetur adipisicing.
				</address>
			</div>

			<ol>
				<li>
					<a href="tel:+60444434444">
						<i><TfiHeadphoneAlt/></i> (060) 444 434 444
					</a>
				</li>
				<li>
					<a href="tel:+60444434445">
                    <i><TfiMobile/></i> (060) 444 434 445
					</a>
				</li>
				<li>
					<a href="mailto:info@johndoe.com">
                    <i><TfiEmail/></i>
						info@johndoe.com
					</a>
				</li>
			</ol>

			<div className="social">
				<h4>FOLLOW ME</h4>
				
                <SocialMenu/>
			</div>
		</div>
	);
};

export default ContactInfo;