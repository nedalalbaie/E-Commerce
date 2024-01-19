/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#835400',
          200: '#EBE1D9',
          300: '#FFDDB5',
          400: 'rgb(122 78 0)', // Brown on hover
        },
        secondary: {
          100: "#004C6B",
          200: "rgb(0 67 94)" // Blue on hover
        }
      },
      width: {
        logo: 'clamp(8rem, -1.7895rem + 50.5263vw, 14rem);'
      },
      backgroundImage: {
        product: "url('./src/assets/images/bed.png')"
      },
      gridTemplateColumns: {
        productsCards: "repeat(auto-fit, minmax(300px, 1fr))"
      }
    }
  },
  plugins: []
}
