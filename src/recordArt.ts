// Shared by the sleeve, the record in it, the record on the platter and the
// one flying between them. Outside the components to avoid an import cycle.
import { PROJECT_LABELS } from "./projects";

/** camelCase/PascalCase filename to spaced words. */
export const formatDisplayName = (label: string): string =>
  label
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/([0-9])([A-Z])/g, "$1 $2")
    .replace(/^./, (c) => c.toUpperCase());

// Length of the label arc in viewBox units: pi * 25. Text not pinned to it
// is clipped at both ends.
export const LABEL_ARC_LENGTH = 78.5;

// Okabe-Ito, which stays distinguishable under protanopia and deuteranopia
// where the usual red/green/orange/teal set does not.
//
// Order matters: only two grounds take white type, and a lone white-type
// sleeve reads as the selected one, so both sit early enough for a short
// shelf to get them. Green and vermillion are kept apart.
const SWATCHES = [
  "#0072B2", // blue            (white type)
  "#E69F00", // orange
  "#2B2B2B", // near-black      (white type)
  "#009E73", // bluish green
  "#CC79A7", // reddish purple
  "#D55E00", // vermillion
  "#56B4E9", // sky blue
  "#F0E442", // yellow
];

export interface SleevePalette {
  /** The printed colour: the sleeve ground and the record label face. */
  ink: string;
  /** Text that sits on `ink`. */
  on: string;
  /** A hairline that reads on `ink` without fighting the text. */
  rule: string;
  /** Catalogue number, e.g. "IH-003". Survives with no colour vision. */
  cat: string;
}

const DARK_INK = "#14110E";
const LIGHT_INK = "#FFFFFF";

/** WCAG relative luminance. */
const luminance = (hex: string): number => {
  const n = parseInt(hex.slice(1), 16);
  const channel = (c: number) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  };
  return (
    0.2126 * channel((n >> 16) & 255) +
    0.7152 * channel((n >> 8) & 255) +
    0.0722 * channel(n & 255)
  );
};

// Pick whichever ink contrasts better, rather than testing luminance against
// a guessed cut-off. The worst ground then still clears 4.8:1.
const needsDarkText = (hex: string): boolean => {
  const L = luminance(hex);
  return (L + 0.05) / (luminance(DARK_INK) + 0.05) >=
    (luminance(LIGHT_INK) + 0.05) / (L + 0.05);
};

const indexFor = (label: string): number => {
  const seat = PROJECT_LABELS.indexOf(label);
  if (seat >= 0) return seat % SWATCHES.length;
  // A label the glob never saw; hash it so it still gets a stable colour.
  let hash = 0;
  for (let i = 0; i < label.length; i++) {
    hash = (hash << 5) - hash + label.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash) % SWATCHES.length;
};

// The one source of colour for a project, so a record visibly belongs to the
// sleeve it came out of.
export const paletteFor = (label: string): SleevePalette => {
  const seat = indexFor(label);
  const ink = SWATCHES[seat];
  const dark = needsDarkText(ink);
  return {
    ink,
    on: dark ? DARK_INK : LIGHT_INK,
    rule: dark ? "rgba(20,17,14,0.35)" : "rgba(255,255,255,0.40)",
    cat: `IH-${String(seat + 1).padStart(3, "0")}`,
  };
};

// One paper grain for every sleeve. Holding the printing constant is what
// makes the shelf read as a set; only the colour and the title change.
export const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' " +
  "width='120' height='120'%3E%3Cfilter id='g'%3E%3CfeTurbulence " +
  "type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E" +
  "%3Crect width='120' height='120' filter='url(%23g)'/%3E%3C/svg%3E\")";
