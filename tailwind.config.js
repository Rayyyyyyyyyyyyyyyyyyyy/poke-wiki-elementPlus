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
          DEFAULT: "#003A70",
        },
        secondary: {
          DEFAULT: "#A6A18A",
        },
        bg: {
          DEFAULT: "#666666",
          light: "#B8B8B8",
          map: "#3D7DCA80",
          card: "#FFCB0580",
          progress: "#ebeef5",
        },

        text: {
          DEFAULT: "#262626",
          light: "#C8C8C8",
          dark: "#333333",
        },
      },
    },
    screens: {
      xxs: "330px",
      xs: "370px",
      sm: "480px",
      md: "768px",
      base: "976px",
      lg: "1080px",
      xl: "1440px",
      "2xl": "1600px",
      "3xl": "1800px",
    },
  },
  plugins: [],
};
