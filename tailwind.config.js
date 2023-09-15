/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'tier1': '#2D2D39',
        'tier2': '#F1EEE9',
        'tier3': '#01BE96',
        'tier4': '#191923',
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(1, 190, 150, 0.25)',
        '4xl': [
          '0 35px 35px rgba(1, 190, 150, 0.25)',
          '0 45px 65px rgba(1, 190, 150, 0.15)'
        ]
      },
      colors: {
        'tier1': '#2D2D39',
        'tier2': '#F1EEE9',
        'tier3': '#01BE96',
        'tier4': '#191923',
      },
      fontFamily: {
        // 'open-sans': ['Open Sans', 'sans'], 
      },
    },
  },
  plugins: [],
}
