import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function header() {
	console.log("[fn] header called");

	return (
		<div className="fixed flex justify-center w-full z-50" id="header-wrapper">
			<div
				className="backdrop-blur-lg bg-gray bg-opacity-50 drop-shadow-2xl flex h-18 items-center justify-between lg:pl-20 lg:pr-20 md:pl-15 md:pr-15 md:rounded-b-3xl md:w-11/12 mt-0 p-10 rounded-b-xl w-screen"
				id="header"
			>
				{headerLogo()}
				{headerNavbar()}
			</div>
		</div>
	);
}

function headerLogo() {
	console.log("[fn] headerLogo called");

	return (
		<Link to="/">
			<div className="flex items-center" id="logo">
				<h1 className="font-black font-display mr-8 text-5xl text-white" id="logo-icon">
					D
				</h1>
				<h1 className="-translate-y-0.5 font-display text-3xl text-white" id="logo-text">
					itsdmd
				</h1>
			</div>
		</Link>
	);
}

function navElement(text: string, link: string) {
	const textMotion = {
		hover: {
			translateY: -5,
		},
	};

	const hrMotion = {
		rest: {
			width: 0,
		},
		hover: {
			width: "100%",
		},
	};

	return (
		<motion.li className="font-bold font-display text-2xl" initial="rest" whileHover="hover">
			<motion.div variants={textMotion}>
				<Link to={link}>{text}</Link>
			</motion.div>
			<div className="flex justify-center">
				<motion.hr className="mt-1" variants={hrMotion} />
			</div>
		</motion.li>
	);
}

function headerNavbar() {
	return (
		<div>
			<nav id="navbar">
				<ul className="flex-col hidden md:flex md:flex-row md:items-center md:justify-end md:space-x-8 md:space-y-0 space-y-4 text-white mt-1">
					{navElement("Blog", "/blog")}
					{navElement("Projects", "/projects")}
					{navElement("Contact", "/contact")}
				</ul>
			</nav>
		</div>
	);
}

export default header;
