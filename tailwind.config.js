/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.tsx", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        estedad: ["EstedadRegular"],
        estedadLight: ["EstedadLight"],
        estedadMedium: ["EstedadMedium"],
        estedadBold: ["EstedadBold"],
        estedadBlack: ["EstedadBlack"],
      },
    },
  },
  plugins: [],
};
