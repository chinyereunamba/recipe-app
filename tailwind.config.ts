import type { Config } from "tailwindcss"
const colors = require("tailwindcss/colors")

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        text: "#090a05",
        background: "#fdfdfb",
        primary: "#a7b35e",
        secondary: "#9dd1b2",
        accent: "#79c0b1",
        error: "#FF0000", // Custom Error Color
        success: "#00FF00", // Custom Success Color,

        english_violet: {
          DEFAULT: "#564256",
          100: "#110d11",
          200: "#231b23",
          300: "#342834",
          400: "#453545",
          500: "#564256",
          600: "#7f627f",
          700: "#a286a2",
          800: "#c1aec1",
          900: "#e0d7e0",
        },
        wisteria: {
          DEFAULT: "#b49fcc",
          100: "#23192f",
          200: "#47325f",
          300: "#6a4b8e",
          400: "#8f6fb3",
          500: "#b49fcc",
          600: "#c3b2d6",
          700: "#d2c5e0",
          800: "#e1d8eb",
          900: "#f0ecf5",
        },
        midnight_green: {
          DEFAULT: "#023436",
          100: "#000a0b",
          200: "#011516",
          300: "#011f20",
          400: "#022a2b",
          500: "#023436",
          600: "#05898e",
          700: "#08dee5",
          800: "#50f3f9",
          900: "#a7f9fc",
        },
        pearl: {
          DEFAULT: "#cfd2b2",
          100: "#2f311d",
          200: "#5e6239",
          300: "#8c9356",
          400: "#b0b581",
          500: "#cfd2b2",
          600: "#d8dbc1",
          700: "#e2e4d1",
          800: "#ecede0",
          900: "#f5f6f0",
        },
        lavender_blush: {
          DEFAULT: "#e0d8de",
          100: "#31272e",
          200: "#614e5d",
          300: "#91768a",
          400: "#b8a7b4",
          500: "#e0d8de",
          600: "#e6dfe4",
          700: "#ece7eb",
          800: "#f2eff2",
          900: "#f9f7f8",
        },
        ...colors, // Default Tailwind colors
      },
    },
  },
  plugins: [],
}
export default config
