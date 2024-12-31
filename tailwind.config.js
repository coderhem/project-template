/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: "#283593",
          100: '#1d276b',
        },
        'secondary': {
          DEFAULT: "#283593",
          100 : '#1367c8',
        },
        'blue': {
          DEFAULT: "#6DC4DB ",
        },

        'orange': {
          DEFAULT: '#ffaa16',
        },

        'voilet': {
          DEFAULT: '#673BB7'
        },

        'red': {
          DEFAULT: '#ff3939',
        },

        'green': {
          DEFAULT: '#198754',
        },
        'grey': {
          DEFAULT: '#F3F3F3',
          100: '#888888',
          200 : '#f5f5f5',
        },
      },
      screens: {
        '2xl': '1312px'
      },
      fontFamily: {
        'base': ["Poppins"],
        'lead': ["Merriweather Sans"],
        'icomoon': ['icomoon'],
      },
    },
  },
  plugins: [],
}