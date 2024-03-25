/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
  plugins: [require("tailwindcss-animated")],
  theme: {
    extend: {
      fontFamily: {
        monserrat: "Montserrat",
        kanit: "Kanit",
      },
      animation: {
        defolt:
          "animate-fade-up animate-once animate-duration-1000 animate-ease-in-out",
      },
      keyframes: {
        defolt:
          "animate-fade-up animate-once animate-duration-1000 animate-ease-in-out",
      },
    },
  },
};
