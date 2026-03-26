import type { Config } from "tailwindcss";

const baseConfig = require("@agency/config/tailwind");

const config: Config = {
  presets: [baseConfig],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "../../packages/ui/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
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
