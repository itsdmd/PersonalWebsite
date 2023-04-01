import animatedPage from "../components/animated-page";
import pageTitle from "../components/page-title";

function Projects() {
	return (
		<div>
			{animatedPage("projects", [pageTitle("Projects", "Dự án")])}

			<div className="h-screen"></div>
			<div className="h-screen"></div>
			<div className="h-screen"></div>
		</div>
	);
}

export default Projects;
