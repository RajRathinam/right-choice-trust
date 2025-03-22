/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#1e1b6c",  // Custom blue
        darkblue: "#0f003e", // Custom red
        accent: "#441972",    // Custom green
      },
    },
  },
  plugins: [require("daisyui")], 
  daisyui: {
    themes: ["light"], // Add your themes here
  },
}
