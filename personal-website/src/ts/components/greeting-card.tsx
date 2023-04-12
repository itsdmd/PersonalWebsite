import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const greetingCardPortraitImg = () => (
	<motion.div
		className="lg:translate-y-[8.5rem] md:translate-y-[7rem] sm:translate-y-[5rem] translate-y-[3rem] lg:scale-100 xl:scale-110 md:scale-95 scale-90"
		// initial={{ opacity: 0 }}
		// animate={{ opacity: 1 }}
		// transition={{ delay: 0.5, duration: 0.5 }}
	>
		<LazyLoadImage src="/src/assets/img/self-portrait.webp" alt="Portrait of Minh Duc Dao" effect="blur" visibleByDefault={true} />
	</motion.div>
);

function greetingCard() {
	return (
		<div className="_greeting-card-wrapper flex justify-center relative">
			<motion.div
				className="_greeting-card-shadow absolute bg-gray-300 blur-xl dark:bg-d-bg drop-shadow-2xl flex h-32 items-center justify-center lg:h-80 max-w-[82rem] md:h-64 md:mt-[21rem] md:rounded-3xl sm:mt-[17rem] mt-[13rem] rounded-xl sm:h-52 w-11/12 xl:h-96"
				// initial={{ opacity: 0 }}
				// animate={{ opacity: 1 }}
				// transition={{ delay: 0.5, duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
			></motion.div>
			<motion.div
				className="_greeting-card bg-l-bg dark:bg-d-bg drop-shadow-2xl flex h-32 items-center justify-start lg:h-80 max-w-7xl md:h-64 md:mt-80 md:px-4 md:rounded-3xl sm:mt-[16rem] mt-[12rem] rounded-xl sm:h-52 sm:px-2 w-11/12 xl:h-96"
				// initial={{ y: "2.5rem" }}
				// animate={{ y: 0 }}
				// transition={{ duration: 0.75 }}
			>
				<div className="_greeting-card-portrait-wrapper basis-2/5 flex h-full items-end justify-cent lg:ml-12 md:ml-6 ml-2 sm:ml-4">
					{greetingCardPortraitImg()}
				</div>

				<div className="_greeting-card-text basis-3/5 flex flex-col font-bold font-display lg:ml-12 md:ml-6 ml-2 translate-y-4">
					<motion.h1>
						<motion.div
							className="_greeting-card-text-info lg:mt-8 mt-2 sm:mt-4"
							// initial={{ opacity: 0 }}
							// animate={{ opacity: 1 }}
							// transition={{ delay: 0.5, duration: 0.5 }}
						>
							<div className="_greeting-card-text-info-iam dark:shadow-d-bg-light dark:text-gray-300 lg:text-2xl md:text-lg shadow-gray-200 sm:text-sm text-gray-500 text-shadow-lg text-xs">
								<span lang="vn">Mình là</span>
								<span lang="en">I am</span>
							</div>
							<div className="_greeting-card-text-info-name dark:shadow-d-bg-light dark:text-l-bg-light lg:text-5xl md:text-4xl shadow-gray-300 sm:text-3xl text-l-black text-shadow-lg text-xl xl:text-6xl">
								<span lang="vn">Đào Minh Đức</span>
								<span lang="en">Duc Minh Dao</span>
							</div>
							<div className="_greeting-card-text-info-specialty dark:shadow-d-bg-light dark:text-gray-300 italic lg:mt-3 lg:text-3xl md:text-xl mt-[0.1rem] shadow-gray-200 sm:mt-2 sm:text-lg text-base text-gray-500 text-shadow-lg">
								<span lang="vn">Sinh viên CNTT</span>
								<span lang="en">Computer Science Student</span>
							</div>
						</motion.div>
					</motion.h1>
					<hr className="border-none m-5" />
				</div>
			</motion.div>
		</div>
	);
}

export default greetingCard;
