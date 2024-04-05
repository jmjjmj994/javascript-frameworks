/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        primary: 'hsl(0, 0%, 95%)',
        secondary: 'hsl(0, 0%, 100%)',
        'primary-bg-clr': '	hsl(50, 87%, 66%)',
        'card-bg-clr': 'hsl(0, 0%, 87%)',
      },
      fontFamily: {
        headers: ['Roboto Mono', 'monospace'],
        body: ['Montserrat', 'sans-serif'],
        button: ['Montserrat', 'sans-serif'],
      },
      fontWeight: {
        regular: 400,
        bold: 700,
      },
    },
  },
  plugins: [],
};
