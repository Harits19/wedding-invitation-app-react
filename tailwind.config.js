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
    },

  },
  plugins: [],
}

