export let currentLang = "";
export let currentTheme = "";

waitForElm("#langBtn").then((elm) => {
	loadData();
	
	document.querySelector("#langBtn").textContent = currentLang.toUpperCase();
	document.querySelector("html").setAttribute("lang", currentLang);
	switch (currentLang) {
		case "vn": {
			document.querySelectorAll("[lang='en']").forEach((elm) => {
				elm.classList.add("hidden");
			});
			break;
		}

		default: {
			document.querySelectorAll("[lang='vn']").forEach((elm) => {
				elm.classList.add("hidden");
			});
			break;
		}
	}

	elm.addEventListener("click", () => {
		currentLang = currentLang === "en" ? "vn" : "en";
		console.log("language changed to " + currentLang);
		document.querySelector("html").setAttribute("lang", currentLang);

		elm.textContent = currentLang.toUpperCase();

		document.querySelectorAll("[lang]").forEach((elm) => {
			if (elm.tagName !== "HTML") {
				elm.classList.toggle("hidden");
			}
		});

		saveData();
	});
});

waitForElm("#themeBtn").then((elm) => {
	loadData();
	
	elm.addEventListener("click", () => {
		console.log("toggle language");
		currentTheme = currentTheme === "light" ? "dark" : "light";
		switch (currentTheme) {
			case "light": {
				document.querySelector("#lightThemeIcon").classList.remove("hidden");
				document.querySelector("#darkThemeIcon").classList.add("hidden");
				break;
			}

			case "dark": {
				document.querySelector("#lightThemeIcon").classList.add("hidden");
				document.querySelector("#darkThemeIcon").classList.remove("hidden");
				break;
			}

			default: {
				console.error("Invalid theme");
				break;
			}
		}

		saveData();

		updateHtmlAndBody();
	});
});

// https://stackoverflow.com/a/61511955
function waitForElm(selector) {
	return new Promise((resolve) => {
		if (document.querySelector(selector)) {
			return resolve(document.querySelector(selector));
		}

		const observer = new MutationObserver((mutations) => {
			if (document.querySelector(selector)) {
				resolve(document.querySelector(selector));
				observer.disconnect();
			}
		});

		observer.observe(document.body, {
			childList: true,
			subtree: true,
		});
	});
}

function saveData() {
	localStorage.setItem("lang", currentLang);
	localStorage.setItem("theme", currentTheme);
}

function loadData() {
	currentLang = localStorage.getItem("lang") || "en";
	currentTheme = localStorage.getItem("theme") || "light";
}

function updateHtmlAndBody() {
	const html = document.querySelector("html");
	const body = document.querySelector("body");

	if (currentTheme === "light") {
		html.classList.remove("dark");
		body.classList.remove("dark:bg-d-black");
	} else {
		html.classList.add("dark");
		body.classList.add("dark:bg-d-black");
	}
}
