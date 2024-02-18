/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ElMessiri: ["El Messiri", "sans-serif"],
      },
      maxContainer: {
        width: "85vw",
        margin: "3.5rem auto",
        background: "white",
        borderRadius: "1rem",
      },
      colors: {
        "main-gradient-background":
          "linear-gradient(90deg, #ff0168 -1.07%, #b1209f 101.33%)",
        "main-color": "#142457",
        "secondary-color": "#ff0163",
        "main-background-color": "#142457",
        "text-title-color": "#142457",
        "text-paragraph-color": "#848a9c",
      },
    },
  },
  plugins: [],
};
