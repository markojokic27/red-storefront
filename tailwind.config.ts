import type { Config } from 'tailwindcss';

const breakpoints = ['sm', 'md', 'lg', 'xl', '2xl'];

const generateSafelist = () => {
  const fractionClasses = Array.from(
    { length: 12 },
    (_, i: number) => ((i + 1) / 12) * 100
  );
  const sizesArr: string[] = [];
  const offsetArr: string[] = [];

  fractionClasses.forEach((fraction) => {
    sizesArr.push(fraction === 100 ? `w-full` : `w-[${fraction}%]`);
    offsetArr.push(fraction === 100 ? `ml-auto` : `ml-[${fraction}%]`);
  });

  fractionClasses.forEach((fraction) => {
    sizesArr.push(
      ...breakpoints.map((bp) =>
        fraction === 100 ? `${bp}:w-full` : `${bp}:w-[${fraction}%]`
      )
    );
    offsetArr.push(
      ...breakpoints.map((bp) =>
        fraction === 100 ? `${bp}:ml-auto` : `${bp}:ml-[${fraction}%]`
      )
    );
  });

  return [...sizesArr, ...offsetArr];
};
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: generateSafelist(),
  theme: {
    extend: {
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
        xs2: '12px',
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
      },
    },
  },
  plugins: [],
};

export default config;
