import { motion } from "framer-motion";

import { MdWavingHand } from "react-icons/md";

function greetingCard() {
	return (
		<div className="_greeting-card-wrapper flex justify-center">
			<motion.div
				className="_greeting-card bg-gray drop-shadow-2xl flex h-60 items-center justify-center max-w-5xl md:h-96 mt-40 rounded-3xl sm:h-80 w-11/12"
				initial={{ y: "2.5rem" }}
				animate={{ y: 0 }}
				transition={{ duration: 0.75 }}
			>
				<div className="translate-y-4">
					<motion.h1
						className="font-bold font-monospace md:text-7xl shadow-gray-light sm:text-5xl text-4xl text-center text-shadow-lg text-white"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.2, duration: 0.5 }}
					>
						Xin chào! <MdWavingHand className="drop-shadow-[0_8px_16px_rgba(98,114,164,1)] float-right inline-block translate-x-8" />
					</motion.h1>
					<hr className="border-none m-5" />
				</div>
			</motion.div>
		</div>
	);
}

export default greetingCard;
