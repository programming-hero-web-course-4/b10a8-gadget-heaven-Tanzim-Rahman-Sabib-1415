/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // colors: {
    //   'primary-1': '#9538E2',
    // },
    
    extend: {
      colors:{
        'primary-1': '#9538E2'
      },
    },
  },

  plugins: [
    require('daisyui'),
  ],
}

