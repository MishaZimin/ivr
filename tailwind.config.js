/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
  plugins: [require("tailwindcss-animated")],
  theme: {
    extend: {
      keyframes: {
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "10%, 30%, 50%, 70%, 90%": { transform: "translateX(-7px)" },
          "20%, 40%, 60%, 80%": { transform: "translateX(7px)" },
        },
        slidedown: {
          "0%": { transform: "translateY(0)", opacity: "0.5" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        shake: "shake 0.7s ease-in",
        slidedown: "slidedown 0.2s ease-out forwards",
      },
      lineHeight: {
        "extra-relaxed": "1",
        "super-relaxed": "2",
      },
      fontFamily: {
        monserrat: "Montserrat",
        circeb: ["Circe-ExtraBold"],
        circe: ["Circe-Regular"],
      },
      // animation: {
      //   defolt:
      //     "animate-fade-up animate-once animate-duration-1000 animate-ease-in-out",
      // },
      // keyframes: {
      //   defolt:
      //     "animate-fade-up animate-once animate-duration-1000 animate-ease-in-out",
      // },
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
        orange: "#FFD8CA",
        greyy: "#F4F4F4",
        darkgreyy: "#D9D9D9",
        orange2: "#FFA183",
        lightred2: "#fcedeb",
        lightgray: "#E5E5E5",
      },
      spacing: {
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
      },
    },
  },
};
