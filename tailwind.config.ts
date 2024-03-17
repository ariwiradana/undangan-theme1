import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          100: "#f9f6f2",
          200: "#f3e9e4",
          300: "#C7B7A3",
          400: "#d9c1b9",
          500: "#c1a9a1",
          600: "#a99189",
          700: "#917971",
          800: "#796159",
          900: "#1A120B",
        },
      },
      fontFamily: {
        alegreya: ["Alegreya SC", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        "hero-image": "url('https://source.unsplash.com/7XqL_DVuBMw')",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), "prettier-plugin-tailwindcss"],
};
export default config;
