import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

function header() {
	console.log("[fn] header called");

	return (
		<div className="_header-wrapper fixed flex justify-center w-full z-50">
			<div className="_header backdrop-blur-lg bg-gray-dark bg-opacity-50 drop-shadow-2xl flex h-18 items-center justify-between lg:pl-20 lg:pr-20 lg:w-screen md:p-10 md:pl-15 md:pr-15 md:rounded-b-3xl mt-0 p-5 rounded-b-xl w-screen xl:w-11/12">
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
		<NavLink to="/" className="-translate-y-2">
			<motion.div
				className="_logo bg-gray-dark mt-2 md:p-6 p-4 rounded-3xl shadow-gray-dark"
				initial="rest"
				whileHover="hover"
				variants={logoContainerMotion}
			>
				<motion.div className="flex items-center" variants={logoMotion}>
					<h1 className="_logo-icon -translate-y-0.5 font-black font-display md:text-5xl mr-8 text-3xl text-white">D</h1>
					<h1 className="_logo-text -translate-y-0.5 font-display md:text-3xl text-white text-xl">itsdmd</h1>
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

	const li_classes = `_navbar-${text.toLowerCase()} font-display md:text-2xl sm:w-40 text-lg`;
	const nl_activeClasses = `active drop-shadow-[0_8px_16px_rgba(98,114,164,1)] font-bold md:text-3xl text-xl`;

	return (
		<motion.li className={li_classes} initial="rest" whileHover="hover">
			<motion.div variants={textMotion}>
				<NavLink to={link} className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? nl_activeClasses : "")}>
					{text}
					<div className="flex justify-center">
						<motion.hr className="mt-3 opacity-50" variants={hrMotion} />
					</div>
				</NavLink>
			</motion.div>
		</motion.li>
	);
}

function headerNavbar() {
	console.log("[fn] headerNavbar called");

	return (
		<div>
			<nav>
				<ul className="_navbar flex flex-col md:flex-row md:items-center md:justify-end md:space-x-8 md:space-y-0 space-y-2 text-right sm:text-center text-white">
					{navElement("Blog", "/blog")}
					{navElement("Projects", "/projects")}
					{navElement("Contact", "/contact")}
				</ul>
			</nav>
		</div>
	);
}

export default header;
