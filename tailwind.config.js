/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0D1282",
        secondary: "#0D8282",
        accent: "#3B3B3B"
      },
      fontFamily: {
        playFair: ['Playfair+Display', 'sans-serrif'],
        raleway: ['Raleway', 'sans-serrif']
      },
      backgroundImage: {
        'hero': "url('../public/hero.jpg')",
      }
    },
  },
  plugins: [],
}