import { MdWavingHand } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

function Home() {
	return (
		<div className="Home">
			<div className="bg-gray-dark h-screen">
				<div className="flex justify-center" id="header">
					<div className="flex justify-between items-center h-18 m-4 w-11/12">
						<div className="flex items-center">
							<h1 className="font-black font-display text-5xl text-white mr-8">D</h1>
							<h1 className="font-display text-3xl text-white -translate-y-0.5">itsdmd</h1>
						</div>
					</div>
				</div>
				<div className="flex justify-center" id="greeting-card">
					<div className="bg-gray drop-shadow-2xl flex h-96 items-center justify-center max-w-5xl mt-20 rounded-3xl w-11/12">
						<div className="translate-y-4">
							<h1 className="font-bold font-monospace shadow-gray-light text-7xl text-center text-shadow-lg text-white">
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
			</div>
		</div>
	);
}

export default Home;
