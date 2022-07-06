/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#273f58",
        donedark: "#273f5800",
        donedarkborder: "#bfbfbf8c",
        darkborder: "#bfbfbf",
        modalprovider: "#000000a6",
      },
    },
  },
  plugins: [],
};
