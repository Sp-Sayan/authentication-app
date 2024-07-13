/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xsm': { 'min': '300px', 'max': '380px' },
      'sm': { 'min': '380px', 'max': '767px' },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': { 'min': '768px', 'max': '1023px' },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': { 'min': '1024px' },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

    },
    extend: {},
  },
  plugins: [],
}

