/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/App.css", "./src/index.css", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mdMedium: "600px",
        mdExpanded: "840px",
        mdLarge: "1200px",
        mdXLarge: "1600px",
      },
    },
  },
  plugins: [],
};
