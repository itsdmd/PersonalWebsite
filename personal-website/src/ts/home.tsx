import { MdWavingHand } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

function Home() {
	return (
		<div className="Home">
			<div className="bg-gray-dark">
				{/* <div className="bg-gradient-to-b fixed flex from-gray justify-center w-full z-50" id="header-wrapper"> */}
				<div className="fixed flex justify-center w-full z-50" id="header-wrapper">
					<div
						className="backdrop-blur-sm bg-gray bg-opacity-50 flex h-18 items-center justify-between lg:pl-20 lg:pr-20 md:pl-15 md:pr-15 md:rounded-b-3xl md:w-11/12 mt-0 p-10 rounded-b-xl w-screen drop-shadow-2xl"
						id="header"
					>
						<div className="flex items-center" id="logo">
							<h1 className="font-black font-display mr-8 text-5xl text-white" id="logo-icon">
								D
							</h1>
							<h1 className="-translate-y-0.5 font-display text-3xl text-white" id="logo-text">
								itsdmd
							</h1>
						</div>
						<div id="navbar">
							<ul className="flex-col hidden md:flex md:flex-row md:items-center md:justify-end md:space-x-8 md:space-y-0 space-y-4 text-white">
								<li className="font-bold font-display text-2xl">
									<a href="#about">About</a>
								</li>
								<li className="font-bold font-display text-2xl">
									<a href="#projects">Projects</a>
								</li>
								<li className="font-bold font-display text-2xl">
									<a href="#contact">Contact</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="flex justify-center" id="greeting-card-wrapper">
					<div
						className="bg-gray drop-shadow-2xl flex md:h-96 sm:h-80 items-center justify-center max-w-5xl mt-40 rounded-3xl w-11/12"
						id="greeting-card"
					>
						<div className="translate-y-4">
							<h1 className="font-bold font-monospace shadow-gray-light md:text-7xl sm:text-6xl text-center text-shadow-lg text-white">
								Xin chào! <MdWavingHand className="drop-shadow-[0_8px_16px_rgba(98,114,164,1)] float-right inline-block translate-x-8" />
							</h1>
							<hr className="border-none m-5" />
							<h2 className="italic text-center text-white text-xl">
								<a href="https://github.com/itsdmd">
									<button type="button" className="bg-gray-dark font-bold font-monospace not-italic p-3 rounded-md">
										<FaGithub className="inline-block -translate-y-0.5" /> itsdmd
									</button>
								</a>
							</h2>
						</div>
					</div>
				</div>
				<div className="h-screen"></div>
				<div className="h-screen"></div>
				<div className="h-screen"></div>
				<div className="h-screen"></div>
			</div>
		</div>
	);
}

export default Home;
