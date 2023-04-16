import { ReactElement } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { motion } from "framer-motion";

import animatedPage from "../components/animated-page";
import pageTitle from "../components/page-title";

import SkillIconsJavascript from "~icons/skill-icons/javascript";

function projectBlock(imgUrl: string, titleEn: string, titleVn: string, descriptionEn: string, descriptionVn: string, icons: ReactElement[], repoUrl: string) {
	let enClass = localStorage.getItem("lang") === "en" ? "" : "hidden";
	let vnClass = localStorage.getItem("lang") === "vn" ? "" : "hidden";

	return (
		<motion.div
			className="bg-l-bg-dark dark:bg-d-bg-dark dark:text-d-white drop-shadow-xl flex h-64 hover:cursor-pointer items-center lg:text-3xl md:text-2xl overflow-hidden rounded-xl sm:text-xl text-l-black text-lg xl:text-4xl"
			initial="rest"
		>
			<div className="w-[300px]">
				<LazyLoadImage src={imgUrl} alt={titleEn} placeholderSrc={"/src/assets/img/lazy/grey.png"} effect="blur" />
			</div>
			<div className="mx-12 my-10 self-start w-fit">
				<div className="title font-bold">
					<span lang="en" className={enClass}>
						{titleEn}
					</span>
					<span lang="vn" className={vnClass}>
						{titleEn}
					</span>
				</div>
			</div>
		</motion.div>
	);
}

function Projects() {
	return (
		<div className="flex justify-center w-full">
			<div className="flex flex-col justify-center md:w-5/6 w-11/12">
				{animatedPage("projects", [pageTitle("Projects", "Dự án")])}

				<div className="m-auto md:w-11/12 w-full">
					{projectBlock(
						"https://github.com/itsdmd/VietnameseNewsAPI/blob/main/logo.png?raw=true",
						"Vietnamese News API",
						"Vietnamese News API",
						"",
						"",
						[<SkillIconsJavascript />],
						""
					)}
				</div>
			</div>
		</div>
	);
}

export default Projects;
