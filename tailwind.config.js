/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0D1821',
        secondary: '#607B7D',
        accent: '#DB504A',
        text: '#EAEAEA',
      },
    },
  },
  plugins: [],
};