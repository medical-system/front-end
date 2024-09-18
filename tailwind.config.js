/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main": '#183253',
        "subMain": '#07B8DB',
        "text":"#f2f9fa",
        "textGray":"#a0a0a0",
        "border":"#e8edee",
        "dry":"#f8fafa"
      },
      screens:{
        'xs': '475px',
      }
    },
  },
  plugins: [],
}