/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        koulen: ['Koulen', 'cursive'],
        liter: ['Liter', 'sans-serif'],
        squada: ['Squada One', 'cursive'],
        stalinist: ['Stalinist One', 'cursive'],
      },
    },
  },
  plugins: [],
};
