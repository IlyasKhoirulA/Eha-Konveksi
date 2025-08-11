/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js}",
  ],
  theme: {
    extend: {
      animation: {
        'slide-left': 'slide-left 15s linear infinite',
      },
      keyframes: {
        'slide-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }, // move only half because we duplicated logos
        },
      },
    },
  },
  plugins: [],
}
