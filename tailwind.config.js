/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'sans': ['IRANSansWeb' ],
    },
    container: {
      center: true,
    },
    variants: {
      extend: {
          display: ["group-hover"],
      },
  },
    screens: {
      
      '3xl': {'max': '2535px'},
      // => @media (max-width: 1535px) { ... }
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1160px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '830px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '480px'},
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      // keyframes :{

      // }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('tailwindcss-animated')
  ],
}
