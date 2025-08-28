import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta personalizada de Alvian
        'alvian': {
          'dark': '#0D1B2A',      // Azul marino muy oscuro
          'navy': '#1B263B',      // Azul marino
          'blue': '#415A77',      // Azul gris
          'light-blue': '#778DA9', // Azul gris claro
          'cream': '#E0E1DD',     // Beige claro
        },
        // Gradientes personalizados
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'alvian-gradient': 'linear-gradient(135deg, #1B263B 0%, #415A77 100%)',
        'alvian-gradient-light': 'linear-gradient(135deg, #415A77 0%, #778DA9 100%)',
        'alvian-gradient-reverse': 'linear-gradient(135deg, #778DA9 0%, #415A77 100%)',
      }
    },
  },
  plugins: [],
} satisfies Config;
