/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        forest_bg: "url('./src/assets/forest_bg.svg')",
        mountains_bg: "url('./src/assets/mountains_bg.svg')",
      },
      textColor: {
        afternoon_orange: "#fc9a6e",
        primary_color: "#ac3f5e",
      },
      backgroundColor: {
        primary_color: "#ac3f5e",
        secondary_color: "#32223b",
        primary_color_hover: "#972a49",
      },
    },
  },
  plugins: [],
};
