import React from "react";
import "./main-menu.css";

const MainMenu = () => {
	return (
		<nav className="main-menu">
			<ul>
				<li>
					<a href="#home" title="Homepage of John Doe">
						Home
					</a>
				</li>
				<li>
					<a href="#about" title="About John Doe">
						About
					</a>
				</li>
				<li>
					<a href="#what-i-do">What I Do</a>
				</li>
				<li>
					<a href="#resume">Resume</a>
				</li>
				<li>
					<a href="#portfolio">Portfolio</a>
				</li>
				<li>
					<a href="#client">Client</a>
				</li>
				<li>
					<a href="#contact">Contact</a>
				</li>
			</ul>
		</nav>
	);
};

export default MainMenu;