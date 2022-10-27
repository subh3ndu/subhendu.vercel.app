module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // main color for light background
        light_bg: "#F7FFF7",
        light_main: "#0267C1",
        light_text: "#000000",

        // main color for dark background
        dark_bg: "#0D1B1E",
        dark_main: "#4F9D69",
        dark_text: "#ffffff",
      },
      boxShadow: {
        custom: "inset 0 0 0 0 #0267C1",
        custom2: "inset 100px 0 0 0 #0267C1",

        custom_dark: "inset 0 0 0 0 #4F9D69",
        custom_dark2: "inset 100px 0 0 0 #4F9D69",
      },
    },
  },

  variants: {
    typography: ["dark"],
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
}
