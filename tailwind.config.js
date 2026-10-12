/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'navy-dark': '#0B1426',
        'navy-secondary': '#152238',
        'bright-blue': '#00A3FF',
        'cyan': '#00D4FF',
        'teal': '#00C9A7',
        'muted-grey': '#94A3B8'
      }
    }
  },
  plugins: [],
}
