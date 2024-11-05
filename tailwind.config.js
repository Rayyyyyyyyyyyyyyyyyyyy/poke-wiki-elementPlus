/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2980EF",
          light: "#D9B391",
          dark: "#262626",
        },
        secondary: {
          DEFAULT: "#A6A18A",
        },
        bg: {
          DEFAULT: "#666666",
          light: "#B8B8B8",
          map: "#3D7DCA80",
          card: "#FFCB0580",
        },
        tag: {
          DEFAULT: "#9FA19F",
          fire: "#E62829",
          water: "#2980EF",
          fighting: "#FF8000",
          flying: "#81B9EF",
          poison: "#9141CB",
          ground: "#915121",
          rock: "#AFA981",
          bug: "#91A119",
          ghost: "#704170",
          steel: "#60A1B8",
          grass: "#3FA129",
          electric: "#FAC000",
          psychic: "#EF4179",
          ice: "#3FD8FF",
          dragon: "#5060E1",
          dark: "#50413F",
          fairy: "#EF70EF",
        },
        text: {
          DEFAULT: "#262626",
          light: "#C8C8C8",
        },
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
      "2xl": "1600px",
      "3xl": "1800px",
    },
  },
  plugins: [],
};
