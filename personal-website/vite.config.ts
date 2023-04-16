import react from "@vitejs/plugin-react-swc"
import Icons from "unplugin-icons/vite"
import { defineConfig } from "vite"
import { ViteMinifyPlugin } from 'vite-plugin-minify'

import * as dotenv from "dotenv"
dotenv.config()

// https://vitejs.dev/config/
export default defineConfig({
  	plugins: [
		react(),
		Icons({
			autoInstall: true,
			compiler: "jsx",
			jsx: "react",
		}),
		ViteMinifyPlugin({
			"collapseBooleanAttributes": true,
			"collapseWhitespace": true,
			"conservativeCollapse": true,
			"minifyCSS": true,
			"minifyJS": true,
			"noNewlinesBeforeTagClose": true,
			"removeComments": true,
			"removeEmptyAttributes": true,
			"removeRedundantAttributes": true,
			"removeTagWhitespace": true,
			"sortAttributes": true,
			"sortClassName": true,
			"trimCustomFragments": true,
			"useShortDoctype": true,
		}),
	],
	server: {
		host: process.env.HOST || "localhost",
		port: parseInt(process.env.PORT) || 3000,
	}
})
