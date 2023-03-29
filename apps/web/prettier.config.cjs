/** @type {import('prettier').Config} */
module.exports = {
  arrowParens: 'avoid',
  bracketSameLine: true,
  bracketSpacing: true,
  endOfLine: 'lf',
  jsxSingleQuote: true,
  semi: true,
  trailingComma: 'none',
  tabWidth: 2,
  singleQuote: true,
  useTabs: false,
  plugins: [require('prettier-plugin-tailwindcss')]
};
