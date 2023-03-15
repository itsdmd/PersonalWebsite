import { Route, Routes, useLocation } from "react-router-dom";

import Home from "../pages/Home";
import Blog from "../pages/Blog";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

import { AnimatePresence } from "framer-motion";

function animatePageTransition() {
	const location = useLocation();

	return (
		<AnimatePresence>
			<Routes location={location} key={location.pathname}>
				<Route path="/" element={<Home />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</AnimatePresence>
	);
}

export default animatePageTransition;
