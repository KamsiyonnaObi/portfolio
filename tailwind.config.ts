import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "2xl": "1440px",
      },
      colors: {
        transparent: "transparent",
        Accent: {
          light: "#0252CD",
          dark: "#428DFF",
          secondary: "#FFBE62",
        },
        project: {
          one: "#416CEA",
          two: "#0BAB7C",
        },
        black: {
          200: "#151E2C",
          300: "#192333",
          400: "#778295",
        },
        white: {
          900: "#FFFFFF",
          800: "#F3F8FF",
          500: "#6F74A7",
        },
        backg: "#F3F8FF",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        Graphik: ["Graphik", "sans-serif"],
      },
      boxShadow: {
        serv: "0 1px 20px 0 rgba(224, 236, 255, 1)",
        "serv-dark": "0 1px 20px 0 rgba(31, 46, 72, 1)",
        "serv-img": "10px 10px 26px 0 rgba(2, 82, 205, 0.28)",
        "serv-hover": "32px 32px 71px 0 rgba(2, 82, 205, 0.28)",
        work: "-25px 47px 66px 0 rgba(0, 0, 0, 0.08)",
      },
      backgroundImage: {
        "footer-pattern": "url('../public/footer-images/contact-bg.png')",
        "footer-pattern-lg":
          "url('../public/footer-images/contact-bgpattern.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui(), require("@tailwindcss/forms")],
};
export default config;
