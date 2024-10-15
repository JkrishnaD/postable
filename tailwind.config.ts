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
      },backgroundImage:{
        'custom-gradient': "linear-gradient(99deg, rgba(18, 18000, 135, 1) 0%, rgba(29, 197, 253, 1) 50%, rgba(120, 69, 252, 1) 70%,rgba(12, 69, 252, 1) 100%)",
      }
    },
  },
  plugins: [],
};
export default config;
