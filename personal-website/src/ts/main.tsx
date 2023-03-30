import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import animatePageTransition from "./components/page-router";
import header from "./components/header";
import { attachEL, updatePage } from "./components/page-settings";

let isAttached: boolean = false;
function App() {
	console.log("[fn] App called");

	useEffect(() => {
		if (isAttached) return;

		isAttached = true;
		updatePage();
		attachEL();
	}, []);

	return (
		<div className="bg-l-bg-page dark:bg-d-bg-page">
			{header()}

			{animatePageTransition()}
		</div>
	);
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);
