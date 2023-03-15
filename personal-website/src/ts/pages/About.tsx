import animatedPage from "../components/animated-page";
import pageTitle from "../components/page-title";

function About() {
	console.log("[fn] About called");

	return (
		<div>
			{animatedPage("About", [pageTitle("About")])}

			<div className="h-screen"></div>
			<div className="h-screen"></div>
			<div className="h-screen"></div>
		</div>
	);
}

export default About;
