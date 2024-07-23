/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enables dark mode class strategy
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkPrimary: "#1f1f1f",
        darkSecondary: "#1A3636",
        primary: "#FFDB00",
        secondary: "#FFBF00",
        Yellow: "#FCDC2A",
        lightYellow: "#F7F6BB",
        textColor: "#FFFFDD",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem", // Use DEFAULT instead of default
          sm: "3rem",
        },
      },
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      // Inter, sans-serif
    },
  },
  plugins: [],
};
