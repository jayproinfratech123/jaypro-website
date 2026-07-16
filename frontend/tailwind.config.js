/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        blueprint: {
          950: "#0B1526",
          900: "#122A4A",
          800: "#1B3A63",
          700: "#254A7C",
          600: "#345E96",
        },
        concrete: {
          50: "#F6F5F1",
          100: "#EEECE4",
          200: "#DEDACD",
        },
        amber: {
          500: "#E28A1E",
          600: "#C7740F",
        },
        charcoal: "#1C1F24",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
      },
      backgroundImage: {
        "blueprint-grid":
          "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "32px 32px",
      },
    },
  },
  plugins: [],
};
