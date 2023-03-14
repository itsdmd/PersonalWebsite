import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";

// components
import header from "./components/header";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<div className="bg-gray-dark">
				{header()}

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					{/* <Route path="/projects" element={<Projects />} />
				<Route path="/contact" element={<Contact />} /> */}
				</Routes>
			</div>
		</BrowserRouter>
	</React.StrictMode>
);
