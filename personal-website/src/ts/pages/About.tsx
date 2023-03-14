import { motion } from "framer-motion";

import page from "../components/page";
import pageTitle from "../components/page-title";

function About() {
	console.log("[fn] About called");

	return (
		<div>
			{page("About", { element: [pageTitle("About")] })}

			<div className="h-screen"></div>
			<div className="h-screen"></div>
			<div className="h-screen"></div>
		</div>
	);
}

export default About;
