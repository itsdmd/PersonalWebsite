/** @type {import("tailwindcss").Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
	content: ["./src/index.html", "./src/ts/*.{ts,tsx}", "./src/ts/**/*.{ts,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			borderRadius: {
				none: "0",
				sm: ".125rem",
				DEFAULT: ".25rem",
				lg: ".5rem",
				full: "9999px",
			},
			colors: {
				// https://github.com/AshGrowem/Dracula.min/blob/master/colors-used-table.md
				/* ------------ dark mode ----------- */
				"d-bg-page": "#21222c",
				"d-bg-dark": "#282a36",
				"d-bg": "#44475a",
				"d-bg-light": "#6272a4",
				"d-blue": "#8be9fd",
				"d-purple": "#bd93f9",
				"d-pink": "#ff79c6",
				"d-orange": "#ffb86c",
				"d-green": "#50fa7b",
				"d-yellow": "#f1fa8c",
				"d-red": "#ff5555",
				"d-white": "#f8f8f2",

				/* ------------ light mode ----------- */
				"l-bg-page": "#dfdfda",
				"l-bg-dark": "#ecece6",
				"l-bg": "#f8f8f2",
				"l-bg-light": "#ffffff",
				"l-blue": "#007e90",
				"l-purple": "#855fbf",
				"l-pink": "#c13f8e",
				"l-orange": "#a0651b",
				"l-green": "#008504",
				"l-yellow": "#6c7908",
				"l-red": "#d82f39",
				"l-black": "#282a36",
			},
			fontFamily: {
				sans: ["Be Vietnam Pro", "sans-serif"],
				serif: ["Roboto Slab", "serif"],
				monospace: ["SourceCodePro", "monospace"],
				display: ["Montserrat", "sans-serif"],
			},
			screens: {
				sm: "480px",
				md: "768px",
				lg: "976px",
				xl: "1440px",
			},
			textShadow: {
				sm: "0 1px 2px var(--tw-shadow-color)",
				DEFAULT: "0 2px 4px var(--tw-shadow-color)",
				lg: "0 8px 16px var(--tw-shadow-color)",
			},
		},
	},
	plugins: [
		plugin(function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					"text-shadow": (value) => ({
						textShadow: value,
					}),
				},
				{ values: theme("textShadow") }
			);
		}),
	],
};
