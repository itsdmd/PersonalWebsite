import { ReactElement } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { motion } from "framer-motion";

import animatedPage from "../components/animated-page";
import pageTitle from "../components/page-title";

import MdiGithub from "~icons/mdi/github";
import SkillIconsJavascript from "~icons/skill-icons/javascript";
import SkillIconsMongodb from "~icons/skill-icons/mongodb";
import SkillIconsExpressjsDark from "~icons/skill-icons/expressjs-dark";
import SkillIconsPythonDark from "~icons/skill-icons/python-dark";

function projectBlock(imgUrl: string, titleEn: string, titleVn: string, descriptionEn: string, descriptionVn: string, icons: ReactElement[], repoUrl: string) {
	let enClass = localStorage.getItem("lang") === "en" ? "" : "hidden";
	let vnClass = localStorage.getItem("lang") === "vn" ? "" : "hidden";

	return (
		<div className="bg-l-bg-dark dark:bg-d-bg-dark dark:text-d-white drop-shadow-xl flex flex-col h-fit items-center justify-start md:flex-row overflow-hidden rounded-xl text-l-black w-full">
			<div className="flex items-center justify-center max-h-[150px] max-w-0 md:h-full md:max-h-none md:w-300 min-w-0 overflow-hidden">
				<LazyLoadImage src={imgUrl} alt={titleEn} placeholderSrc={"/src/assets/img/lazy/grey.png"} effect="blur" />
			</div>
			<div className="grow md:px-12 md:py-10 px-6 py-5">
				<div className="_prj-title font-bold lg:text-3xl md:text-2xl sm:text-xl text-lg xl:text-4xl">
					<span lang="en" className={enClass}>
						{titleEn}
					</span>
					<span lang="vn" className={vnClass}>
						{titleVn}
					</span>
				</div>
				<div className="_prj-description lg:py-8 lg:text-2xl md:py-6 md:text-xl py-4 sm:text-lg text-base xl:text-3xl">
					<span lang="en" className={enClass}>
						{descriptionEn}
					</span>
					<span lang="vn" className={vnClass}>
						{descriptionVn}
					</span>
				</div>
				<div className="flex gap-8 items-center justify-between">
					<div className="flex flex-wrap gap-4 md:text-4xl mt-4 sm:text-3xl text-2xl">{icons}</div>
					<motion.a
						href={repoUrl}
						target="_blank"
						className="bg-l-black dark:bg-d-white dark:text-l-black flex flex-col gap-1 items-center justify-start md:flex-row md:gap-4 mt-4 px-4 py-2 rounded-xl text-d-white"
						initial={{ y: 0 }}
						whileHover={{ y: -5 }}
					>
						<span className="lg:text-3xl md:text-2xl text-xl">
							<MdiGithub />
						</span>
						<span className="lg:text-xl md:text-lg text-base">Repo</span>
					</motion.a>
				</div>
			</div>
		</div>
	);
}

function Projects() {
	return (
		<div className="flex justify-center w-full">
			<div className="flex flex-col justify-center md:w-5/6 w-11/12">
				{animatedPage("projects", [pageTitle("Projects", "Dự án")])}

				<div className="m-auto md:w-11/12 w-full">
					{projectBlock(
						"/src/assets/img/logo_prj_vnnewsapi.png",
						"Vietnamese News API",
						"Vietnamese News API",
						"Scrape, archive & analyze Vietnamese online news articles.",
						"Scrape, lưu trữ & phân tích các bài báo tiếng Việt trên mạng.",
						[<SkillIconsJavascript />, <SkillIconsExpressjsDark />, <SkillIconsMongodb />, <SkillIconsPythonDark />],
						"https://github.com/itsdmd/VietnameseNewsAPI"
					)}
				</div>
			</div>
		</div>
	);
}

export default Projects;
