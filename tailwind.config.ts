module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'lg': { 'max': '1440px' },
        'xl': { 'max': '1280px' },
        'md': { 'max': '960px' },
        'sm': { 'max': '790px' }
      },
      keyframes: {
        detailsmsgDown: {
          '0%': { opacity: '0', transform: 'translate3d(0, -30%, 0)' },
          '100%': { opacity: '1' }
        },
        detailsmsgUp: {
          '0%': { opacity: '1', transform: 'translate3d(0, 0, 0)' },
          '100%': { opacity: '0', transform: 'translate3d(0, -30%, 0)' }
        }
      }
    }
  },
  plugins: [],
};