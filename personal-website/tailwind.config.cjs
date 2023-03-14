/** @type {import("tailwindcss").Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
	content: ["./src/index.html", "./src/ts/*.{ts,tsx}", "./src/ts/**/*.{ts,tsx}"],
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
				blue: "#8be9fd",
				purple: "#bd93f9",
				pink: "#ff79c6",
				orange: "#ffb86c",
				green: "#50fa7b",
				yellow: "#f1fa8c",
				"gray-dark": "#282a36",
				gray: "#44475a",
				"gray-light": "#6272a4",
				red: "#ff5555",
				white: "#f8f8f2",
			},
			fontFamily: {
				sans: ["Be Vietnam Pro", "sans-serif"],
				serif: ["Roboto Slab", "serif"],
				monospace: ["SauceCodePro", "monospace"],
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
