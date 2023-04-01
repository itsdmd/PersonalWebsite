import { useState } from "react";
import * as Scroll from "react-scroll";
import { motion } from "framer-motion";

const ScrollLink = Scroll.Link;

import MaterialSymbolsSunnyRounded from "~icons/material-symbols/sunny-rounded";
import MaterialSymbolsDarkModeRounded from "~icons/material-symbols/dark-mode-rounded";
import MaterialSymbolsMenuRounded from "~icons/material-symbols/menu-rounded";
import MaterialSymbolsCloseRounded from "~icons/material-symbols/close-rounded";

function header() {
	console.log("[fn] header called");

	return (
		<div className="_header-wrapper fixed flex justify-center w-full z-50">
			<div className="_header backdrop-blur-lg bg-l-bg-dark bg-opacity-50 dark:bg-d-bg-dark dark:bg-opacity-50 dark:drop-shadow-2xl drop-shadow-2xl flex sm:h-fit h-28 items-center justify-between lg:pl-20 lg:pr-20 lg:w-screen md:p-10 md:pl-15 md:pr-15 md:rounded-b-3xl mt-0 p-5 rounded-b-xl w-screen xl:w-11/12">
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
		<ScrollLink to="greeting" className="hover:cursor-pointer md:-translate-y-2" smooth={true} spy={true}>
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

	let enClass = localStorage.getItem("lang") === "en" ? "" : "hidden";
	let vnClass = localStorage.getItem("lang") === "vn" ? "" : "hidden";

	return (
		<motion.li className={"_navbar-" + textEN.toLowerCase() + " hover:cursor-pointer font-display sm:w-40 text-2xl"} initial="rest" whileHover="hover">
			<motion.div variants={textMotion}>
				<ScrollLink
					to={link}
					activeClass="0,0,0.1)] font-bold text-3xl,1)] drop-shadow-[0_8px_16px_rgba(0,114,164,active bg:drop-shadow-[0_8px_16px_rgba(98"
					smooth={true}
					spy={true}
					hashSpy={true}
				>
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
	const btnClasses = `bg-l-bg-dark dark:bg-d-bg dark:text-d-white flex-row font-bold font-monospace h-10 items-center justify-center rounded-lg sm:flex sm:my-2 sm:px-4 sm:py-2 sm:rounded-xl sm:text-base sm:w-14 text-center text-l-black text-base w-24`;

	return (
		<div className="flex items-center justify-center sm:flex-col sm:space-x-0 space-x-8">
			{/* button for language */}
			<motion.button
				className={"_langBtn" + type + " " + btnClasses}
				type="button"
				name="languageSwitcher"
				aria-label="Change language"
				initial={{ boxShadow: "inset 0px 2px 4px rgba(0,0,0,0.4)" }}
				whileHover={{ boxShadow: "inset 0px 2px 8px rgba(0,0,0,0.4)" }}
				whileTap={{ boxShadow: "inset 0px 2px 12px rgba(0,0,0,0.4)" }}
			>
				EN
			</motion.button>

			{/* button for theme */}
			<motion.button
				className={"_themeBtn" + type + " " + btnClasses}
				type="button"
				name="themeSwitcher"
				aria-label="Change theme"
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
				{/* Desktop */}
				<div className="_navbar dark:text-white flex-row hidden md:items-center md:justify-end md:space-x-8 md:space-y-0 sm:flex space-x-4 space-y-2">
					<ul className="dark:text-white flex flex-col justify-around lg:space-x-8 md:flex-row md:items-center md:justify-between md:translate-y-0 sm:text-center text-l-black translate-y-2">
						{navLink("Projects", "Dự án", "projects")}
						{navLink("Contact", "Liên hệ", "contact")}
					</ul>
					{settingCombo("")}
				</div>

				{/* Mobile */}
				<motion.div className="_navbarSm dark:text-white md:items-center sm:hidden sm:text-center">
					<motion.div
						className="_navbarSmIcon absolute cursor-pointer right-12 scale-[3] top-[2.75rem] z-20"
						onClick={() => {
							setOpacity(Math.abs(opacity - 1));
							document.querySelector("._navbarSmIcon")?.children[0].classList.toggle("hidden");
							document.querySelector("._navbarSmIcon")?.children[1].classList.toggle("hidden");
						}}
					>
						<MaterialSymbolsMenuRounded />
						<MaterialSymbolsCloseRounded className="hidden" />
					</motion.div>
					<motion.div
						className="absolute backdrop-blur-lg bg-l-bg-dark bg-opacity-50 dark:bg-d-bg-dark dark:bg-opacity-50 flex items-center justify-center max-h-26 right-0 rounded-b-xl -top-60 w-full z-10"
						animate={{
							y: 340 * Math.abs(opacity - 1), // 112px = 7rem = h-28
							opacity: Math.abs(opacity - 1),
						}}
						transition={{
							ease: "backInOut",
						}}
					>
						<ul className="dark:text-white justify-around p-8 sm:hidden text-center text-l-black space-y-8">
							{navLink("Projects", "Dự án", "projects")}
							{navLink("Contact", "Liên hệ", "contact")}
							{settingCombo("Sm")}
						</ul>
					</motion.div>
				</motion.div>
			</nav>
		</div>
	);
}

export default header;
