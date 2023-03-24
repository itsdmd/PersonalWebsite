import { motion } from "framer-motion";

function pageTitle(title: string) {
	console.log("[fn] pageTitle called for " + title);

	return (
		<div className="flex justify-center w-full" id="page-title">
			<div className="flex flex-col items-center w-5/6">
				<motion.h1
					className="dark:text-d-white font-bold font-display md:pt-80 md:text-7xl pt-60 shadow-gray-light text-5xl text-center text-l-black text-shadow-lg"
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					{title}
				</motion.h1>
				<motion.hr
					className="border-2 border-b-l-black dark:border-d-white mb-40 md:mt-20 mt-10 opacity-50 rounded-3xl w-5/6"
					initial={{ width: 0 }}
					animate={{ width: "100%" }}
					transition={{ duration: 0.8 }}
				/>
			</div>
		</div>
	);
}

export default pageTitle;
