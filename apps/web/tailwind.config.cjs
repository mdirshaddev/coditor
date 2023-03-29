/** @type {import('tailwindcss').Config} */
export default {
  corePlugins: {
    preflight: false
  },
  important: '#__next',
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {}
  },
  plugins: []
};
