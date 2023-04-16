import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";

import animatePageTransition from "./components/page-router";
import header from "./components/header";
import { attachEL, updatePage } from "./components/page-settings";

let isAttached: boolean = false;
function App() {
	console.log("[fn] App called");

	// attach eventListeners for header's buttons on first render
	useEffect(() => {
		if (isAttached) return;

		isAttached = true;
		attachEL();
	}, []);

	// update page based on settings
	useEffect(() => {
		updatePage();
	});

	return (
		<div className="bg-l-bg-page dark:bg-d-bg-page">
			{header()}

			{animatePageTransition()}
		</div>
	);
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
