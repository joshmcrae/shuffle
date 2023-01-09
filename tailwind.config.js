/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './src/components/**/*.vue',
      './src/index.htm'
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
