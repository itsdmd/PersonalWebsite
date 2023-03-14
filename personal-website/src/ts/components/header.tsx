import { Link } from "react-router-dom";

function header() {
	console.log("[fn] header called");

	return (
		<div className="fixed flex justify-center w-full z-50" id="header-wrapper">
			<div
				className="backdrop-blur-lg bg-gray bg-opacity-50 drop-shadow-2xl flex h-18 items-center justify-between lg:pl-20 lg:pr-20 md:pl-15 md:pr-15 md:rounded-b-3xl md:w-11/12 mt-0 p-10 rounded-b-xl w-screen"
				id="header"
			>
				{headerLogo()}
				{headerNavbar()}
			</div>
		</div>
	);
}

function headerLogo() {
	console.log("[fn] headerLogo called");

	return (
		<div className="flex items-center" id="logo">
			<h1 className="font-black font-display mr-8 text-5xl text-white" id="logo-icon">
				D
			</h1>
			<h1 className="-translate-y-0.5 font-display text-3xl text-white" id="logo-text">
				itsdmd
			</h1>
		</div>
	);
}

function headerNavbar() {
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

export default header;
