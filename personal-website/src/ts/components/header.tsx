function header() {
	return (
		<div className="fixed flex justify-center w-full z-50" id="header-wrapper">
			<div
				className="backdrop-blur-lg bg-gray-dark bg-opacity-75 brightness-150 drop-shadow-2xl flex h-18 items-center justify-between lg:pl-20 lg:pr-20 md:pl-15 md:pr-15 md:rounded-b-3xl md:w-11/12 mt-0 p-10 rounded-b-xl w-screen"
				id="header"
			>
				{headerLogo()}
				{headerNavbar({
					About: "#about",
					Projects: "#projects",
					Contact: "#contact",
				})}
			</div>
		</div>
	);
}

function headerLogo() {
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

// Input is a dictionary of key-value pairs, where the key is the text and the value is the link
function headerNavbar(links: { [key: string]: string }) {
	return (
		<div id="navbar">
			<ul className="flex-col hidden md:flex md:flex-row md:items-center md:justify-end md:space-x-8 md:space-y-0 space-y-4 text-white">
				{Object.entries(links).map(([text, link]) => (
					<li className="font-bold font-display text-2xl" key={link}>
						<a href={link}>{text}</a>
					</li>
				))}
			</ul>
		</div>
	);
}

export default header;
