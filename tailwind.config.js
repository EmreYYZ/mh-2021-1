const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ["Gugi", "ui-sans-serif", "system-ui", "Segoe UI", "Roboto"],
      body: ["Quicksand", "ui-sans-serif", "system-ui", "Segoe UI", "Roboto"],
    },
    extend: {
      colors: {
        gray: colors.gray,
        emerald: colors.emerald,
        scarlet: {
          50: "#fff4f2",
          100: "#ffeae6",
          200: "#fecabf",
          300: "#fdaa99",
          400: "#fc6b4d",
          500: "#fa2b00",
          600: "#e12700",
          700: "#bc2000",
          800: "#961a00",
          900: "#7b1500",
        },
        black: {
          50: "#f5f5f5",
          100: "#ebebeb",
          200: "#cecece",
          300: "#b0b0b0",
          400: "#757575",
          500: "#3a3a3a",
          600: "#343434",
          700: "#2c2c2c",
          800: "#232323",
          900: "#1c1c1c",
        },
        malachite: {
          50: "#f5fcf6",
          100: "#ecfaec",
          200: "#cff2d1",
          300: "#b3e9b5",
          400: "#79d97d",
          500: "#40c945",
          600: "#3ab53e",
          700: "#309734",
          800: "#267929",
          900: "#1f6222",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
