import { formatDisplayName, paletteFor, LABEL_ARC_LENGTH } from "../recordArt";

// A record, sized to its container. Proportions are percentages so the
// sleeve, the platter and the flying copy can share one component.
function Vinyl({ label, id }: { label: string; id?: string }) {
  const palette = paletteFor(label);
  const title = formatDisplayName(label);
  const pathId = `vinyl-arc-${id ?? label}`;

  return (
    <div
      className="relative h-full w-full rounded-full bg-gradient-to-br from-[#121212] via-black to-[#1b1b1b] shadow-lg"
      aria-hidden="true"
    >
      {/* Grooves */}
      {[2, 5.5, 9, 13].map((pct) => (
        <div
          key={pct}
          className="absolute rounded-full border border-cream/[0.08]"
          style={{ inset: `${pct}%` }}
        />
      ))}

      {/* Label, in the sleeve's own colour */}
      <div
        className="absolute flex items-center justify-center rounded-full shadow-inner"
        style={{ inset: "28%", background: palette.ink }}
      >
        <svg className="h-full w-full" viewBox="0 0 100 100">
          <defs>
            <path id={pathId} d="M 25 50 A 25 25 0 0 1 75 50" fill="none" />
          </defs>
          <text
            className="text-[11px] font-bold"
            fill={palette.on}
            style={{ letterSpacing: "0.04em" }}
          >
            <textPath
              href={`#${pathId}`}
              startOffset="50%"
              textAnchor="middle"
              textLength={LABEL_ARC_LENGTH}
              lengthAdjust="spacingAndGlyphs"
            >
              {title.toUpperCase()}
            </textPath>
          </text>
        </svg>
      </div>

      {/* Spindle hole */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ink-deep"
        style={{ width: "3.5%", height: "3.5%" }}
      />
    </div>
  );
}

export default Vinyl;
