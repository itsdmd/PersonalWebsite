import pageTitle from "../components/page-title";

function About() {
	console.log("[fn] About called");

	return (
		<div className="About">
			{pageTitle("About")}

			<div className="h-screen"></div>
			<div className="h-screen"></div>
			<div className="h-screen"></div>
		</div>
	);
}

export default About;
