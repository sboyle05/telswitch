/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        '22': '9vh',
      },
      maxHeight: {
        '(custom-lg-value)': '22rem', // or whatever value you choose
        '(custom-xl-value)': '26rem', // or whatever value you choose
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
