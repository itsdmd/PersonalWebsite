import greetingCard from "../components/greeting-card";
import page from "../components/page";

function Home() {
	console.log("[fn] Home called");

	return (
		<div>
			{page("Home", { element: [greetingCard()] })}

			<div className="h-screen"></div>
			<div className="h-screen"></div>
			<div className="h-screen"></div>
		</div>
	);
}

export default Home;
