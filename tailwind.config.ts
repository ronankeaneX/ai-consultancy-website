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
        // Primary Colors
        primary: "#0A0E27",
        accent: "#6366F1",
        "accent-secondary": "#8B5CF6",
        tertiary: "#EC4899",

        // Neutrals
        background: "#FAFAFA",
        surface: "#FFFFFF",
        "text-primary": "#1F2937",
        "text-secondary": "#6B7280",
        border: "#E5E7EB",

        // Semantic Colors
        success: "#10B981",
        "success-dark": "#059669",
        warning: "#F59E0B",
        error: "#EF4444",
        info: "#3B82F6",
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      fontSize: {
        "h1": ["3.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "h2": ["2.5rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "h3": ["1.875rem", { lineHeight: "1.3" }],
        "h4": ["1.5rem", { lineHeight: "1.4" }],
        "body-lg": ["1.125rem", { lineHeight: "1.6" }],
        "body": ["1rem", { lineHeight: "1.6" }],
        "small": ["0.875rem", { lineHeight: "1.5" }],
      },
      spacing: {
        "xs": "4px",
        "sm": "8px",
        "md": "16px",
        "lg": "24px",
        "xl": "32px",
        "2xl": "48px",
        "3xl": "64px",
        "4xl": "96px",
        "5xl": "128px",
      },
      boxShadow: {
        "button-success": "0 4px 14px 0 rgba(16, 185, 129, 0.3)",
        "button-success-hover": "0 6px 20px 0 rgba(16, 185, 129, 0.4)",
      },
    },
  },
  plugins: [],
};

export default config;
