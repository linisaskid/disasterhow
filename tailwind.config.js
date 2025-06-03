/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#f3f4f6',
          600: '#252525',
          700: '#161616',
          750: '#1a1a1d',
          800: '#0c0b0e',
          900: '#000000',
        },
        green: {
          500: '#22c55e',
        },
        red: {
          500: '#ef4444',
        },
      },
      fontFamily: {
        anorma: ['FH Anorma Test', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 