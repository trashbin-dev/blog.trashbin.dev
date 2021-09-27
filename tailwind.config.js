module.exports = {
  mode: "jit",
  purge: ["./components/**/*.vue", "./pages/**/*.vue"],
  darkMode: "class",
  theme: {
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: [require("@tailwindcss/typography")]
};
