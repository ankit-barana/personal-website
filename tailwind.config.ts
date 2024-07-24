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
      heading: ['Barlow', 'sans-serif']
    },
    extend: {
      colors: {
        primary: {
          100: '#D5ECC0',
          200: '#C1E3A1',
          300: '#ACD981',
          400: '#ACD981',
          500: '#82C743',
          600: '#6EAD34',
          700: '#3C5E1C',
          800: '#283F13'
        }
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
