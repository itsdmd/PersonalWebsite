export let currentLang: string = "";
export let currentTheme: string = "";

waitForElm("#langBtn").then((elm: any) => {
	loadData();

	const html = document.querySelector("html");
	const langBtn = document.querySelector("#langBtn");

	if (html === null || langBtn === null) {
		console.error("html or langBtn is null");
		return;
	}

	// Update html lang attribute
	html.setAttribute("lang", currentLang);

	// Update button content
	langBtn.textContent = currentLang.toUpperCase();

	// Hide all elements of the opposite language
	document.querySelectorAll("[lang='" + prevLang(currentLang) + "']").forEach((elm) => {
		elm.classList.add("hidden");
	});

	// Add event listener for button
	elm.addEventListener("click", () => {
		currentLang = nextLang(currentLang);
		console.log("language changed to " + currentLang);

		html.setAttribute("lang", currentLang);

		elm.textContent = currentLang.toUpperCase();

		document.querySelectorAll("[lang]").forEach((elm) => {
			if (elm.tagName !== "HTML") {
				elm.classList.toggle("hidden");
			}
		});

		saveData();
	});
});

waitForElm("#themeBtn").then((elm: any) => {
	loadData();

	const html = document.querySelector("html");
	const lightThemeIcon = document.querySelector("#lightThemeIcon");
	const darkThemeIcon = document.querySelector("#darkThemeIcon");

	if (html === null || lightThemeIcon === null || darkThemeIcon === null) {
		console.error("html or lightIcon or darkIcon is null");
		return;
	}

	elm.addEventListener("click", () => {
		console.log("toggle language");
		currentTheme = currentTheme === "light" ? "dark" : "light";

		switch (currentTheme) {
			case "light": {
				lightThemeIcon.classList.remove("hidden");
				darkThemeIcon.classList.add("hidden");
				break;
			}

			case "dark": {
				lightThemeIcon.classList.add("hidden");
				darkThemeIcon.classList.remove("hidden");
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
function waitForElm(selector: string) {
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

	if (html === null || body === null) {
		console.error("html or body is null");
		return;
	}

	if (currentTheme === "light") {
		html.classList.remove("dark");
		body.classList.remove("dark:bg-d-black");
	} else {
		html.classList.add("dark");
		body.classList.add("dark:bg-d-black");
	}
}

const languages: string[] = ["en", "vn"];
function nextLang(currentLang: string): string {
	const index = languages.indexOf(currentLang);
	if (index === -1) {
		console.error("Invalid language");
		return "";
	}

	const newIndex = (index + 1) % languages.length;

	return languages[newIndex];
}

function prevLang(currentLang: string): string {
	const index = languages.indexOf(currentLang);
	if (index === -1) {
		console.error("Invalid language");
		return "";
	}

	const newIndex = (index - 1) % languages.length;

	return languages[newIndex];
}
