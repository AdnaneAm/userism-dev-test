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
        gray:{
          DEFAULT:'#e5e5e5',
          dark:'#9b9b9b'
        }, 
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
