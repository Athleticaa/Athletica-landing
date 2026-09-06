/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0A0A0F',
        brand: {
          50: '#F4EEFF',
          100: '#E4D3FF',
          400: '#9D66FF',
          500: '#7B3FFF',
          600: '#5A0BFB',
          700: '#4908D4',
          800: '#3805A8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        cervino: ['Cervino', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
