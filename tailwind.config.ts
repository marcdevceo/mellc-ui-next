import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand
        primary: "#063940",
        secondary: "#049A8F",
        accent: "#E8A87C",
        neutral: "#ECECEC",

        // System
        success: "#00C851",
        warning: "#ffbb33",
        danger: "#ff4444",
      },

      spacing: {
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "32px",
        xl: "48px",
        xxl: "64px",
        xxxl: "80px",
      },

      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        heading: ["Poppins", "ui-sans-serif", "system-ui"],
        mono: ["Fira Code", "monospace"],
      },

      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        xxl: ["1.5rem", { lineHeight: "2rem" }],
        xxxl: ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1" }],
      },
    },
  },
  plugins: [],
};
export default config;
