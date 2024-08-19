import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

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
