/** @type {import('tailwindcss').Config} */
export const kColor = {
  "303333": "#303333",
  "ae814c": "#ae814c"
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
      },
      animation: {
        "wiggle-left": 'wiggle-left 3s ease-in-out infinite',
        "wiggle-right": 'wiggle-right 3s ease-in-out infinite',

      }
    },

  },
  plugins: [],
}

