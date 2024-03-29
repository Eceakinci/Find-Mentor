/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        height: "height",
      },
      minWidth: {
        64: "16rem",
      },
      colors: {
        "rose-button": "#F24471",
      },
    },
  },
  plugins: [],
};
