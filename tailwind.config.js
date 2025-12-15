/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hvac-blue': '#0056b3', // A trusty blue
        'hvac-red': '#e63946',  // For emergency/heating accents
      }
    },
  },
  plugins: [],
}