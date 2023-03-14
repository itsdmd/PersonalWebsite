import { motion } from "framer-motion";

import pageTitle from "../components/page-title";

function Contact() {
	console.log("[fn] Contact called");

	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }} exit={{ opacity: 0 }} className="Contact">
			{pageTitle("Contact")}

			<div className="h-screen"></div>
			<div className="h-screen"></div>
			<div className="h-screen"></div>
		</motion.div>
	);
}

export default Contact;
