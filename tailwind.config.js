/** @type {import('tailwindcss').Config} */
export const kColor = {
  "303333": "#303333",
  "driftwood": "#ae814c"
}

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: kColor,
      maxWidth: {
        '360': "360px"
      },
      maxHeight: {
        '360': "360px"
      },
      height: {
        '100': "100px"
      },
      keyframes: {
        "wiggle-left": {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '50%': { transform: 'rotate(4deg) scale(1.18)' },
          '100%': { transform: 'rotate(0deg) scale(1)' },
        },
        "wiggle-right": {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '50%': { transform: 'rotate(-4deg) scale(1.18)' },
          '100%': { transform: 'rotate(0deg) scale(1)' },
        },
        "fade-zoom-out": {
          '0%': { transform: 'scale(1.18)', opacity: '1' },
          '80%': { opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '0' },
        },
        "blip": {
          '0%': { opacity: '1' },
          '50%': { opacity: '0.5' },
          '100%': { opacity: '1' },
        },
        "message": {
          '0%': { opacity: '0', marginLeft: '-1000px' },
          '15%': { opacity: '1', marginLeft: '10px', marginRight: '-10px' },
          '30%': { opacity: '1', marginLeft: '-10px', marginRight: '0px' },
          '40%': { opacity: '1', marginLeft: '0px', marginRight: '0px' },
          '90%': { opacity: '1', marginLeft: '0px', marginRight: '0px' },
          '100%': { opacity: '0', marginLeft: '-1000px' },
        },
        'fade-zoom': {
          '0%': { opacity: '0', transform: 'scale(0)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'bottom-top': {
          '0%': { position: 'relative', top: '100%', opacity: '0' },
          '50%': { opacity: '0' },
          '100%': { position: 'relative', top: '0%', opacity: '1' }
        },
        'top-bottom-fade': {
          '0%': { position: 'relative', top: '-30%', transform: 'scale(0.7)', opacity: '0' },
          '30%': { position: 'relative', opacity: '0' },
          '100%': { position: 'relative', top: '0', transform: 'scale(1)', opacity: '1' }
        },
      },
      animation: {
        "wiggle-left": 'wiggle-left 3s ease-in-out infinite',
        "wiggle-right": 'wiggle-right 3s ease-in-out infinite',
        "fade-zoom-out": 'fade-zoom-out 5s linear forwards',
        "blip": 'blip 1s ease-in-out infinite',
        "message": 'message 5s ease-in-out infinite',
        "fade-zoom": 'fade-zoom 3s',
        "bottom-top": 'bottom-top 2s ease-in-out',
        "bottom-top-1s": 'bottom-top 1s ease-in-out',
        "top-bottom-fade": 'top-bottom-fade 2s'


      },
      backgroundImage: {
        'background-picture-1': `url(/background-picture-1.webp)`,
      }
    },

  },
  plugins: [],
}

