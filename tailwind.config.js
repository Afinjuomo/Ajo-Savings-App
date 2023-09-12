/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html","./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      Color:{
        primary: "#088AB2"
      }
    },
  },
  plugins: [],
}

