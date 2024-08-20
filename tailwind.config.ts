import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        'neue-haas-black': ['var(--font-neue-haas-black)', 'sans-serif'],
        'neue-haas-black-italic': ['var(--font-neue-haas-black-italic)', 'sans-serif'],
        'neue-haas-bold': ['var(--font-neue-haas-bold)', 'sans-serif'],
        'neue-haas-bold-italic': ['var(--font-neue-haas-bold-italic)', 'sans-serif'],
        'neue-haas-light': ['var(--font-neue-haas-light)', 'sans-serif'],
        'neue-haas-light-italic': ['var(--font-neue-haas-light-italic)', 'sans-serif'],
        'neue-haas-medium': ['var(--font-neue-haas-medium)', 'sans-serif'],
        'neue-haas-medium-italic': ['var(--font-neue-haas-medium-italic)', 'sans-serif'],
        'neue-haas': ['var(--font-neue-haas-roman)', 'sans-serif'],
        'neue-haas-italic': ['var(--font-neue-haas-roman-italic)', 'sans-serif'],
        'neue-haas-thin': ['var(--font-neue-haas-thin)', 'sans-serif'],
        'neue-haas-thin-italic': ['var(--font-neue-haas-thin-italic)', 'sans-serif'],
        'neue-haas-thin-xs': ['var(--font-neue-haas-xthin)', 'sans-serif'],
        'neue-haas-thin-xs-italic': ['var(--font-neue-haas-xthin-italic)', 'sans-serif'],
        'neue-haas-thin-xxs': ['var(--font-neue-haas-xxthin)', 'sans-serif'],
        'neue-haas-thin-xxs-italic': ['var(--font-neue-haas-xxthin-italic)', 'sans-serif'],

        'arial': ['var(--font-arial)', 'sans-serif'],
        'arial-black': ['var(--font-arial-black)', 'sans-serif'],
        'arial-bold': ['var(--font-arial-bold)', 'sans-serif'],
        'arial-bold-italic': ['var(--font-arial-bold-italic)', 'sans-serif'],
        'arial-italic': ['var(--font-arial-italic)', 'sans-serif'],
        'arial-black-italic': ['var(--font-arial-black-italic)', 'sans-serif'],
      },

      colors: {
        'asumaroon': {
          DEFAULT: '#8C1D40',
          100: '#F1E3E8',
          200: '#E3C7D0',
          300: '#D5ABB8',
          400: '#C68EA0',
          500: '#A95670',
          600: '#9B3A58',
          700: '#8C1D40',
          800: '#7F1A3A',
          900: '#731835',
        },
  
        'asugold': {
          DEFAULT: '#FFC627',
          100: '#FFF1C9',
          200: '#FFEAAE',
          300: '#FFE393',
          400: '#FFDC78',
          500: '#FFD55D',
          600: '#FFCE42',
          700: '#FFC627',
          800: '#E8B423',
          900: '#D3A420',
        },
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
