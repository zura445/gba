/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      height:{
        "800": "800px",
        "400": "400px",
      },
      maxHeight:{
        '1440': '1440',
        '1152': '1152px',
        '656': '656px',
        '500': '500px',
        '440': '440px',
      },
      backgroundImage: {
        "hero-pattern": "url('/image/B-52.jpg')",
      },
      
    },
  },
  plugins: [],
 
}
