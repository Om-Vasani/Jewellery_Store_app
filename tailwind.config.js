/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        gold: "#B9925F",
        muted: "#6B7280",
        ivory: "#FFF9F2"
      },
      fontFamily: {
        serif: ['"Playfair Display"', "serif"],
        sans: ["Poppins", "ui-sans-serif", "system-ui"]
      }
    },
  },
  plugins: [],
  }
