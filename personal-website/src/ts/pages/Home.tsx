import greetingCard from "../components/greeting-card";

function Home() {
	console.log("[fn] Home called");

	return (
		<div className="Home">
			{greetingCard()}
			<div className="h-screen"></div>
			<div className="h-screen"></div>
			<div className="h-screen"></div>
			<div className="h-screen"></div>
		</div>
	);
}

export default Home;