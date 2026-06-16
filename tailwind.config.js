/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: "#FFD400",
          "yellow-light": "#FFE566",
          "yellow-dark": "#E6BF00",
          black: "#0A0A0A",
          "black-soft": "#1A1A1A",
          gray: "#6B6B6B",
        },
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
        display: ["Montserrat", "system-ui", "sans-serif"],
      },
      boxShadow: {
        phone:
          "0 40px 80px -20px rgba(0,0,0,0.35), 0 20px 40px -10px rgba(0,0,0,0.2)",
        card: "0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.08)",
        glow: "0 0 80px 30px rgba(255,212,0,0.4)",
      },
    },
  },
  plugins: [],
};
