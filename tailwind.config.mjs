/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				principal: "hsla(0, 0%, 100%, 1)",
				secundario: "hsla(0, 0%, 67%, 1)",
				boton: "hsla(338, 71%, 60%, 1)",
				botonhover: "hsla(338, 71%, 41%, 1)",
				background: "hsla(231, 13%, 19%, 1)"
			},
			fontFamily: {
				poppins: ["Poppins", "serif"],
				merriweather: ["Merriweather", "serif"],
			},
			animation: {
				"fade-in-up": "fade-in-up 1s ease-in-out"
				
			},
			keyframes: {
				"fade-in-up": {
					"0%": {
						opacity: "0",
						transform: "translateY(20px)"
					},
					"100%": {
						opacity: "1",
						transform: "translateY(0)"
					}
				}
			}
		},
	},
	plugins: [],
}
