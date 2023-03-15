import greetingCard from "../components/greeting-card";
import animatedPage from "../components/animated-page";

function Home() {
	console.log("[fn] Home called");

	return (
		<div>
			{animatedPage("Home", [greetingCard()])}

			<div className="h-screen"></div>
			<div className="h-screen"></div>
			<div className="h-screen"></div>
		</div>
	);
}

export default Home;
