/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors: {
        primarycolor: "#800080",
        secondarycolor: "rgb(226, 193, 7)",
        purple: "rgb(245, 223, 245);",
        ash: "rgb(214, 212, 212)",
        black: "rgb(75, 74, 74)",
      },

      backgroundImage: {
        my: "url('/Images/my.jpg')",
      },
    },

    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        md: "50px",
      },
    },
  },
  plugins: [],
};
