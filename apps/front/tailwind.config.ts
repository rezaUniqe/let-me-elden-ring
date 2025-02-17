import type { Config } from "tailwindcss";
import baseUiTailwindConfig from "@workspace/ui/tailwind.config";

export default {
  presets: [baseUiTailwindConfig],

  content: [
    "../../packages/ui/src/**/*.{ts,tsx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
