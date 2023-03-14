import { motion } from "framer-motion";

import greetingCard from "../components/greeting-card";

function Home() {
	console.log("[fn] Home called");

	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }} exit={{ opacity: 0 }} className="Home">
			{greetingCard()}

			<div className="h-screen"></div>
			<div className="h-screen"></div>
			<div className="h-screen"></div>
		</motion.div>
	);
}

export default Home;
