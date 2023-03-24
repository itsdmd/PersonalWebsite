const langBtn = document.querySelector("#langBtn");
const themeBtn = document.querySelector("#themeBtn");

let currentLang = "";
let currentTheme = "";

waitForElm("#langBtn").then((elm) => {
	elm.addEventListener("click", () => {
		console.log("[fn] toggleLang called");
		currentLang = currentLang === "EN" ? "VN" : "EN";
		elm.textContent = currentLang;

		saveData();
	});
});

waitForElm("#themeBtn").then((elm) => {
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
			};
		}
		

		saveData();
		
		updateTheme();
	});
});

loadData();
updateLang();
updateTheme();

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
	currentLang = localStorage.getItem("lang") || "EN";
	currentTheme = localStorage.getItem("theme") || "light";
}

function updateLang() {
	document.querySelector("#langBtn").textContent = currentLang;
}

function updateTheme() {
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
