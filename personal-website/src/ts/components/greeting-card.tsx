import { motion } from "framer-motion";

import IcRoundWavingHand from "~icons/ic/round-waving-hand";

function greetingCard() {
	return (
		<div className="_greeting-card-wrapper flex justify-center relative">
			<motion.div
				className="_greeting-card-shadow absolute dark:bg-d-bg bg-gray-300 blur-xl drop-shadow-2xl flex h-40 items-center justify-center max-w-[66rem] md:h-96 md:mt-[22rem] mt-64 rounded-3xl sm:h-60 w-11/12"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.5, duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
			></motion.div>
			<motion.div
				className="_greeting-card dark:bg-d-bg bg-l-bg drop-shadow-2xl flex h-40 items-center justify-center max-w-5xl md:h-96 md:mt-80 mt-60 rounded-3xl sm:h-60 w-11/12"
				initial={{ y: "2.5rem" }}
				animate={{ y: 0 }}
				transition={{ duration: 0.75 }}
			>
				<div className="translate-y-4">
					<motion.h1
						className="_greeting-card-text font-bold font-monospace md:text-7xl dark:shadow-d-bg-light shadow-gray-200 sm:text-5xl text-4xl text-center text-shadow-lg dark:text-white text-l-black"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.2, duration: 0.5 }}
					>
						Xin chào!{" "}
						<IcRoundWavingHand className="dark:drop-shadow-[0_8px_16px_rgba(98,114,164,1)] float-right inline-block translate-x-8 dark:text-white text-l-orange" />
					</motion.h1>
					<hr className="border-none m-5" />
				</div>
			</motion.div>
		</div>
	);
}

export default greetingCard;
