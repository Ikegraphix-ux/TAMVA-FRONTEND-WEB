import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep blackish-green — matches the TAMVA app's near-black background
        primary: {
          DEFAULT: "#081712",
          50: "#EEF6F3",
          100: "#D7E9E2",
          200: "#AFD1C3",
          300: "#7FAE9C",
          400: "#537F6D",
          500: "#345C4C",
          600: "#213F33",
          700: "#162C24",
          800: "#0F1F19",
          900: "#081712",
          950: "#040D0A",
        },
        // Vivid emerald — matches the app's primary green (buttons, graph line, checkmarks)
        accent: {
          DEFAULT: "#10A574",
          50: "#EAFBF3",
          100: "#D1F5E4",
          200: "#A0EACB",
          300: "#69D9AC",
          400: "#33C48E",
          500: "#10A574",
          600: "#0C8760",
          700: "#0A6B4C",
          800: "#08503A",
          900: "#053B2A",
        },
        // Warm gold — the app's secondary action color (e.g. the Save button)
        gold: {
          DEFAULT: "#E8B830",
          50: "#FDF6E3",
          100: "#FAEBBE",
          300: "#F1CE6E",
          500: "#E8B830",
          600: "#C89A1C",
          700: "#9C7714",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          muted: "#F5F8F6",
          subtle: "#EEF4F1",
          border: "#DFE9E4",
        },
        ink: {
          DEFAULT: "#081712",
          muted: "#4A5B54",
          faint: "#7C8E87",
        },
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        "h1-mobile": ["2.5rem", { lineHeight: "1.12", letterSpacing: "-0.02em" }],
        h1: ["3.75rem", { lineHeight: "1.08", letterSpacing: "-0.02em" }],
        "h2-mobile": ["1.875rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        h2: ["2.5rem", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        h3: ["1.5rem", { lineHeight: "1.3" }],
      },
      maxWidth: {
        container: "1280px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(11,18,32,0.04), 0 8px 24px -12px rgba(11,18,32,0.10)",
        "card-hover": "0 4px 8px rgba(11,18,32,0.06), 0 16px 32px -12px rgba(11,18,32,0.16)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
