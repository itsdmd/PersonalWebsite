import animatedPage from "../components/animated-page";
import pageTitle from "../components/page-title";

function Contact() {
	console.log("[fn] Contact called");

	return (
		<div>
			{animatedPage("Contact", [pageTitle("Contact")])}

			<div className="h-screen"></div>
			<div className="h-screen"></div>
			<div className="h-screen"></div>
		</div>
	);
}

export default Contact;
