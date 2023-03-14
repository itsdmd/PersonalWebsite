function pageTitle(title: string) {
	return (
		<div className="flex justify-center w-full" id="page-title">
			<div className="flex flex-col items-center w-5/6">
				<h1 className="font-display pt-60 text-center font-bold md:text-7xl shadow-gray-light text-6xl text-shadow-lg text-white">{title}</h1>
				<hr className="border-2 border-white mb-40 mt-20 opacity-50 rounded-3xl w-5/6" />
			</div>
		</div>
	);
}

export default pageTitle;
