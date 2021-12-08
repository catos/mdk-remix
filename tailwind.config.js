const colors = require("tailwindcss/colors")

module.exports = {
  mode: "jit",
  purge: ["./app/**/*.{ts,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        ace: "#AACCEE",
        // primary: "#F36A3E",
        primary: colors.amber,
        // secondary: "#FFB30B",
        secondary: colors.orange,
      },
      height: {
        vh25: "25vh",
        vh33: "33vh",
        vh50: "50vh",
        vh75: "75vh",
      },
      // outline: {
      //   blue: "2px solid #0000ff",
      // },
      fontFamily: {
        sans: ["Roboto"],
      },
    },
  },
  variants: {},
  plugins: []
};