/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./**/*.html"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
      }
    },
    extend: {
      colors: {
        'primary': {
          DEFAULT: "#8D4DFF",
        },
        'gary': {
          DEFAULT: "#3D3C3C",
        },
        'purple': {
          DEFAULT: "#8936B3",
        },
        'danger': {
          DEFAULT: '#dc3545',
        },
      },
      screens: {
        '2xl': '1312px'
      },
      fontFamily: {
        'lead': ["Kanit"],
        'base': ["Lato"],
        'icomoon': ['icomoon'],
      },
    },
  },
  plugins: [],
}