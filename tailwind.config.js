module.exports = {
  purge: [
    './public/**/*.html',
    './src/**/*.vue',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primary: '#f2b35e',
        white: '#fff',
        black: '#000',
        gray: '#e5e5e5',
      },
      fontFamily:{
        sans:["Roboto Slab","sans-serif"]
      }
    },
  },
  variants: {
    extend: {
      cursor:['hover'],
      border:['hover','focus']
    },
  },
  plugins: [],
}
