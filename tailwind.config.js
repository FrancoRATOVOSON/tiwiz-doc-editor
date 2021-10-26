const tailwindNesting = require('tailwindcss/nesting')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        display: ['Lora'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [tailwindNesting],
}
