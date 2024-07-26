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
      heading: ['Barlow', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          100: '#E88D67',
          200: '#D1999C',
          300: '#BB999C',
          400: '#BB999C',
          500: '#AA99C3',
          600: '#9999C3',
          700: '#8A92DE',
          800: '#7B8CDE',
        },
        secondary: {
          100: '#F9F6F1',
          200: '#EDE4D4',
          300: '#E0D1B8',
          400: '#D3BE9C',
          500: '#C6AB80',
          600: '#B99964',
        },
        accent: {
          100: '#E1ABA9',
          200: '#D78F8D',
          300: '#CD7370',
          400: '#C35754',
          500: '#B0413E',
          600: '#983935',
          700: '#7F2F2D',
          800: '#652624',
          900: '#4C1C1B',
        },
        preferred: {
          white: '#F5F3EF',
          gray: '#4B5563',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
