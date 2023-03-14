import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import animatePageTransition from "./components/animate-page-transition";

// components
import header from "./components/header";

function App() {
	return (
		<div className="bg-gray-dark">
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
