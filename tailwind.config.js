/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        "IBM-Plex-Sans": ['IBM Plex Sans', 'sans-serif'],
        "Inter": ['Inter', 'sans-serif'],
      },
      colors: {
        'primary': '#FFC148',
        'secondary': '#1A1A1A',
        'secondary-light': '#A2A2A2',
        'success': '#19ED7B'
      }
    },
  },
  plugins: [],
}
