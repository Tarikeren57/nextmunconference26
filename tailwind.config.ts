import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#00E5FF", // Vibrant water green/cyan from the logo
          dark: "#00B3CC",
          darker: "#008099",
          light: "#CCFAFF",
          muted: "#034047", // For deep gradient backgrounds
        },
        charcoal: {
          950: "#050505",
          900: "#0A0A0A",
          850: "#111111",
          800: "#1A1A1A",
          700: "#222222",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
