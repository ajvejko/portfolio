/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: "'Roboto Mono', monospace",
      },
      colors: {
        bgCustom: "#0F1011",
        textMainCustom: "#c9d8e2",
      },
    },
  },
  plugins: [],
};
