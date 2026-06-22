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
          "yellow-soft": "#FFE875",
          "yellow-muted": "#FFF3B8",
          amber: "#B87500",
          black: "#0B0B0B",
        },
        surface: {
          cream: "#FFFBED",
          "cream-strong": "#FFF1B8",
          sand: "#F7F7F3",
          navy: "#080A12",
          card: "#FFFFFF",
        },
        ink: {
          DEFAULT: "#101010",
          soft: "#3F3A2B",
          muted: "#746A4A",
          amber: "#6B5A16",
        },
      },

      fontFamily: {
        sans: ["Be Vietnam Pro", "system-ui", "sans-serif"],
        display: ["Be Vietnam Pro", "system-ui", "sans-serif"],
      },

      boxShadow: {
        sticker: "0 5px 0 rgba(16,16,16,0.9), 0 18px 42px rgba(64,48,0,0.16)",
        "card-soft": "0 18px 55px rgba(16,16,16,0.10)",
        floating: "0 24px 70px rgba(16,16,16,0.18)",
        phone: "0 34px 90px rgba(16,16,16,0.28)",
      },
      maxWidth: {
        readable: "62ch",
        "readable-sm": "52ch",
        wide: "88rem",
      },
      screens: {
        "3xl": "1800px",
      },
    },
  },

  plugins: [],
};
