import { motion } from "framer-motion";

import page from "../components/page";
import pageTitle from "../components/page-title";

function Projects() {
	console.log("[fn] Projects called");

	return (
		<div>
			{page("Projects", { element: [pageTitle("Projects")] })}

			<div className="h-screen"></div>
			<div className="h-screen"></div>
			<div className="h-screen"></div>
		</div>
	);
}

export default Projects;
