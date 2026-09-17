/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Core palette — deep night burgundy world with rose/gold accents
        midnight: '#1a0f14',     // near-black burgundy background
        burgundy: '#3d1224',     // deep burgundy
        wine: '#5c1a30',         // secondary burgundy
        rose: '#c98ba0',         // soft dusty rose
        blush: '#e8c9ce',        // pale pink
        cream: '#f6ecdf',        // warm cream text/paper
        gold: '#c9a24b',         // subtle antique gold
        goldlight: '#e3c789',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['"Cormorant Garamond"', 'serif'],
        script: ['"Playfair Display"', 'serif'],
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '50%': { transform: 'translateY(-18px) translateX(6px)' },
        },
        twinkle: {
          '0%, 100%': { opacity: 0.2 },
          '50%': { opacity: 1 },
        },
        flicker: {
          '0%, 100%': { opacity: 1, transform: 'scaleY(1)' },
          '45%': { opacity: 0.75, transform: 'scaleY(0.92) translateX(-1px)' },
          '55%': { opacity: 0.9, transform: 'scaleY(1.05) translateX(1px)' },
        },
      },
      animation: {
        drift: 'drift 6s ease-in-out infinite',
        twinkle: 'twinkle 3s ease-in-out infinite',
        flicker: 'flicker 0.6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
