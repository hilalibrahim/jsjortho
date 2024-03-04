/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        hoverColor: "#FFC000",
        brightColor: "#0080ff",
        backgroundColor: "#ff5858",
        newColor:"#74ff9a",
      },
    },
  },
  plugins: [],
};
