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
				<Element id="greeting" name="greeting">
					{Greeting()}
				</Element>
				<Element id="projects" name="projects">
					{Projects()}
				</Element>
				<Element id="contact" name="contact">
					{Contact()}
				</Element>
			</React.Fragment>
		</AnimatePresence>
	);
}

export default animatePageTransition;
