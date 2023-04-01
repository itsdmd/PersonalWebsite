import React from "react";
import { Element } from "react-scroll";

import Greeting from "../pages/Greeting";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

import { AnimatePresence } from "framer-motion";

function animatePageTransition() {
	return (
		<AnimatePresence>
			<React.Fragment>
				<Element id="greeting-section" name="greeting-section">
					{Greeting()}
				</Element>
				<Element id="projects-section" name="projects-section">
					{Projects()}
				</Element>
				<Element id="contact-section" name="contact-section">
					{Contact()}
				</Element>
			</React.Fragment>
		</AnimatePresence>
	);
}

export default animatePageTransition;
