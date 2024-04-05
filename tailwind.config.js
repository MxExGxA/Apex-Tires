/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        light: "0 0 1px rgba(255,255,255,1)",
      },
      colors: {
        "main-red": "#a4161a",
        "main-white": "#f5f3f4",
        "main-dark": "#2b353b",
      },
    },

    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      wallpoet: ["Wallpoet", "sans-serif"],
    },
  },
  plugins: [],
};
