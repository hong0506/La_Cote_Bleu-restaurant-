import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A2740',
          50: '#E8EDF2',
          100: '#D1DBE5',
          200: '#A3B7CB',
          300: '#7593B1',
          400: '#476F97',
          500: '#0A2740',
          600: '#081F33',
          700: '#061726',
          800: '#04101A',
          900: '#02080D',
        },
        gold: {
          DEFAULT: '#C8A877',
          50: '#F8F5EF',
          100: '#F1EBDF',
          200: '#E3D7BF',
          300: '#D5C39F',
          400: '#C8A877',
          500: '#B89455',
          600: '#9A7A42',
          700: '#735C32',
          800: '#4D3D21',
          900: '#261F11',
        },
        cream: {
          DEFAULT: '#F4F1EC',
          50: '#FFFFFF',
          100: '#FEFEFE',
          200: '#F9F7F4',
          300: '#F4F1EC',
          400: '#E9E3D7',
          500: '#DED5C2',
          600: '#CBC0A8',
          700: '#B8AB8E',
          800: '#9A8E6E',
          900: '#7C714E',
        },
      },
    },
  },
  plugins: [],
}
export default config
