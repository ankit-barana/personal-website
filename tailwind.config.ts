import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ], 
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      mono: ['Source Code Pro', 'monospace'],
      logo: ['Josefin Sans', 'comfortaa'],
      heading: ['Barlow', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          100: '#E88D67',
          200: '#D1999C',
          300: '#BB999C',
          400: '#BFC7EE',
          500: '#AA99C3',
          600: '#9999C3',
          700: '#8A92DE',
          800: '#7B8CDE',
          900: '#D9D9D9B3',
        },
        dark: {
          black: '#242525',
          white: '#E5E0D8',
          gray: '#B1A99D',
          deepgray: '#303333',
          navy: '#2C356F',
          blue: '#5FBBE9',
          nav: '#464646b3',
          lightnavy: '#5E68AB',
          night: '#0D0D38',
          day: '#E89845'
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class'
};

export default config;
