import type { Config } from 'tailwindcss';
import {nextui} from "@nextui-org/react";

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      Accent: {
        'light': '#0252CD',
        'dark': '#428DFF',
        'secondary': "#FFBE62",
      },
      black: {
        200: '#151E2C',
        300: '#192333',
        400: '#778295'
      },
      white: {
        900: '#FFFFFF',
        800: '#F3F8FF',
        500: '#6F74A7'
      },
      
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
export default config
