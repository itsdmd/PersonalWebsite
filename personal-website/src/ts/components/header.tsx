import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import { MdDarkMode, MdWbSunny } from "react-icons/md";

function header() {
	console.log("[fn] header called");

	return (
		<div className="_header-wrapper fixed flex justify-center w-full z-50">
			<div className="_header backdrop-blur-lg dark:bg-d-bg-dark bg-l-bg-dark bg-opacity-50 dark:bg-opacity-50 drop-shadow-2xl dark:drop-shadow-2xl flex h-18 items-center justify-between lg:pl-20 lg:pr-20 lg:w-screen md:p-10 md:pl-15 md:pr-15 md:rounded-b-3xl mt-0 p-5 rounded-b-xl w-screen xl:w-11/12">
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
				className="_logo bg-l-bg-dark dark:bg-d-bg-dark dark:shadow-d-bg-dark md:p-6 mt-2 p-4 rounded-3xl shadow-l-bg-dark"
				initial="rest"
				whileHover="hover"
				variants={logoContainerMotion}
			>
				<motion.div className="flex items-center" variants={logoMotion}>
					<h1 className="_logo-icon -translate-y-0.5 dark:text-white font-black font-display md:text-5xl mr-8 text-3xl text-l-black">D</h1>
					<h1 className="_logo-text -translate-y-0.5 dark:text-white font-display md:text-3xl text-l-black text-xl">itsdmd</h1>
				</motion.div>
			</motion.div>
		</NavLink>
	);
}

function navElement(textEN: string, textVN: string, link: string) {
	console.log('[fn] navElement called for "' + textEN + '":' + link);

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

	const li_classes = `_navbar-${textEN.toLowerCase()} font-display md:text-2xl sm:w-40 text-lg`;
	const nl_activeClasses = `active bg:drop-shadow-[0_8px_16px_rgba(98,114,164,1)] drop-shadow-[0_8px_16px_rgba(0,0,0,0.1)] font-bold md:text-3xl text-xl`;

	return (
		<motion.li className={li_classes} initial="rest" whileHover="hover">
			<motion.div variants={textMotion}>
				<NavLink to={link} className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? nl_activeClasses : "")}>
					<span lang="en">{textEN}</span>
					<span lang="vn">{textVN}</span>
					<div className="flex justify-center">
						<motion.hr className="border-l-black dark:border-d-white mt-3 opacity-50" variants={hrMotion} />
					</div>
				</NavLink>
			</motion.div>
		</motion.li>
	);
}

// language + theme switcher
function settingCombo() {
	return (
		<div className="flex-col flex items-center justify-center">
			{/* button for language */}
			<motion.button
				id="langBtn"
				className="bg-l-bg-dark dark:bg-d-bg dark:text-d-white font-bold font-monospace h-10 my-2 px-4 py-2 rounded-xl text-center text-l-black w-14"
				type="button"
				initial={{ boxShadow: "inset 0px 2px 4px rgba(0,0,0,0.4)" }}
				whileHover={{ boxShadow: "inset 0px 2px 8px rgba(0,0,0,0.4)" }}
			>
				EN
			</motion.button>

			{/* button for theme */}
			<motion.button
				id="themeBtn"
				className="bg-l-bg-dark dark:bg-d-bg font-bold h-10 my-2 px-4 py-2 rounded-xl w-14"
				type="button"
				initial={{ boxShadow: "inset 0px 2px 4px rgba(0,0,0,0.4)" }}
				whileHover={{ boxShadow: "inset 0px 2px 8px rgba(0,0,0,0.4)" }}
			>
				<MdWbSunny id="lightThemeIcon" className="m-auto relative" />
				<MdDarkMode id="darkThemeIcon" className="m-auto relative hidden" />
			</motion.button>
		</div>
	);
}

function headerNavbar() {
	console.log("[fn] headerNavbar called");

	return (
		<div>
			<nav>
				<ul className="_navbar dark:text-white flex flex-col md:flex-row md:items-center md:justify-end md:space-x-8 md:space-y-0 sm:text-center space-y-2 text-l-black text-right">
					{navElement("Projects", "Dự án", "/projects")}
					{navElement("Contact", "Liên hệ", "/contact")}
					{settingCombo()}
				</ul>
			</nav>
		</div>
	);
}

export default header;
