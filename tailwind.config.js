const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'sans': ['font-mono', ...defaultTheme.fontFamily.sans],
      },
      minHeight: {
        '670': '670px',
      },
      colors: {
        'ligth-color-text': '#ed3c57',
        'dark-color-text': '#4CD5AE',
        'bg-background-menu':'rgba(13, 13, 13, 0.842)'
      },
      screens: {
        'mobile': '460px',
        'tablet': '820px',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        wiggle2: {
          'from': { transform: 'translateY(30vh)' },
          'to': { transform: 'translateY(0)' },
        },
        blinker:{
          '50%': { opacity: '0' },
        }
      },
      animation: {
        'Left&rigth': 'wiggle 1s ease-in-out infinite',
        'scroll-top': 'wiggle2 1s linear 0s alternate',
        'blinkerType': 'blinker .8s linear infinite',
      }
    },
  },
  plugins: [],
}