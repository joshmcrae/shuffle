/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './src/components/**/*.vue'
  ],
  theme: {
    extend: {
        fontFamily: {
          sans: ['Inter']
        }
    },
  },
  plugins: [],
}
