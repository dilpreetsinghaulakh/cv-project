/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        gruppo: ["Gruppo", "sans-serif"],
        exo: ["Exo Variable", "sans-serif"],
      },
    },
  },
  plugins: [],
};
