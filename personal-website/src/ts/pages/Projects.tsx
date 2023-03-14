import pageTitle from "../components/page-title";

function Projects() {
	console.log("[fn] Projects called");

	return (
		<div className="Projects">
			{pageTitle("Projects")}

			<div className="h-screen"></div>
			<div className="h-screen"></div>
			<div className="h-screen"></div>
		</div>
	);
}

export default Projects;
