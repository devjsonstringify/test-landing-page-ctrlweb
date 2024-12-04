/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Graphik', 'sans-serif']
    },
    extend: {
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        black: '900',
        super: '950'
      },
      colors: {
        primary: {
          DEFAULT: '#2091F9',
          50: '#E9F6FF',
          100: '#D5EDFF',
          200: '#ACE0FF',
          300: '#84D2FF',
          400: '#5BC5FF',
          500: '#2091F9',
          600: '#0C7AD8',
          700: '#0962B0',
          800: '#064A88',
          900: '#043260'
        },
        secondary: {
          DEFAULT: '#252B42',
          50: '#E9EAED',
          100: '#D3D5DB',
          200: '#A7ABB7',
          300: '#7B8193',
          400: '#4F576F',
          500: '#252B42',
          600: '#1E2335',
          700: '#171B28',
          800: '#10131B',
          900: '#090A0E'
        }
      }
    }
  },
  plugins: []
}
