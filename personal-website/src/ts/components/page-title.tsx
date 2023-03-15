import { motion } from "framer-motion";

function pageTitle(title: string) {
	console.log("[fn] pageTitle called for " + title);

	return (
		<div className="flex justify-center w-full" id="page-title">
			<div className="flex flex-col items-center w-5/6">
				<motion.h1
					className="font-display pt-60 text-center font-bold md:text-7xl shadow-gray-light text-6xl text-shadow-lg text-white"
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					{title}
				</motion.h1>
				<motion.hr
					className="border-2 border-white mb-40 mt-20 opacity-50 rounded-3xl w-5/6"
					initial={{ width: 0 }}
					animate={{ width: "100%" }}
					transition={{ duration: 0.8 }}
				/>
			</div>
		</div>
	);
}

export default pageTitle;
