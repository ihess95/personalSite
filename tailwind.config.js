/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
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
  plugins: [
    plugin(function ({ addUtilities }) {
      const woodTextures = {
        ".bg-wood-main": {
          "background-image": `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='100' viewBox='0 0 400 100'%3E%3Crect width='400' height='100' fill='%238B4513'/%3E%3Cpath d='M0,20 Q100,15 200,25 T400,20' stroke='%23654321' stroke-width='1.5' fill='none' opacity='0.7'/%3E%3Cpath d='M0,35 Q150,30 300,40 T400,35' stroke='%23654321' stroke-width='1' fill='none' opacity='0.5'/%3E%3Cpath d='M0,50 Q80,45 160,55 Q240,60 320,50 Q360,45 400,52' stroke='%23654321' stroke-width='2' fill='none' opacity='0.8'/%3E%3Cpath d='M0,65 Q120,60 240,70 T400,65' stroke='%23654321' stroke-width='1' fill='none' opacity='0.6'/%3E%3Cpath d='M0,80 Q90,75 180,85 Q270,90 360,80 Q380,75 400,82' stroke='%23654321' stroke-width='1.5' fill='none' opacity='0.7'/%3E%3Cellipse cx='80' cy='45' rx='8' ry='4' fill='%235D4037' opacity='0.6'/%3E%3Cellipse cx='220' cy='30' rx='6' ry='3' fill='%235D4037' opacity='0.5'/%3E%3Cellipse cx='350' cy='60' rx='7' ry='3.5' fill='%235D4037' opacity='0.6'/%3E%3Cpath d='M0,18 Q100,13 200,23 T400,18' stroke='%23A0522D' stroke-width='0.5' fill='none' opacity='0.8'/%3E%3Cpath d='M0,48 Q80,43 160,53 Q240,58 320,48 Q360,43 400,50' stroke='%23A0522D' stroke-width='0.5' fill='none' opacity='0.8'/%3E%3C/svg%3E")`,
        },
        ".bg-wood-light": {
          "background-image": `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='20' viewBox='0 0 400 20'%3E%3Crect width='400' height='20' fill='%23A0522D'/%3E%3Cpath d='M0,8 Q100,6 200,10 T400,8' stroke='%238B4513' stroke-width='1' fill='none' opacity='0.7'/%3E%3Cpath d='M0,15 Q150,13 300,17 T400,15' stroke='%238B4513' stroke-width='0.5' fill='none' opacity='0.5'/%3E%3C/svg%3E")`,
        },
        ".bg-wood-dark": {
          "background-image": `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='20' viewBox='0 0 400 20'%3E%3Crect width='400' height='20' fill='%23654321'/%3E%3Cpath d='M0,8 Q100,6 200,10 T400,8' stroke='%234A2C17' stroke-width='1' fill='none' opacity='0.8'/%3E%3Cpath d='M0,15 Q150,13 300,17 T400,15' stroke='%234A2C17' stroke-width='0.5' fill='none' opacity='0.6'/%3E%3C/svg%3E")`,
        },
      };

      addUtilities(woodTextures);
    }),
  ],
};
