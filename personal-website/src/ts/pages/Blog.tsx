import animatedPage from "../components/animated-page";
import pageTitle from "../components/page-title";

function Blog() {
	console.log("[fn] Blog called");

	return (
		<div>
			{animatedPage("Blog", [pageTitle("Blog")])}

			<div className="h-screen"></div>
			<div className="h-screen"></div>
			<div className="h-screen"></div>
		</div>
	);
}

export default Blog;
