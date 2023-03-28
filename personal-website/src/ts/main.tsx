import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import animatePageTransition from "./components/page-router";
import header from "./components/header";
import { attachEL } from "./components/page-settings";

// set default language and theme if localStorage is empty
if (localStorage.getItem("lang") === null) {
	console.log("localStorage is empty, setting default language to English");
	localStorage.setItem("lang", "en");
}
if (localStorage.getItem("theme") === null) {
	console.log("localStorage is empty, setting default theme to light");
	localStorage.setItem("theme", "light");
}

let isAttached: boolean = false;
function App() {
	console.log("[fn] App called");

	useEffect(() => {
		if (isAttached) return;

		isAttached = true;
		console.log("[fn] App useEffect called");
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
