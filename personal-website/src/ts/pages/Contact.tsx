import animatedPage from "../components/animated-page";
import pageTitle from "../components/page-title";

function Contact() {
	return (
		<div>
			{animatedPage("contact", [pageTitle("Contact", "Liên hệ")])}

			<div className="h-screen"></div>
			<div className="h-screen"></div>
			<div className="h-screen"></div>
		</div>
	);
}

export default Contact;
