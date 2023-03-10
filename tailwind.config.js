/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBeige: "#E7EAEF",
        turq: "#217074",
        lightTurq: "#257e83",
      },
    },
  },
  plugins: [],
};
