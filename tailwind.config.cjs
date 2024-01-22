/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');


module.exports = {
  content: ['./src/**/*.{html,svelte}', './node_modules/svelte-ux/**/*.{svelte,js}'],
  theme: {
    extend: {
      colors: {
        accent: colors.blue,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('svelte-ux/plugins/tailwind.cjs'),require('daisyui')],
};