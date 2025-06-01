/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blaupunkt: {
          // Primary Blues
          primary: '#199BD3',
          'primary-dark': '#005A98',
          'primary-darker': '#00417F',
          
          // Secondary Blues
          secondary: '#5E90BC',
          'secondary-light': '#96B2D1',
          
          // Dark Theme
          dark: '#18161A',
          
          // Accent Colors
          'accent-red': '#CE071D',
          'accent-pink': '#D88196',
          
          // Neutral
          gray: '#909294',
          white: '#FFFFFF',
        }
      },
      fontFamily: {
        'myriad': ['Myriad Pro', 'sans-serif'],
      },
      fontWeight: {
        'light': 300,
        'regular': 400,
        'medium': 500,
        'semibold': 600,
        'bold': 700,
      }
    },
  },
  plugins: [],
}
