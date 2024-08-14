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
        },
        secondary: {
          pink: '#DBADB0',
          glass: '#D9D9D9B3',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
