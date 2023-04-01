import { useState } from "react";
import * as Scroll from "react-scroll";
import { motion } from "framer-motion";

const ScrollLink = Scroll.Link;

import MaterialSymbolsSunnyRounded from "~icons/material-symbols/sunny-rounded";
import MaterialSymbolsDarkModeRounded from "~icons/material-symbols/dark-mode-rounded";
import MaterialSymbolsMenuRounded from "~icons/material-symbols/menu-rounded";
import TablerCircleChevronRight from "~icons/tabler/circle-chevron-right";

function header() {
	console.log("[fn] header called");

	return (
		<div className="_header-wrapper fixed flex justify-center w-full z-50">
			<div className="_header backdrop-blur-lg bg-l-bg-dark bg-opacity-50 dark:bg-d-bg-dark dark:bg-opacity-50 dark:drop-shadow-2xl drop-shadow-2xl flex h-18 items-center justify-between lg:pl-20 lg:pr-20 lg:w-screen md:p-10 md:pl-15 md:pr-15 md:rounded-b-3xl mt-0 p-5 rounded-b-xl w-screen xl:w-11/12">
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
		tap: {
			boxShadow: "inset 0px 2px 48px rgba(0,0,0,0.4)",
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

	let enClass = localStorage.getItem("lang") === "en" ? "" : "hidden";
	let vnClass = localStorage.getItem("lang") === "vn" ? "" : "hidden";

	return (
		<ScrollLink to="greeting" className="md:-translate-y-2" smooth={true} spy={true}>
			<motion.div
				className="_logo bg-l-bg-dark dark:bg-d-bg-dark dark:shadow-d-bg-dark md:p-6 md:mt-2 p-4 md:rounded-3xl rounded-2xl shadow-l-bg-dark"
				initial="rest"
				whileHover="hover"
				whileTap="tap"
				variants={logoContainerMotion}
			>
				<motion.div className="flex items-center" variants={logoMotion}>
					<h1 className="_logo-icon -translate-y-0.5 dark:text-white font-black font-display md:text-5xl sm:mr-6 sm:ml-2 mr-4 text-3xl text-l-black">
						D
					</h1>
					<h1 className="_logo-text -translate-y-0.5 dark:text-white font-display md:text-3xl text-l-black text-xl sm:mr-2">
						<span lang="en" className={enClass}>
							Duc Dao
						</span>
						<span lang="vn" className={vnClass}>
							Minh Đức
						</span>
					</h1>
				</motion.div>
			</motion.div>
		</ScrollLink>
	);
}

function navLink(textEN: string, textVN: string, link: string) {
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
	const sl_activeClasses = `active bg:drop-shadow-[0_8px_16px_rgba(98,114,164,1)] drop-shadow-[0_8px_16px_rgba(0,0,0,0.1)] font-bold md:text-3xl text-xl`;

	let enClass = localStorage.getItem("lang") === "en" ? "" : "hidden";
	let vnClass = localStorage.getItem("lang") === "vn" ? "" : "hidden";

	return (
		<motion.li className={li_classes} initial="rest" whileHover="hover">
			<motion.div variants={textMotion}>
				<ScrollLink to={link} activeClass={sl_activeClasses} smooth={true} spy={true} hashSpy={true}>
					<span lang="en" className={enClass}>
						{textEN}
					</span>
					<span lang="vn" className={vnClass}>
						{textVN}
					</span>
					<div className="flex justify-center">
						<motion.hr className="border-l-black dark:border-d-white mt-3 opacity-50" variants={hrMotion} />
					</div>
				</ScrollLink>
			</motion.div>
		</motion.li>
	);
}

// language + theme switcher
function settingCombo(type: string) {
	return (
		<div className="flex-col flex items-center justify-center">
			{/* button for language */}
			<motion.button
				className={
					"_langBtn" +
					type +
					" bg-l-bg-dark dark:bg-d-bg dark:text-d-white font-bold font-monospace h-10 my-2 rounded-lg sm:px-4 sm:py-2 sm:rounded-xl sm:text-base sm:w-14 text-center text-l-black text-xs w-8"
				}
				type="button"
				name="languageSwitcher"
				initial={{ boxShadow: "inset 0px 2px 4px rgba(0,0,0,0.4)" }}
				whileHover={{ boxShadow: "inset 0px 2px 8px rgba(0,0,0,0.4)" }}
				whileTap={{ boxShadow: "inset 0px 2px 12px rgba(0,0,0,0.4)" }}
			>
				EN
			</motion.button>

			{/* button for theme */}
			<motion.button
				className={
					"_themeBtn" +
					type +
					" bg-l-bg-dark dark:bg-d-bg dark:text-d-white font-bold font-monospace h-10 my-2 rounded-lg sm:px-4 sm:py-2 sm:rounded-xl sm:text-base sm:w-14 text-center text-l-black text-xs w-8"
				}
				type="button"
				name="themeSwitcher"
				initial={{ boxShadow: "inset 0px 2px 4px rgba(0,0,0,0.4)" }}
				whileHover={{ boxShadow: "inset 0px 2px 8px rgba(0,0,0,0.4)" }}
				whileTap={{ boxShadow: "inset 0px 2px 12px rgba(0,0,0,0.4)" }}
			>
				<MaterialSymbolsSunnyRounded className={"_lightThemeIcon" + type + " m-auto relative"} />
				<MaterialSymbolsDarkModeRounded className={"_darkThemeIcon" + type + " m-auto relative hidden"} />
			</motion.button>
		</div>
	);
}

function headerNavbar() {
	console.log("[fn] headerNavbar called");

	const [opacity, setOpacity] = useState(1);

	return (
		<div>
			<nav>
				<ul className="_navbar dark:text-white flex-row hidden md:items-center md:justify-end md:space-x-8 md:space-y-0 sm:flex space-x-4 space-y-2">
					<div className="dark:text-white flex flex-col justify-around lg:space-x-8 md:flex-row md:items-center md:justify-between md:translate-y-0 sm:text-center text-l-black translate-y-2">
						{navLink("Projects", "Dự án", "projects")}
						{navLink("Contact", "Liên hệ", "contact")}
					</div>
					{settingCombo("")}
				</ul>

				<motion.div animate={{ x: 145 * Math.abs(opacity) }}>
					<motion.ul className="_navbarSm dark:text-white flex flex-row md:items-center sm:hidden sm:text-center z-1">
						<motion.div
							className="_navbarSmIcon relative cursor-pointer right-12 scale-[3] top-[8.5rem]"
							onClick={() => {
								setOpacity(Math.abs(opacity - 1));
								document.querySelector("._navbarSmIcon")?.children[0].classList.toggle("hidden");
								document.querySelector("._navbarSmIcon")?.children[1].classList.toggle("hidden");
							}}
						>
							<MaterialSymbolsMenuRounded />
							<TablerCircleChevronRight className="hidden bg-l-bg-dark dark:bg-d-bg-dark rounded-[50%]" />
						</motion.div>
						<div className="dark:text-white flex flex-col justify-around mr-4 sm:hidden text-l-black text-right translate-y-2">
							{navLink("Projects", "Dự án", "projects")}
							{navLink("Contact", "Liên hệ", "contact")}
						</div>
						{settingCombo("Sm")}
					</motion.ul>
				</motion.div>
			</nav>
		</div>
	);
}

export default header;
