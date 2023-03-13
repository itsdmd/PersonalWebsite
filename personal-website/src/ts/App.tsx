import { MdWavingHand } from "react-icons/md";

function App() {
	return (
		<div className="Home">
			<div className="bg-gray-dark h-screen">
				<div className="flex justify-center">
					<div className="bg-gray drop-shadow-2xl flex h-96 items-center justify-center max-w-5xl mt-8 rounded-3xl w-11/12">
						<div>
							<h1 className="font-bold font-monospace shadow-gray-light text-7xl text-center text-shadow-lg text-white">
								Xin chào! <MdWavingHand className="drop-shadow-[0_8px_16px_rgba(98,114,164,1)] float-right inline-block translate-x-8" />
							</h1>
							<hr className="border-none m-5" />
							<h2 className="italic text-center text-white text-xl">
								Welcome to <span className="bg-gray-dark font-bold font-monospace not-italic p-2 rounded-md skew-x-12">itsdmd</span>'s personal
								website!
							</h2>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
