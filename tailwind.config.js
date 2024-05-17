/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js,css}"],
  theme: {
    extend: {
      colors:{
        'ligth': '#FFFFFF',
        'primary': {
          50: '#E2E2D5',
          100: '#FFCB45',
          200: '#FFAC4B',
        },
        'secondary': {
          100: '#1D1D1D',
        }

      }
    },
  },
  plugins: [],
}