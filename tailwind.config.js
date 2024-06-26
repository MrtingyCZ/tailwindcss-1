/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
    sans: ['Roboto', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', "Segoe UI", "Arial", "sans-serif"],
  },
    colors: {
      'marsh-green': '#7A9D8C','black': '#000000', 'pink':'#f5e9f3', 'dark-pink':'#b0adc3'
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
    },
    extend: {
    margin: {
      '20%': '10%','0':'0px'
    },
      flex: {
        '1 2': '1 2 0%','2 1': '2 1 0%'
      }
    },
  },
  plugins: [],
}