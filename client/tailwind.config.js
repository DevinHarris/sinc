/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js, ts, jsx, tsx, mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundColor: {
        'white-rgba': 'rgba(255, 255, 255, 0.2)'
      }
    },
  },
  plugins: [],
}

