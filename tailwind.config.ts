import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        /* 🌑 Dark Mode Base */
        bg: "var(--color-bg)",
        "bg-soft": "var(--color-bg-soft)",

        /* 🟢 Teal Accent */
        primary: "var(--color-primary)",
        "primary-soft": "var(--color-primary-soft)",

        /* 📝 Text */
        text: "var(--color-text)",
        muted: "var(--color-text-muted)",

        border: "var(--color-border)",
      },

      fontFamily: {
        heading: ['"TikTok Sans"', "sans-serif"],
        body: ['"Roboto"', "sans-serif"],
      },

      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.4)",
        glow: "0 0 0 1px rgba(20,184,166,0.4)",
      },

      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
