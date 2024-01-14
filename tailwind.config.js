/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#835400',
          200: '#EBE1D9',
          300: '#FFDDB5'
        }
      },
      width: {
        logo: 'clamp(8rem, -1.7895rem + 50.5263vw, 14rem);'
      },
      backgroundImage: {
        product: "url('./src/assets/images/bed.png')"
      }
    }
  },
  plugins: []
}
