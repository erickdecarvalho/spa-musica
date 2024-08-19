/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        'custom-red': '#EE1C25',
        'custom-black': '#000000',
      },
      fontFamily: {
        'bebas': ['Bebas Neue', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
