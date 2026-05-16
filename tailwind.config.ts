import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          sage: "#E5E0D0",
          olive: "#6B705C",
          burgundy: "#6A0D2F",
          charcoal: "#333333",
          parchment: "#F4F1EA",
          primary: "var(--color-brand-primary)",
          secondary: "var(--color-brand-secondary)",
        },
      },
      fontFamily: {
        display: ["var(--font-sf-pro)", "sans-serif"],
        sfpro: ["var(--font-sf-pro)", "sans-serif"],
        sans: ["var(--font-montserrat)", "sans-serif"],
        arabic: ["var(--font-ibm-plex-arabic)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
