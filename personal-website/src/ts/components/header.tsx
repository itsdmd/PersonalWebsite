import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

function header() {
	console.log("[fn] header called");

	return (
		<div className="_header-wrapper fixed flex justify-center w-full z-50">
			<div className="_header backdrop-blur-lg bg-gray bg-opacity-50 drop-shadow-2xl flex h-18 items-center justify-between lg:pl-20 lg:pr-20 lg:w-screen md:pl-15 md:pr-15 md:rounded-b-3xl mt-0 p-10 rounded-b-xl w-screen xl:w-11/12">
				{headerLogo()}
				{headerNavbar()}
			</div>
		</div>
	);
}

function headerLogo() {
	console.log("[fn] headerLogo called");

	const logoContainerMotion = {
		rest: {
			boxShadow: "inset 0px 2px 8px rgba(0,0,0,0.4)",
		},
		hover: {
			boxShadow: "inset 0px 2px 24px rgba(0,0,0,0.4)",
		},
	};

	const logoMotion = {
		rest: {
			translateY: 0,
		},
		hover: {
			translateY: 2,
		},
	};

	return (
		<NavLink to="/">
			<motion.div className="_logo mt-2 p-6 rounded-3xl shadow-gray-dark" initial="rest" whileHover="hover" variants={logoContainerMotion}>
				<motion.div className="flex items-center" variants={logoMotion}>
					<h1 className="_logo-icon -translate-y-0.5 font-black font-display mr-8 text-5xl text-white">D</h1>
					<h1 className="_logo-text -translate-y-0.5 font-display text-3xl text-white">itsdmd</h1>
				</motion.div>
			</motion.div>
		</NavLink>
	);
}

function navElement(text: string, link: string) {
	console.log('[fn] navElement called for "' + text + '":' + link);

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

	const li_classes = `_navbar-${text.toLowerCase()} font-display text-2xl`;
	const nl_activeClasses = `active drop-shadow-[0_8px_16px_rgba(98,114,164,1)] font-bold text-3xl`;

	return (
		<motion.li className={li_classes} initial="rest" whileHover="hover">
			<motion.div variants={textMotion}>
				<NavLink to={link} className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? nl_activeClasses : "")}>
					{text}
				</NavLink>
			</motion.div>
			<div className="flex justify-center">
				<motion.hr className="mt-1 opacity-50" variants={hrMotion} />
			</div>
		</motion.li>
	);
}

function headerNavbar() {
	console.log("[fn] headerNavbar called");

	return (
		<div>
			<nav>
				<ul className="_navbar flex flex-col md:flex-row md:items-center md:justify-end md:space-x-8 md:space-y-0 space-y-4 text-right text-white">
					{navElement("Blog", "/blog")}
					{navElement("Projects", "/projects")}
					{navElement("Contact", "/contact")}
				</ul>
			</nav>
		</div>
	);
}

export default header;
