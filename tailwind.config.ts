import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'green-dark': '#16945f',
        'green-light': '#D0FBE1',
        'green-text': '#052B08',
        'gray-button': '#394B40',
        'purple-button': '#94164B'
      },
    },
  },
  plugins: [],
} satisfies Config;
