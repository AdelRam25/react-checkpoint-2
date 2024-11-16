/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Set your desired fonts here as the default sans-serif
        sans: ['Bebas Neue', 'Faculty Glyphic', 'Tiny5', 'Unlock', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

