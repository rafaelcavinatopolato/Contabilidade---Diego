import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "../../packages/ui/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:    "#8B4513",
        secondary:  "#D4824A",
        background: "#F5E6D3",
        surface:    "#FAF3EC",
        foreground: "#2C1A0E",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) both",
      },
    },
  },
};

export default config;
