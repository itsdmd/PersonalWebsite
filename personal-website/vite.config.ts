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
		ViteMinifyPlugin({}),
	],
	server: {
		port: parseInt(process.env.PORT) || 3000,
	}
})
