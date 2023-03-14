import page from "../components/page";
import pageTitle from "../components/page-title";

function Contact() {
	console.log("[fn] Contact called");

	return (
		<div>
			{page("Contact", { element: [pageTitle("Contact")] })}

			<div className="h-screen"></div>
			<div className="h-screen"></div>
			<div className="h-screen"></div>
		</div>
	);
}

export default Contact;
