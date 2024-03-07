/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
        fontSize:{
          "17":"17px",
        },
        colors:{
          "custom-yellow" : '#F5FF7D',
          based: '#171717'
        } 
    },
  },
  plugins: [],
}

