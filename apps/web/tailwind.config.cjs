const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: ['./src/**/*.{ts,tsx}', './src/**/*.stories.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {}
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('hocus', ['&:hover', '&:focus']);
    }),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ]
};

export default tailwindConfig;
