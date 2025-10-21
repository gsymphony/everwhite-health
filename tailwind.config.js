/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        petal: '#FFC2D1',     // P1 Petal Pink – brand accent
        blush: '#FFE1EB',     // P2 Blush Mist – airy and calm
        clean: '#FFF8F8',     // P3 Clean neutral – soft neutral background
        coral: '#FFADAD'      // P5 Coral Bloom – signage glow and highlights
      }
    }
  },
  plugins: []
}
