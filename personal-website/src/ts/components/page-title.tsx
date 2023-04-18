import { motion } from "framer-motion";

function pageTitle(titleEN: string, titleVN: string) {
	// console.log("[fn] pageTitle called for " + titleEN);

	const enClass = localStorage.getItem("lang") === "en" ? "" : "hidden";
	const vnClass = localStorage.getItem("lang") === "vn" ? "" : "hidden";

	return (
		<div className="_page-title flex-col justify-center w-full">
			<motion.h1
				className="dark:text-d-white font-bold md:mt-72 md:text-7xl mt-48 shadow-gray-light sm:mt-64 text-5xl text-center text-l-black text-shadow-lg"
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
			>
				<span lang="en" className={enClass}>
					{titleEN}
				</span>
				<span lang="vn" className={vnClass}>
					{titleVN}
				</span>
			</motion.h1>
			<motion.hr
				className="border-2 border-b-l-black dark:border-d-white md:my-20 my-10 opacity-50 rounded-3xl"
				initial={{ width: 0 }}
				animate={{ width: "100%" }}
				transition={{ duration: 0.8 }}
			/>
		</div>
	);
}

export default pageTitle;
