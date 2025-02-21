/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
      screens: {
        "2xl": "1140px",
        lg: "992px",
        md: "768px",
        sm: "576px",
      },
    },
    extend: {
      fontFamily: {
        spaceGrotesk: ["Space Grotesk", "serif"],
      },
      backgroundImage: {
        heroLayer: "url('/public/assets/images/webp/hero-bg-layer.webp')",
        whiteImg: "url('/public/assets/images/png/bg-white.png')",
      },
      backgroundSize: {
        "hero-set": "100% 726px",
        "hero-bg-set": "100% 100%",
      },
      colors: {
        "light-gray": "#1D1D1D",
        "dark-black": "#040404",
        "sky-blue": "#AFE5FF",
        "gray": "#4D4D4D",
        "off-gray": "#3B3B3B",
        "off-brown": "#FFFFFF1A",
      },
      fontSize: {
        custom5xl: "64px",
        custom4xl: "56px",
        custom3xl: "40px",
      },
    },
  },
  plugins: [],
};

