import { MdWavingHand } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

function greetingCard() {
	return (
		<div className="flex justify-center" id="greeting-card-wrapper">
			<div
				className="bg-gray drop-shadow-2xl flex h-60 items-center justify-center max-w-5xl md:h-96 mt-40 rounded-3xl sm:h-80 w-11/12"
				id="greeting-card"
			>
				<div className="translate-y-4">
					<h1 className="font-bold font-monospace md:text-7xl shadow-gray-light sm:text-5xl text-4xl text-center text-shadow-lg text-white">
						Xin chào! <MdWavingHand className="drop-shadow-[0_8px_16px_rgba(98,114,164,1)] float-right inline-block translate-x-8" />
					</h1>
					<hr className="border-none m-5" />
					{/* <h2 className="italic text-center text-white text-xl">
						<a href="https://github.com/itsdmd">
							<button type="button" className="bg-gray-dark font-bold font-monospace not-italic p-3 rounded-md">
								<FaGithub className="inline-block -translate-y-0.5" /> itsdmd
							</button>
						</a>
					</h2> */}
				</div>
			</div>
		</div>
	);
}

export default greetingCard;
