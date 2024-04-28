/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
  plugins: [require("tailwindcss-animated")],
  theme: {
    extend: {
      fontFamily: {
        monserrat: "Montserrat",
        circe: ["Circe-Regular"],
      },
      animation: {
        defolt:
          "animate-fade-up animate-once animate-duration-1000 animate-ease-in-out",
      },
      keyframes: {
        defolt:
          "animate-fade-up animate-once animate-duration-1000 animate-ease-in-out",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        purple: "#3f3cbb",
        midnight: "#121063",
        metal: "#565584",
        tahiti: "#3ab7bf",
        silver: "#ecebff",

        bermuda: "#78dcca",
        redd: "#E04E39",
        starlite: "#F2EBE3",
        greyy: "#D9D9D9",
      },
    },
  },
};
