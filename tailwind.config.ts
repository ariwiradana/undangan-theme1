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
        dark: "#2F2519",
        primary: "#C7B7A3",
      },
      fontFamily: {
        "dream-avenue": ["DreamAvenue", "serif"],
        mangolaine: ["Mangolaine", "serif"],
        alegreya: ["Alegreya SC", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        "hero-image": "url('/images/image (2).jpg')",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), "prettier-plugin-tailwindcss"],
};
export default config;
