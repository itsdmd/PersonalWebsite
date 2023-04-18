import { ReactElement } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { motion } from "framer-motion";

import animatedPage from "../components/animated-page";
import pageTitle from "../components/page-title";

import MdiCodeGreaterThan from "~icons/mdi/code-greater-than";
import MdiGithub from "~icons/mdi/github";
import SkillIconsCss from "~icons/skill-icons/css";
import SkillIconsExpressjsDark from "~icons/skill-icons/expressjs-dark";
import SkillIconsHtml from "~icons/skill-icons/html";
import SkillIconsJavascript from "~icons/skill-icons/javascript";
import SkillIconsMongodb from "~icons/skill-icons/mongodb";
import SkillIconsPythonDark from "~icons/skill-icons/python-dark";

function liveDemoBtn(liveDemoUrl: string) {
	if (liveDemoUrl) {
		return (
			<motion.a
				href={liveDemoUrl}
				target="_blank"
				className="bg-l-green dark:bg-d-green dark:text-l-black flex flex-col gap-1 items-center justify-start md:flex-row md:gap-4 mt-4 px-4 py-2 rounded-xl text-d-white"
				initial={{ y: 0 }}
				whileHover={{ y: -5 }}
			>
				<span className="lg:text-3xl md:text-2xl text-xl">
					<MdiCodeGreaterThan />
				</span>
				<span className="lg:text-xl md:text-lg text-base">Demo</span>
			</motion.a>
		);
	} else return <motion.a></motion.a>;
}

function projectBlock(
	imgUrl: string,
	titleEn: string,
	titleVn: string,
	descriptionEn: string,
	descriptionVn: string,
	icons: ReactElement[],
	liveDemoUrl: string,
	repoUrl: string
) {
	let enClass = localStorage.getItem("lang") === "en" ? "" : "hidden";
	let vnClass = localStorage.getItem("lang") === "vn" ? "" : "hidden";

	return (
		<div className="bg-l-bg-dark dark:bg-d-bg-dark dark:text-d-white drop-shadow-xl flex flex-col h-fit items-center justify-start md:flex-row my-8 overflow-hidden rounded-xl text-l-black w-full">
			<div className="flex h-[150px] items-center justify-center md:h-full md:w-[300px] overflow-hidden">
				<LazyLoadImage
					src={imgUrl}
					alt={titleEn}
					placeholderSrc={"/src/assets/img/lazy/grey.png"}
					effect="blur"
					className="h-[350px] object-cover w-full"
				/>
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
					<div className="flex flex-row gap-4 justify-end lg:flex-row md:flex-col md:text-left text-center">
						{liveDemoBtn(liveDemoUrl)}
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
						"",
						"https://github.com/itsdmd/VietnameseNewsAPI"
					)}

					{projectBlock(
						"/src/assets/img/logo_prj_nikonclone.png",
						"Nikon Homepage Clone",
						"Clone Trang chủ Nikon",
						"Copy of Nikon's (pre-2023) homepage. No framework used.",
						"Bản sao của trang chủ Nikon (trước năm 2023). Không sử dụng framework.",
						[<SkillIconsHtml />, <SkillIconsCss />, <SkillIconsJavascript />],
						"https://itsdmd.github.io/nikon-clone",
						"https://github.com/itsdmd/nikon-clone"
					)}
				</div>
			</div>
		</div>
	);
}

export default Projects;
