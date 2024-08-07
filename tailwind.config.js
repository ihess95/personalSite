/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      body: ["roboto", "ui-sans-serif"],
    },
    extend: {
      backgroundImage: {
        hero: "url(/src/assets/images/spacesand.jpg)",
      },
    },
  },
  plugins: [],
};
