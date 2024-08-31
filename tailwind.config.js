/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': '#ffffff',
        'moderatePurple': '#7541c8',
        'vdgBlue': '#48556a',
        'vdbBlue': '#19212e'
      },
      backgroundImage: {
        'quotation-pattern': "url('assets/images/bg-pattern-quotation.svg')",
      },
      fontSize: {
        base: '0.813rem'
      },
      fontFamily: {
        'body': "Barlow Semi Condensed"
      },
      fontWeight: {
      normal: '500',
      semibold: '600',
      }
    },
  },
  plugins: [],
}

