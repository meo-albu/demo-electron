module.exports = {
  mode: 'jit',
  purge: ['./renderer/pages/**/*.{js,ts,jsx,tsx}', './renderer/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}