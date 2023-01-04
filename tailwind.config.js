/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Redressed:  ['Redressed', "cursive"],
      },
      colors:{
        headingColor: '#041D49',
        'text-primary': '#1CA30D'
      },
      backgroundColor:{
         'background-primay' : '#1CA30D'
      },
      boxShadow: {
        '3xl': '2px 0px 8px 2px',
      } 
    },

  },
  plugins: [],
}
