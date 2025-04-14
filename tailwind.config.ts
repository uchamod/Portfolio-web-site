import type { Config } from "tailwindcss";

export default {
  darkMode: "class", // Enable dark mode using a class
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        typing: "typing 3.5s steps(40, end), blink .75s step-end infinite",
        "gradient-x": "gradient-x 3.5s ease infinite",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        typing: {
          from: { width: "0" },
          to: { width: "100%" },
        },
        blink: {
          "from, to": { borderColor: "transparent" },
          "50%": { borderColor: "#f8db86" }, // customGold color
        },
      },
      backgroundImage: {
        "gradient-title":
          "linear-gradient(90deg,rgb(40, 49, 62),rgb(100, 106, 113),rgb(157, 169, 185))",
        "gradient-title-dark":
          "linear-gradient(90deg, #f8fafc, #94a3b8, #f8fafc)",
      },
      fontFamily: {
        poppins: ["poppins", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customBlue: "#050a18", // Navy Blue
        customGreen: "#228B22", // Forest Green
        customGold: "#ff9636", // Gold
        customCoral: "#FF7F50", // Cora
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
