import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      body: ["Google Sans", "sans-serif"],
    },
    extend: {
      colors: {
        dark: {
          primary: "#14181d",
          secondary: "#22262c",
          tertiary: "#404040",
          border: {
            primary: "#F5F5F5",
          },
          highlight: "#b69df8",
          red: "#e57777",
        },
        light: {
          primary: "#ffffff",
          secondary: "#eeeeee",
          highlight: "#34a853",
          red: "#e57777",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;