const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: ['./src/**/*.{ts,tsx}', './src/**/*.stories.{ts,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      screens: {
        'touch-device': { raw: '(hover: none)' },
        'touch-no-animation': { raw: '(prefers-reduced-motion)' }
      },
      colors: {
        dark: '#161c24'
      },
      backgroundImage: {},
      boxShadow: {},
      translate: {},
      animation: {},
      keyframes: {}
    }
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
