import { motion } from "framer-motion";

import pageTitle from "../components/page-title";

function Projects() {
	console.log("[fn] Projects called");

	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }} exit={{ opacity: 0 }} className="Projects">
			{pageTitle("Projects")}

			<div className="h-screen"></div>
			<div className="h-screen"></div>
			<div className="h-screen"></div>
		</motion.div>
	);
}

export default Projects;
