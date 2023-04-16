import animatedPage from "../components/animated-page";
import pageTitle from "../components/page-title";

function Projects() {
	return (
		<div className="flex justify-center w-full">
			<div className="flex flex-col justify-center md:w-5/6 w-11/12">{animatedPage("projects", [pageTitle("Projects", "Dự án")])}</div>
		</div>
	);
}

export default Projects;
