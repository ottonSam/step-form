import {colorsTheme} from "./src/styles/themeColors"

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: colorsTheme,
      boxShadow: {
        'custom-shadow': '0px 10px 40px 5px rgba(226, 236, 249, 0.50)',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      },
    },
  },
  plugins: [],
};