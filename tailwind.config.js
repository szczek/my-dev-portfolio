
const defaultTheme = require('tailwindcss/defaultTheme')


/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {},
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui'],
        'serif': ['ui-serif', 'Georgia'],
        'mono': ['ui-monospace', 'SFMono-Regular'],
        'header': ['"Bodoni Moda"'],
        'body': ['Inter'],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'black': '#0f172a',
        'gray': '#727579',
      },
      screens: {
        'xxxs': '375px',
        'xxs': '390px',
        'xs': '425px',
        ...defaultTheme.screens,
      },
    },
    plugins: [],
  }