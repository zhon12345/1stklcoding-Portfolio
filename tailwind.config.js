/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	darkMode: "class",
	theme: {
		colors: {
			text: "rgb(var(--text))",
			background: "rgb(var(--background))",
		},
		extend: {},
	},
	plugins: [],
};
