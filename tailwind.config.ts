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
      }
    }
  },
  plugins: [],
};