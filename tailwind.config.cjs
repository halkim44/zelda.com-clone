/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    colors: {
      white: "#fff",
      black: "#000",
    },
    extend: {
      padding: {},
      margin: {
        "-2px": "-2px",
      },
    },
  },
  plugins: [],
};
