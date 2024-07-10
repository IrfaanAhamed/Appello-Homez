/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkPrimary: "#062C30",
        darkSecondary: "#05595B",
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
    },
  },
  plugins: [],
};
