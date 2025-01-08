import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        detailsmsgDown: {
          '0%': { opacity: '0', transform: 'translate3d(0, -30%, 0)' },
          '100%': { opacity: '1' }
        },
        detailsmsgUp: {
          '0%': { opacity: '1', transform: 'translate3d(0, 0, 0)' },
          '100%': { opacity: '0', transform: 'translate3d(0, -30%, 0)' }
        },
      },
    },
  },
  plugins: [],
} satisfies Config;