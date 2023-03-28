export let currentLang: string = "";
export let currentTheme: string = "";

export function attachEL() {
	console.log("[fn] updatePage called");

	loadData();

	/* #region  */
	const html = document.querySelector("html");
	const body = document.querySelector("body");

	if (html === null) {
		console.error("html is null");
		return;
	}

	if (body === null) {
		console.error("body is null");
		return;
	}
	/* #endregion */

	/* ------------- langBtn ------------ */
	/* #region  */
	const langBtn = document.querySelector("._langBtn");

	// Update html lang attribute
	html.setAttribute("lang", currentLang);

	if (langBtn === null) {
		console.error("langBtn is null");
		return;
	}

	// Update button content
	langBtn.textContent = currentLang.toUpperCase();

	// Hide all elements of the opposite language
	document.querySelectorAll("[lang='" + prevLang(currentLang) + "']").forEach((elm) => {
		elm.classList.add("hidden");
	});

	// Add event listener for button
	langBtn.addEventListener("click", (e) => {
		langBtn.setAttribute("hasListener", "true");

		currentLang = nextLang(currentLang);
		console.log("[nm] language changed to " + currentLang);

		html.setAttribute("lang", currentLang);

		langBtn.textContent = currentLang.toUpperCase();

		document.querySelectorAll("[lang]").forEach((elm) => {
			if (elm.tagName !== "HTML") {
				elm.classList.toggle("hidden");
			}
		});

		saveData();
	});
	/* #endregion */

	/* ------------- themeBtn ------------ */
	/* #region  */
	const lightThemeIcon = document.querySelector("._lightThemeIcon");
	const darkThemeIcon = document.querySelector("._darkThemeIcon");
	const themeBtn = document.querySelector("._themeBtn");

	if (lightThemeIcon === null || darkThemeIcon === null) {
		console.error("themeIcon is null");
		return;
	}

	if (themeBtn === null) {
		console.error("themeBtn is null");
		return;
	}

	themeBtn.addEventListener("click", (e) => {
		themeBtn.setAttribute("hasListener", "true");

		currentTheme = currentTheme === "light" ? "dark" : "light";
		console.log("changed theme to " + currentTheme);

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

		if (currentTheme === "light") {
			html.classList.remove("dark");
			body.classList.remove("dark:bg-d-black");
		} else {
			html.classList.add("dark");
			body.classList.add("dark:bg-d-black");
		}
	});
	/* #endregion */

	/* ------------ langBtnSM ----------- */
	/* #region  */
	const langBtnSM = document.querySelector("._langBtnSM");

	if (langBtnSM === null) {
		console.error("langBtnSM is null");
		return;
	}

	// Update button content
	langBtnSM.textContent = currentLang.toUpperCase();

	// Add event listener for button
	langBtnSM.addEventListener("click", (e) => {
		langBtnSM.setAttribute("hasListener", "true");

		currentLang = nextLang(currentLang);
		console.log("[sm] language changed to " + currentLang);

		html.setAttribute("lang", currentLang);

		langBtnSM.textContent = currentLang.toUpperCase();

		document.querySelectorAll("[lang]").forEach((elm) => {
			if (elm.tagName !== "HTML") {
				elm.classList.toggle("hidden");
			}
		});

		saveData();
	});
	/* #endregion */

	/* ----------- themeBtnSM ----------- */
	/* #region  */
	const themeBtnSM = document.querySelector("._themeBtnSM");

	const lightThemeIconSM = document.querySelector("._lightThemeIconSM");
	const darkThemeIconSM = document.querySelector("._darkThemeIconSM");

	if (lightThemeIconSM === null || darkThemeIconSM === null) {
		console.error("themeIconSM is null");
		return;
	}

	if (themeBtnSM === null) {
		console.error("themeBtnSM is null");
		return;
	}

	themeBtnSM.addEventListener("click", (e) => {
		themeBtnSM.setAttribute("hasListener", "true");

		currentTheme = currentTheme === "light" ? "dark" : "light";
		console.log("changed to theme " + currentTheme);

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

		if (currentTheme === "light") {
			html.classList.remove("dark");
			body.classList.remove("dark:bg-d-black");
		} else {
			html.classList.add("dark");
			body.classList.add("dark:bg-d-black");
		}
	});
	/* #endregion */
}

function saveData() {
	localStorage.setItem("lang", currentLang);
	localStorage.setItem("theme", currentTheme);
}

function loadData() {
	currentLang = localStorage.getItem("lang") || "en";
	currentTheme = localStorage.getItem("theme") || "light";
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
