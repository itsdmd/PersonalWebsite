let currentLang: string = localStorage.getItem("lang") || "en";
let currentTheme: string = localStorage.getItem("theme") || "light";
saveData();

export function attachEL() {
	// console.log("[fn] attachEL called");

	/* #region  */
	const html = document.querySelector("html");
	const body = document.querySelector("body");
	const title = document.querySelector("title");
	const langBtn = document.querySelector("._langBtn");
	const langBtnSm = document.querySelector("._langBtnSm");
	const themeBtn = document.querySelector("._themeBtn");
	const themeBtnSm = document.querySelector("._themeBtnSm");
	const lightThemeIcon = document.querySelector("._lightThemeIcon");
	const darkThemeIcon = document.querySelector("._darkThemeIcon");
	const lightThemeIconSm = document.querySelector("._lightThemeIconSm");
	const darkThemeIconSm = document.querySelector("._darkThemeIconSm");

	if (html === null) {
		console.error("html is null");
		return;
	}

	if (body === null) {
		console.error("body is null");
		return;
	}

	if (title === null) {
		console.error("title is null");
		return;
	}

	if (langBtn === null) {
		console.error("langBtn is null");
		return;
	}

	if (langBtnSm === null) {
		console.error("langBtnSm is null");
		return;
	}

	if (themeBtn === null) {
		console.error("themeBtn is null");
		return;
	}

	if (lightThemeIcon === null || darkThemeIcon === null) {
		console.error("themeIcon is null");
		return;
	}

	if (themeBtnSm === null) {
		console.error("themeBtnSm is null");
		return;
	}

	if (lightThemeIconSm === null || darkThemeIconSm === null) {
		console.error("themeIconSm is null");
		return;
	}

	const allLangBtns: Element[] = [langBtn, langBtnSm];
	const allLightThemeIcons: Element[] = [lightThemeIcon, lightThemeIconSm];
	const allDarkThemeIcons: Element[] = [darkThemeIcon, darkThemeIconSm];
	/* #endregion */

	/* ------------- langBtn ------------ */
	langBtn.addEventListener("click", () => {
		currentLang = nextLang(currentLang);
		updateLang(html, allLangBtns);
	});

	/* ------------ langBtnSm ----------- */
	langBtnSm.addEventListener("click", () => {
		currentLang = nextLang(currentLang);
		updateLang(html, allLangBtns);
	});

	/* ------------- themeBtn ------------ */
	themeBtn.addEventListener("click", () => {
		currentTheme = currentTheme === "light" ? "dark" : "light";
		updateTheme(html, body, allLightThemeIcons, allDarkThemeIcons);
	});

	/* ----------- themeBtnSm ----------- */
	themeBtnSm.addEventListener("click", () => {
		currentTheme = currentTheme === "light" ? "dark" : "light";
		updateTheme(html, body, allLightThemeIcons, allDarkThemeIcons);
	});
}

export function updateLang(html: HTMLElement, allLangBtns: Element[]) {
	// console.log("[nm] language changed to " + currentLang);

	html.setAttribute("lang", currentLang);

	for (let i = 0; i < allLangBtns.length; i++) {
		allLangBtns[i].textContent = currentLang.toUpperCase();
	}

	document.querySelectorAll("[lang]").forEach((elm) => {
		if (elm.tagName === "HTML") return;

		if (elm.getAttribute("lang") !== currentLang) {
			elm.classList.add("hidden");
		} else {
			elm.classList.remove("hidden");
		}
	});

	saveData();
}

export function updateTheme(html: HTMLElement, body: HTMLElement, allLightThemeIcons: Element[], allDarkThemeIcons: Element[]) {
	// console.log("changed to theme " + currentTheme);

	switch (currentTheme) {
		case "light": {
			html.classList.remove("dark");
			body.classList.remove("dark:bg-d-black");

			for (let i = 0; i < allLightThemeIcons.length; i++) {
				allLightThemeIcons[i].classList.remove("hidden");
			}

			for (let i = 0; i < allDarkThemeIcons.length; i++) {
				allDarkThemeIcons[i].classList.add("hidden");
			}

			break;
		}

		case "dark": {
			html.classList.add("dark");
			body.classList.add("dark:bg-d-black");

			for (let i = 0; i < allLightThemeIcons.length; i++) {
				allLightThemeIcons[i].classList.add("hidden");
			}

			for (let i = 0; i < allDarkThemeIcons.length; i++) {
				allDarkThemeIcons[i].classList.remove("hidden");
			}

			break;
		}

		default: {
			console.error("Invalid theme");
			break;
		}
	}

	saveData();
}

export function updatePage() {
	loadData();

	/* #region  */
	const html = document.querySelector("html");
	const body = document.querySelector("body");
	const title = document.querySelector("title");
	const langBtn = document.querySelector("._langBtn");
	const langBtnSm = document.querySelector("._langBtnSm");
	const themeBtn = document.querySelector("._themeBtn");
	const themeBtnSm = document.querySelector("._themeBtnSm");
	const lightThemeIcon = document.querySelector("._lightThemeIcon");
	const darkThemeIcon = document.querySelector("._darkThemeIcon");
	const lightThemeIconSm = document.querySelector("._lightThemeIconSm");
	const darkThemeIconSm = document.querySelector("._darkThemeIconSm");

	if (html === null) {
		console.error("html is null");
		return;
	}

	if (body === null) {
		console.error("body is null");
		return;
	}

	if (title === null) {
		console.error("title is null");
		return;
	}

	if (langBtn === null) {
		console.error("langBtn is null");
		return;
	}

	if (langBtnSm === null) {
		console.error("langBtnSm is null");
		return;
	}

	if (themeBtn === null) {
		console.error("themeBtn is null");
		return;
	}

	if (lightThemeIcon === null || darkThemeIcon === null) {
		console.error("themeIcon is null");
		return;
	}

	if (themeBtnSm === null) {
		console.error("themeBtnSm is null");
		return;
	}

	if (lightThemeIconSm === null || darkThemeIconSm === null) {
		console.error("themeIconSm is null");
		return;
	}

	const allLangBtns: Element[] = [langBtn, langBtnSm];
	const allLightThemeIcons: Element[] = [lightThemeIcon, lightThemeIconSm];
	const allDarkThemeIcons: Element[] = [darkThemeIcon, darkThemeIconSm];
	/* #endregion */

	updateLang(html, allLangBtns);
	updateTheme(html, body, allLightThemeIcons, allDarkThemeIcons);
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
