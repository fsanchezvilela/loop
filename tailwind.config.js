/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: '640px',
        tablet: '1007px',
        laptop: '1008px',
        desktop: '1440px',
      },
      colors: {
        'purple-haze': '#5C67DE',
        'charcoal-tint': '#14151f',
        'dark-wood': '#1A1A1A',
        'roman-silver': 'rgb(10, 10, 10)',
        'roman-silver-20': "rgba(10, 10, 10, 0.20)",
        charcoal: '#1B1B1B',
        transparent: 'transparent',
        whisper: 'rgba(255, 255, 255, 0.30)',
        cloud: 'rgba(255, 255, 255, 0.40)',
        twitter:'#1DA1F2'
      },
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
      }
    },
  },
  plugins: [],
}

