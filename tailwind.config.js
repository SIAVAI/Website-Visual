/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html, js, ts, vue, jsx}", 
    "./src/**/*"
  ],
  theme: {
    fontFamily:{
      'poppins':["Poppins", "sans-serif"]
    }
  },
  plugins: [require("daisyui")],
}

