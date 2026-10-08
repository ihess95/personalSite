/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

/* Tokens taken from the Book Music app's own stylesheet, since this site
   embeds that app in an iframe and the two should not look like different
   products. Same hexes and faces; Tailwind 3 wants them in a config where
   that app's Tailwind 4 used an @theme block. */
const WALNUT = {
  deep: "#1E140D",
  base: "#33231A",
  mid: "#3E2B20",
  lift: "#4E3726",
};

/* Wood grain as stretched noise: feTurbulence at a low horizontal and high
   vertical frequency gives long streaks along the board. All the
   irregularity has to come from the turbulence; a regular gradient period
   layered over it reads as corduroy.

   The shelf is full-bleed, so the tile repeats across the viewport and has
   to be seamless. stitchTiles makes the noise meet itself at the tile edge,
   but only if the filter region is the tile, hence the explicit
   filterUnits/x/y/width/height. The two layers also tile at different widths
   so the composite only repeats at their common multiple. */
const grain = (w, h, bf, octaves, opacity, seed) =>
  `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${w}' height='${h}'%3E%3Cfilter id='w' filterUnits='userSpaceOnUse' x='0' y='0' width='${w}' height='${h}'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='${bf}' numOctaves='${octaves}' seed='${seed}' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='${w}' height='${h}' filter='url(%23w)' opacity='${opacity}'/%3E%3C/svg%3E")`;

const FIGURE = grain(1600, 200, "0.004 0.07", 5, 0.55, 11);
const FIBRE = grain(900, 200, "0.02 0.75", 3, 0.3, 4);

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // The room
        ink: {
          DEFAULT: "#1c1b18",
          deep: "#14120e",
          raised: "#25211b",
          surface: "#28241e",
          light: "#332e26",
        },
        cream: { DEFAULT: "#ede6d6", muted: "#a69c87" },
        brass: { DEFAULT: "#c9a66b", deep: "#8a6d3b", shadow: "#5c3d3d" },
        // The liner notes
        paper: {
          DEFAULT: "#f2ebdb",
          shade: "#e7dcc4",
          ink: "#2a241c",
          muted: "#6b604e",
        },
        walnut: WALNUT,
        line: "rgb(237 230 214 / 0.08)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ['"Playfair Display"', "Georgia", "serif"],
        book: ['"EB Garamond"', "Georgia", "serif"],
      },
      backgroundImage: {
        hero: "url(/src/assets/images/spacesand.jpg)",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".bg-wood-main": {
          "background-color": WALNUT.base,
          "background-image": `${FIBRE}, ${FIGURE}, linear-gradient(to bottom, ${WALNUT.lift}, ${WALNUT.base} 40%, ${WALNUT.deep})`,
          "background-blend-mode": "overlay, soft-light, normal",
        },
        // The lit top edge of the board.
        ".bg-wood-light": {
          "background-color": WALNUT.mid,
          "background-image": `${FIBRE}, linear-gradient(to bottom, #5A4029, ${WALNUT.mid})`,
          "background-blend-mode": "overlay, normal",
        },
        // The lip underneath, in shadow.
        ".bg-wood-dark": {
          "background-color": WALNUT.deep,
          "background-image": `linear-gradient(to bottom, ${WALNUT.deep}, #110A06)`,
        },
      });
    }),
  ],
};
