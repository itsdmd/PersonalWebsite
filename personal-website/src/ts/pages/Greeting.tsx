import greetingCard from "../components/greeting-card";
import animatedPage from "../components/animated-page";

function Home() {
	return <div>{animatedPage("greeting", [greetingCard()])}</div>;
}

export default Home;
