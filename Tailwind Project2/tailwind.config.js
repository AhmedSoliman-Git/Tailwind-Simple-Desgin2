/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
const rotateY = plugin(function({addUtilities}){
  addUtilities ({
    '.rotate-y-180':{
      transform:'rotateY(180deg)'
    },
    '.-rotate-y-180':{
      transform:'rotateY(-180deg)'
    }
  })})





module.exports = {
  darkMode: 'selector',
  content: ["./public/**/*.{html,js}"],
    theme: {
    extend: {
      fontFamily: {
        'mf':["Nunito", "sans-serif"]
      },

      spacing: {
        '111': '50vh',
        "big" : "800px",
        "big2" : "500px",
        'fs' : '300px',
        "big3":'1200px',
        "imgSp":"48%",
        "Himg" : '40vh'
      },
      screens: {
        'sm': '640px',
      },
    },
  },
  plugins: [rotateY],
}

