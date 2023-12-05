/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      height: {
        '22': '9vh',
      },
      maxHeight: {
        '(custom-lg-value)': '22rem',
        '(custom-xl-value)': '26rem',
      },
      colors: {
        brown: {
          DEFAULT: '#a17a74',
        },
        burgundy:{
          DEFAULT: '#800020',
        },
        silverish:{
          DEFAULT: '#A0A0A0',
        },
        gold:{
          DEFAULT: '#D9B751',
        },
        brass:{
          DEFAULT: '#B5A642',
        },
        blackish:{
          DEFAULT: '#252525',
        },
        redish:{
          DEFAULT: '#C1272D'
        },
        blue:{
          DEFAULT: '#003151'
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [ require('@tailwindcss/aspect-ratio'),
],
};
