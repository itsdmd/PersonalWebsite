import header from "./components/header";
import greetingCard from "./components/greeting-card";

function Home() {
	return (
		<div className="Home">
			<div className="bg-gray-dark">
				{header()}
				{greetingCard()}

				<div className="h-screen"></div>
				<div className="h-screen"></div>
				<div className="h-screen"></div>
				<div className="h-screen"></div>
			</div>
		</div>
	);
}

export default Home;
