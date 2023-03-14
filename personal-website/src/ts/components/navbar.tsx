import { Routes, Route, Link } from "react-router-dom";

function navbar() {
	return (
		<div>
			<nav id="navbar">
				<ul className="flex-col hidden md:flex md:flex-row md:items-center md:justify-end md:space-x-8 md:space-y-0 space-y-4 text-white">
					<li className="font-bold font-display text-2xl">
						<Link to="/">Home</Link>
					</li>
					<li className="font-bold font-display text-2xl">
						<Link to="/about">About</Link>
					</li>
					<li className="font-bold font-display text-2xl">
						<Link to="/projects">Projects</Link>
					</li>
					<li className="font-bold font-display text-2xl">
						<Link to="/contact">Contact</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default navbar;
