import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import IcRoundWavingHand from "~icons/ic/round-waving-hand";

const greetingCardPortraitImg = () => (
	<motion.div className="translate-y-[-6.15rem] scale-110" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.5 }}>
		<LazyLoadImage src="/src/assets/img/self-portrait.png" alt="Portrait of Minh Duc Dao" effect="blur" />
	</motion.div>
);

function greetingCard() {
	return (
		<div className="_greeting-card-wrapper flex justify-center relative">
			<motion.div
				className="_greeting-card-shadow absolute bg-gray-300 blur-xl dark:bg-d-bg drop-shadow-2xl flex h-40 items-center justify-center max-w-[82rem] md:h-96 md:mt-[22rem] mt-64 rounded-3xl sm:h-60 w-11/12"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.5, duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
			></motion.div>
			<motion.div
				className="_greeting-card bg-l-bg dark:bg-d-bg drop-shadow-2xl flex h-40 items-center justify-start max-w-7xl md:h-96 md:mt-80 mt-60 rounded-3xl sm:h-60 w-11/12"
				initial={{ y: "2.5rem" }}
				animate={{ y: 0 }}
				transition={{ duration: 0.75 }}
			>
				<div className="_greeting-card-portrait-wrapper h-full ml-12">{greetingCardPortraitImg()}</div>

				<div className="_greeting-card-text flex flex-col font-bold font-display ml-12 translate-y-4">
					<motion.h2
						className="dark:shadow-d-bg-light dark:text-gray-300 shadow-gray-200 text-gray-500 text-shadow-lg"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.2, duration: 0.5 }}
					>
						<motion.div className="md:text-4xl sm:text-3xl text-xl">
							<span lang="vn">Xin chào!</span>
							<span lang="en">Hello!</span>
							<span>
								<IcRoundWavingHand className="dark:drop-shadow-[0_8px_8px_rgba(255,184,108,0.3)] dark:text-d-orange inline-block text-l-orange translate-x-8 -translate-y-2" />
							</span>
						</motion.div>
					</motion.h2>
					<motion.h1>
						&nbsp;
						<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.5 }}>
							<span className="dark:shadow-d-bg-light dark:text-gray-300 md:text-4xl shadow-gray-200 sm:text-3xl text-gray-500 text-shadow-lg text-xl">
								<span lang="vn">Mình là &nbsp;</span>
								<span lang="en">I am &nbsp;</span>
							</span>
							<span className="dark:shadow-d-bg-light dark:text-l-bg-light md:text-6xl shadow-gray-200 sm:text-5xl text-3xl text-l-black text-shadow-lg">
								<span lang="vn">Đào Minh Đức</span>
								<span lang="en">Duc Minh Dao</span>
							</span>
						</motion.div>
					</motion.h1>
					<hr className="border-none m-5" />
				</div>
			</motion.div>
		</div>
	);
}

export default greetingCard;
