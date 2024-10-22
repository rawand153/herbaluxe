/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
    './node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7c9455',
        secondary: '#3C3C3B',
        disabled: '',
        error: '',
        texts:'#686956',
      },
        screens: {
          xs: '400px',
        sm: '640px',
        md: '769px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        },
        fontFamily:{
          Sofadi_One:['SofadiOne'],
          Nunito:['Nunito'],
          Nunito_italic:['Nunito-italic'],
        },
    },
  },
  plugins: [],
}