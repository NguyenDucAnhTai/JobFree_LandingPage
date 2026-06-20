/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      spacing: {
        // Layout spacing dùng chung
        "page-x": "clamp(24px, 5vw, 64px)",
        "section-y": "clamp(72px, 10vw, 120px)",
        "section-y-sm": "clamp(48px, 7vw, 80px)",

        // Container / component spacing
        "nav-h": "80px",
        "hero-y": "clamp(48px, 8vw, 96px)",
        "card-p": "clamp(20px, 3vw, 32px)",

        // Extra scale
        18: "72px",
        22: "88px",
        26: "104px",
        30: "120px",
      },

      maxWidth: {
        page: "1440px",
        content: "1280px",
      },

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
        sans: ["Be Vietnam Pro", "system-ui", "sans-serif"],
        display: ["Be Vietnam Pro", "system-ui", "sans-serif"],
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
