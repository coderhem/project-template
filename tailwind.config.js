/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: "#253E48",
        },
        'secondary': {
          DEFAULT: "#1C2427",
          100: "#1F617B",
        },
        'ss-blue': {
          DEFAULT: "#6DC4DB ",

        },
        'danger': {
          DEFAULT: '#dc3545',
        },
      },
      screens: {
        '2xl': '1312px'
      },
      fontFamily: {
        'base': ["Atten New"],
        'lead': ["ItalianDidotW90-Normal"],
        'icomoon': ['icomoon'],
      },
    },
  },
  plugins: [],
}