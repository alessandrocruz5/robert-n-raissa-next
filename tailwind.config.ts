import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        grey: "#e3dad4",
        blush: "#cd8f92",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        dm: ["DM Serif Display", "serif"],
        noto: ["Noto Serif Display", "serif"],
      },
      transitionProperty: {
        all: "all",
      },
      transitionDuration: {
        default: "300ms",
      },
      transitionTimingFunction: {
        default: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
