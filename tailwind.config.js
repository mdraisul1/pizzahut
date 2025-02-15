/** @type {import('tailwindcss').Config} */
export default {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        link: "#E10914",
        primary: "#FFF3E1",
        secondary: "#FFE4E9",
        success: "#FFEDBA",
        accent: "#EAD6C0",
      },
      container: {
        center: true,
        padding: "2rem",
      },
      fontFamily: {
        epilogue: ["Epilogue", "sans-serif"],
        fredoka: ["Fredoka", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
      },
    },
  },
  plugins: [],
}
