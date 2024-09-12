/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'subMain': '#07B8DB',
        "text":"#f2f9fa",
        "border":"#e8edee",
        "dry":"#f8fafa"
      }
    },
  },
  plugins: [],
}