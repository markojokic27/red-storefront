import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    {
      pattern: /w-column-(1|2|3|4|5|6|7|8|9|10|11|12)/,
      variants: ['sm', 'md', 'lg', 'xl'],
    },
    {
      pattern: /offset-(1|2|3|4|5|6|7|8|9|10|11)/,
      variants: ['sm', 'md', 'lg', 'xl'],
    },
  ],
  theme: {
    extend: {
      screens: {
        xl: '1296px',
      },
      colors: {
        blue: {
          100: '#DFE2F2',
          400: '#878FCD',
          700: '#1E2DA0',
          900: '#162072',
        },
        red: {
          700: '#DF4718',
          900: '#BD3207',
        },
        grayscale: {
          10: '#FDFDFD',
          20: '#FBFBFB',
          30: '#F8F8F9',
          50: '#F4F4F4',
          100: '#E8E8E9',
          200: '#D0D0D2',
          300: '#A1A1A4',
          400: '#898A8D',
          500: '#6F6F72',
          600: '#545457',
          700: '#3A3A3B',
          800: '#1F1F20',
          900: '#050505',
        },
        yellow: {
          400: '#FFEFB7',
        },
      },
      fontSize: {
        '2xs': '12px',
        xs: '14px',
        base: '16px',
        md: '20px',
        lg: '24px',
        xl: '32px',
        '2xl': '36px',
        '3xl': '40px',
        '4xl': '48px',
        '5xl': '56px',
        '6xl': '64px',
        '7xl': '72px',
        '8xl': '80px',
      },
      borderWidth: {
        '1': '1px',
        '5': '5px',
      },
      maxWidth: {
        150: '37.5rem',
        176: '44rem',
        '8xl': '90rem',
      },
      spacing: {
        18: '4.5rem',
        21: '5.25rem',
        22: '5.5rem',
      },
      height: {
        18: '4.5rem',
      },
      minWidth: {
        150: '37.5rem',
        176: '44rem',
      },
    },
  },
  plugins: [],
};

export default config;
