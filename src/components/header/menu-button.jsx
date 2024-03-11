import React from "react";
import "./menu-button.css";
import { TfiMenu } from "react-icons/tfi";

const MenuButton = () => {
	return (
		<>
			<label htmlFor="chkMenu" className="lbl-menu">
				<TfiMenu />
			</label>
			<input type="checkbox" id="chkMenu" className="chk-menu" />
		</>
	);
};

export default MenuButton;