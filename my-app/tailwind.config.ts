import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          '"Noto Sans"',
          "Helvetica",
          "Arial",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
        ],
      },
      animation: {
        "float-slow": "float 6s ease-in-out infinite",
        "float-medium": "float 4s ease-in-out infinite",
        "float-fast": "float 3s ease-in-out infinite",
        drift: "drift 20s linear infinite",
        twinkle: "twinkle 2s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
          "33%": { transform: "translateY(-20px) translateX(10px)" },
          "66%": { transform: "translateY(10px) translateX(-10px)" },
        },
        drift: {
          "0%": { transform: "translateX(-100px) translateY(0px)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { transform: "translateX(calc(100vw + 100px)) translateY(-100px)", opacity: "0" },
        },
        twinkle: {
          "0%": { opacity: "0.3", transform: "scale(1)" },
          "100%": { opacity: "1", transform: "scale(1.2)" },
        },
      },
      colors: {
        // GitHub color palette
        github: {
          canvas: {
            default: "#0d1117",
            overlay: "#161b22",
            inset: "#21262d",
            subtle: "#30363d",
          },
          fg: {
            default: "#f0f6fc",
            muted: "#8b949e",
            subtle: "#6e7681",
          },
          border: {
            default: "#30363d",
            muted: "#21262d",
            subtle: "#484f58",
          },
          accent: {
            emphasis: "#1f6feb",
            fg: "#58a6ff",
            subtle: "#388bfd26",
          },
        },
        blue: {
          50: "#eff6ff",
          100: "#dbeafe",
          400: "#58a6ff",
          500: "#1f6feb",
          600: "#1158c7",
          700: "#0d419d",
        },
        teal: {
          50: "#f0fdfa",
          100: "#ccfbf1",
          400: "#56d4dd",
          500: "#39d0d8",
          600: "#0d9488",
        },
        purple: {
          50: "#faf5ff",
          100: "#f3e8ff",
          400: "#bc8cff",
          500: "#a855f7",
          600: "#9333ea",
        },
        pink: {
          400: "#ff7b72",
          500: "#f85149",
        },
        green: {
          400: "#7ee787",
          500: "#56d364",
        },
        gray: {
          50: "#f9fafb",
          100: "#f3f4f6",
          300: "#8b949e",
          400: "#6e7681",
          600: "#484f58",
          700: "#30363d",
          800: "#21262d",
          900: "#161b22",
          950: "#0d1117",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1.1" }],
        "6xl": ["3.75rem", { lineHeight: "1.1" }],
      },
      fontWeight: {
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
