/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "neutral-silver": "#F5F7FA",
        "green-primary": "#4CAF4F",
        "brand-secondary": "#263238",
        "neutral-grey": "#4D4D4D",
        "light-grey": "#717171",
        "neutral-light-grey": "#89939E",
      },
      colors: {
        "neutral-silver": "#F5F7FA",
        "green-primary": "#4CAF4F",
        "brand-secondary": "#263238",
        "neutral-grey": "#4D4D4D",
        "light-grey": "#717171",
        "neutral-light-grey": "#89939E",
      },
    },
  },
  plugins: [],
};
