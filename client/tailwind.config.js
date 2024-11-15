/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#AF192F",
        "secondary": "#F97316",
        "tertiary":"#54D688"
      }
    },
  },
  plugins: [],
}