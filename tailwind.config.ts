import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000D50", // navy
        accent: "#F26A52", // coral
        light: {
          lavender: "#919CFD", // lavender
          stone: "#868484", // stone
        },
        background: "#F5F5F5", // porcelain
      },
      screens: {
        sm: "480px", // mobiles
        md: "768px", // tablets
        lg: "976px", // laptops
        xl: "1440px", // desktops
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
export default config;
