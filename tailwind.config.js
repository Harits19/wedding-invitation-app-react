/** @type {import('tailwindcss').Config} */
export const kColor = {
  303333: "#303333",
  driftwood: "#ae814c",
  "#E97777C7": "#E97777C7",
  "#CB2F2FC7": "#CB2F2FC7",
  "primary-color": "#B48570",
  "background-color": "#DBC0AD",
  "background-color-light": "#F1E7E0",
};
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    fontFamily: {
      brittany: ["Brittany", 'sans-serif'],
      italiana: ["Italiana", 'sans-serif'],
      cormorant: ["Cormorant", 'sans-serif'],
      gallery: ["Gallery", 'sans-serif'],
      arizona: ["Arizona", 'sans-serif'],
      cardo: ["Cardo", 'sans-serif'],
      poppins: ["Poppins", 'sans-serif']


    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      boxShadow: {
        '3xl': '13px 7px 10px 0px rgba(0,0,0,0.5)',
      },
      maxWidth: {
        360: "360px",
      },
      maxHeight: {
        360: "360px",
      },
      height: {
        100: "100px",
        "mobile": "760px"

      },
      width: {
        "mobile": "360px",
      },
      colors: {
        ...kColor,
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        "#3C471F": "#3C471F",
        "#717E74": "#717E74",
        "#434343": "#434343",
        "#F1E7E0": "#F1E7E0",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "wiggle-left": {
          "0%": { transform: "rotate(0deg) scale(1)" },
          "50%": { transform: "rotate(4deg) scale(1.18)" },
          "100%": { transform: "rotate(0deg) scale(1)" },
        },
        "wiggle-right": {
          "0%": { transform: "rotate(0deg) scale(1)" },
          "50%": { transform: "rotate(-4deg) scale(1.18)" },
          "100%": { transform: "rotate(0deg) scale(1)" },
        },
        "fade-zoom-out": {
          "0%": { transform: "scale(1.18)", opacity: "1" },
          "80%": { opacity: "1" },
          "100%": { transform: "scale(1)", opacity: "0" },
        },
        blip: {
          "0%": { opacity: "1" },
          "50%": { opacity: "0.5" },
          "100%": { opacity: "1" },
        },
        message: {
          "0%": { opacity: "0", marginLeft: "-1000px" },
          "15%": { opacity: "1", marginLeft: "10px", marginRight: "-10px" },
          "30%": { opacity: "1", marginLeft: "-10px", marginRight: "0px" },
          "40%": { opacity: "1", marginLeft: "0px", marginRight: "0px" },
          "90%": { opacity: "1", marginLeft: "0px", marginRight: "0px" },
          "100%": { opacity: "0", marginLeft: "-1000px" },
        },
        "fade-zoom": {
          "0%": { opacity: "0", transform: "scale(0)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "fade-in-top-bottom": {
          "0%": { opacity: "0", marginTop: -10 },
          "100%": { opacity: "1", marginTop: 0 },
        },
        "fade-in-bottom-top": {
          "0%": { opacity: "0", marginTop: 10 },
          "100%": { opacity: "1", marginTop: 0 },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "bottom-top": {
          "0%": { position: "relative", top: "100%", opacity: "0" },
          "50%": { opacity: "0" },
          "100%": { position: "relative", top: "0%", opacity: "1" },
        },
        "top-bottom-fade": {
          "0%": {
            position: "relative",
            top: "-30%",
            transform: "scale(0.7)",
            opacity: "0",
          },
          "30%": { position: "relative", opacity: "0" },
          "100%": {
            position: "relative",
            top: "0",
            transform: "scale(1)",
            opacity: "1",
          },
        },
        "bottom-top-fade": {
          "0%": {
            position: "relative",
            bottom: "-30%",
            transform: "scale(0.7)",
            opacity: "0",
          },
          "30%": { position: "relative", opacity: "0" },
          "100%": {
            position: "relative",
            bottom: "0",
            transform: "scale(1)",
            opacity: "1",
          },
        },
        "fade-out-bottom-top": {
          "0%": {
            top: "0%",
            opacity: "1",
          },
          "100%": {
            top: "-100%",
            opacity: "1",
          },
        },
        "left-right": {
          "0%": {
            marginLeft: -100,
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        "right-left": {
          "0%": {
            marginRight: -100,
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },

      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",

        "wiggle-left": "wiggle-left 3s ease-in-out infinite",
        "wiggle-right": "wiggle-right 3s ease-in-out infinite",
        "fade-zoom-out": "fade-zoom-out 5s linear forwards",
        blip: "blip 1s ease-in-out infinite",
        message: "message 5s ease-in-out infinite",
        "fade-zoom": "fade-zoom 3s",
        "fade-in-top-bottom": "fade-in-top-bottom 3s",
        "fade-in-bottom-top": "fade-in-bottom-top 3s",
        "fade-in": "fade-in 3s",
        "bottom-top": "bottom-top 2s ease-in-out",
        "bottom-top-1s": "bottom-top 1s ease-in-out",
        "top-bottom-fade": "top-bottom-fade 2s",
        "bottom-top-fade": "bottom-top-fade 2s",
        "fade-out-bottom-top": "fade-out-bottom-top 2s forwards",
        "left-right": "left-right 2s forwards",
        "right-left": "right-left 2s forwards",



      },
      backgroundImage: {
        "background-picture-1": `url(/background-picture-1.webp)`,
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}