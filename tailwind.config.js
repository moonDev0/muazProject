/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  './pages/**/*.{js,ts,jsx,tsx,mdx}',
  './components/**/*.{js,ts,jsx,tsx,mdx}',
  './app/**/*.{js,ts,jsx,tsx,mdx}',
],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: "green",
      },
      backgroundColor: {
        secondary: "rgb(88, 145, 103)",
        primary: "green",
      },
      backgroundImage: {
        'hero':"url('../public/assets/bg_1.jpg')",
        'func-BG':"url('../public/images/Rectangle.svg')",
        'TestimonialsBg':"url('../public/images/Vector 1.png')",
        'Newsletter1':"url('../public/images/Rectangle 35.png')",
        'Newsletter2':"url('../public/images/Rectangle 37.png')",
        'resourcebg':"url('../public/images/Rectangle 87.png')",
        'resourcebg2':"url('../public/images/Rectangle 88.png')",
      },
      screens:{
      
        // 'sm': '480px',   // Small screens (e.g. phones)
        // 'md': '768px',   // Medium screens (e.g. tablets)
        // 'lg': '1024px',  // Large screens (e.g. laptops)
        // 'xl': '1034px',  // Extra large screens (e.g. desktops)
        // '2xl':'1088px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1060px',
        '2xl': '1300px',
      
      },
      fontFamily: {
        sen: ['sen', 'sans-serif'],
        syne: ['syne', 'sans-serif'],
        KumbhSan: ['Kumbh Sans', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
