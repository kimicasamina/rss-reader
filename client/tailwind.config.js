/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "#00000000",
      primary: "#ff5454",
      secondary: "#333333",
      tertiary: "#fafafa",
      black: "#000000",
      white: "#ffffff",
      gray: {
        80: "#333333",
        50: "#7e7e7e",
        20: "#c7c7c7",
        5: "#ececec",
      },
    },
    screens: {
      mobile: "365px",
      tablet: "768px",
      desktop: "1440px",
    },
    // screens: {
    //   sm: "640px",
    //   md: "768px",
    //   lg: "12804px",
    //   xl: "1440px",
    // },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      inter: ["Inter", "sans-serif"],
      rubik: ["Rubik", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
