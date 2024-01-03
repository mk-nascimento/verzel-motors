import tailwindScrollbar from "tailwind-scrollbar";
import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { 100: "#031D3D", 200: "#4E4B98" },
        green: { acqua: "#00A4B2", dark: "#6AB026", light: "#ABC616" },
      },
      fontFamily: { sans: "Poppins, sans-serif" },
    },
  },
  plugins: [tailwindScrollbar({ nocompatible: true })],
} satisfies Config;
