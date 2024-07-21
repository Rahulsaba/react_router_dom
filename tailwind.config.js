/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main_color': '#f8285a',
        'text_primary': '#071437',
        'text_secondary': '#78829d',
      },
    },
  },
  plugins: [],
}