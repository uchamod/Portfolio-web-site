import type { Config } from "tailwindcss";

export default {
  
  darkMode:"class", // Enable dark mode using a class
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins:["poppins","sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customBlue: '#050a18',   // Navy Blue
        customGreen: '#228B22',  // Forest Green
        customGold: '#ff9636',   // Gold
        customCoral: '#FF7F50',  // Cora
      },
    },
  },
  plugins: [],
} satisfies Config;


// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{html,js}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }