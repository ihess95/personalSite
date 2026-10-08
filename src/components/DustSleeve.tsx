import { motion } from "framer-motion";
import Vinyl from "./Vinyl";
import { formatDisplayName, paletteFor, GRAIN } from "../recordArt";

function DustSleeve({
  label,
  isHovered,
  onHover,
  onClick,
  isActive,
  inFlight = false,
}: {
  label: string;
  isHovered: boolean;
  onHover: (hovered: boolean) => void;
  onClick: () => void;
  isActive: boolean;
  /** True while App is flying a copy of this record to or from the platter. */
  inFlight?: boolean;
}) {
  const palette = paletteFor(label);
  const title = formatDisplayName(label);

  return (
    <div
      className="relative"
      // Hover pulls the record past the gap between sleeves, so the stack
      // has to lift or the next sleeve paints over it.
      style={{ zIndex: isHovered ? 20 : isActive ? 10 : 1 }}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
    >
      <motion.button
        type="button"
        onClick={onClick}
        aria-pressed={isActive}
        aria-label={`${title}${isActive ? ", now playing" : ""}`}
        className="relative z-10 block h-24 w-24 overflow-hidden text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-amber-900"
        style={{
          background: palette.ink,
          border: `1px solid ${palette.rule}`,
          // Pulled forward out of the shelf: the strongest selected cue,
          // and the one that owes nothing to colour.
          boxShadow: isActive
            ? "0 14px 20px -8px rgba(0,0,0,0.7)"
            : "0 2px 4px -1px rgba(0,0,0,0.3)",
        }}
        animate={{ y: isActive ? -12 : 0 }}
        whileHover={{ y: isActive ? -16 : -4 }}
        whileTap={{ y: isActive ? -14 : -2 }}
        transition={{ type: "spring", stiffness: 420, damping: 30 }}
      >
        {/* Paper grain. Overlay blends it into the colour rather than
            laying a grey film over the top. */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: GRAIN,
            mixBlendMode: "overlay",
            opacity: 0.16,
          }}
        />

        {/* Card stock: light catches the top edge, the bottom sits in shadow. */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(170deg, rgba(255,255,255,0.18), rgba(255,255,255,0) 38%, rgba(0,0,0,0.22))",
          }}
        />

        {/* The open edge the record slides out of. */}
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-[3px]"
          style={{
            background:
              "linear-gradient(to left, rgba(0,0,0,0.45), rgba(0,0,0,0))",
          }}
        />

        {/* Printed matter. Identical placement on every sleeve. */}
        <div className="relative flex h-full flex-col justify-between p-2">
          <div
            className="flex items-start justify-between text-[7px] font-semibold tracking-[0.14em]"
            style={{ color: palette.on, opacity: isActive ? 1 : 0.7 }}
          >
            <span>{palette.cat}</span>
            <span aria-hidden="true">{isActive ? "PLAYING" : "33⅓"}</span>
          </div>

          <h2
            // Explicit font-sans: the base layer sets every h2 in the
            // display serif, which is the wrong face at 10px.
            className="text-center font-sans text-[10px] font-bold leading-[1.15]"
            style={{ color: palette.on, textWrap: "balance" }}
          >
            {title}
          </h2>

          <div
            className="h-px w-full"
            style={{ background: palette.rule }}
            aria-hidden="true"
          />
        </div>

        {/* Selected, by four cues and none of them hue: lifted and
            shadowed above, the record gone from behind it, an empty
            interior, and a band in its own ink. */}
        {isActive && (
          <>
            <div
              className="pointer-events-none absolute inset-0"
              style={{ boxShadow: "inset 0 0 20px 5px rgba(0,0,0,0.5)" }}
            />
            <div
              className="pointer-events-none absolute inset-[3px]"
              style={{ border: `1.5px solid ${palette.on}` }}
            />
          </>
        )}
      </motion.button>

      {/* The record in the sleeve. It does not travel to the turntable
          itself; App measures it and flies a fixed copy instead. */}
      {!isActive && (
        <motion.div
          data-vinyl={`shelf-${label}`}
          className="pointer-events-none absolute right-0 top-2 z-0 h-20 w-20"
          // A sliver shows past the open edge at rest, so the sleeve reads
          // as holding something. Hover pulls it out.
          initial={{ x: 3 }}
          animate={{ x: isHovered ? 30 : 3, opacity: inFlight ? 0 : 1 }}
          transition={{ x: { type: "spring", stiffness: 380, damping: 32 } }}
        >
          <Vinyl label={label} id={`shelf-${label}`} />
        </motion.div>
      )}

    </div>
  );
}

export default DustSleeve;
