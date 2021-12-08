// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      padding: '1.5rem',
      center: true
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}