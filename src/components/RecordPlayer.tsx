import { useState, useEffect } from "react";
import Vinyl from "./Vinyl";
import { formatDisplayName } from "../recordArt";

// How long a side runs. Matches the tonearm sweep.
const SIDE_LENGTH_MS = 180000;

/* The arm's own timing and angles live with its keyframes, in index.css. */

function RecordPlayer({
  activeRecord,
  inFlight = false,
}: {
  activeRecord: string | null;
  /** True while App is flying a copy of this record to or from the shelf. */
  inFlight?: boolean;
}) {
  const [animationState, setAnimationState] = useState<
    "idle" | "transitioning" | "playing"
  >("idle");

  useEffect(() => {
    if (activeRecord && animationState === "idle") {
      setAnimationState("transitioning");
      const transitionTimer = setTimeout(
        () => setAnimationState("playing"),
        800,
      );
      return () => clearTimeout(transitionTimer);
    } else if (!activeRecord) {
      setAnimationState("idle");
    }
  }, [activeRecord]); // Only depend on activeRecord changes

  // The side runs out and the deck stops. Restarted from the power lamp.
  useEffect(() => {
    if (animationState !== "playing") return;
    const id = setTimeout(() => setAnimationState("idle"), SIDE_LENGTH_MS);
    return () => clearTimeout(id);
  }, [animationState]);

  const playing = animationState === "playing";

  return (
    <div className="relative">
      {/* 288 tall against a 256 platter leaves a strip of deck face to
          print on. These paddings put the platter at 208 square; change one
          and it becomes an ellipse, since it is rounded-full on h/w-full. */}
      <div
        data-deck
        className="relative h-72 w-64 rounded-sm bg-gradient-to-br from-[#3b352c] via-[#2a251e] to-[#17140f] px-6 pb-14 pt-6 shadow-[0_28px_56px_-18px_rgba(0,0,0,0.95)] ring-1 ring-brass/20"
      >
        {/* Platter */}
        <div className="relative h-full w-full rounded-full bg-gradient-to-br from-[#262119] to-[#120f0b] shadow-[inset_0_2px_10px_rgba(0,0,0,0.8)] ring-1 ring-brass/25">
          {/* Machined rings in the mat */}
          <div className="pointer-events-none absolute inset-[6px] rounded-full border border-brass/15" />
          <div className="pointer-events-none absolute inset-[14px] rounded-full border border-brass/[0.07]" />

          {/* Slipmat, screened twice so it reads from either side of the
              deck. Hence the two marks meeting at the spindle. */}
          <div
            className="pointer-events-none absolute inset-0 flex select-none flex-col items-center justify-center overflow-hidden rounded-full"
            aria-hidden="true"
          >
            {/* The platter is lit top-left, so the upper mark needs more
                alpha to match. Matched by eye, not by number. */}
            <span className="font-display text-[34px] font-bold leading-[0.92] tracking-tight text-cream/[0.13]">
              Ian Hess
            </span>
            <span className="rotate-180 font-display text-[34px] font-bold leading-[0.92] tracking-tight text-cream/[0.09]">
              Ian Hess
            </span>
          </div>

          {/* Spindle */}
          <div className="absolute left-1/2 top-1/2 z-10 h-[7px] w-[7px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brass shadow-[0_0_5px_rgba(201,166,107,0.45)]" />

          {activeRecord && (
            <div
              data-vinyl="platter"
              className="platter-spin absolute inset-4 transition-opacity duration-200"
              style={{
                // Hidden but still laid out while the copy is in the air,
                // so App can measure where it lands.
                opacity: inFlight ? 0 : 1,
                animationPlayState: playing ? "running" : "paused",
              }}
            >
              <Vinyl label={activeRecord} id="platter" />
            </div>
          )}
        </div>

        {/* Deck face: maker's mark, nomenclature and power lamp, laid out
            the way an SL-1200 prints them. The name is the page's h1. */}
        <div className="absolute inset-x-6 bottom-0 flex h-14 items-center">
          <div>
            <h1
              className="font-display text-[17px] font-bold leading-none text-brass"
              style={{
                // A dark edge below and a faint light one above reads as
                // stamped into the face rather than printed on it.
                textShadow:
                  "0 1px 0 rgba(0,0,0,0.65), 0 -1px 0 rgba(255,255,255,0.07)",
              }}
            >
              Ian Hess
            </h1>
            <p className="mt-[3px] font-sans text-[7.5px] font-medium uppercase tracking-[0.05em] text-cream-muted/70">
              Software Portfolio System&nbsp;&nbsp;IH-1200
            </p>
          </div>
        </div>

        <PowerLamp
          className="absolute bottom-2.5 right-2.5"
          enabled={Boolean(activeRecord)}
          playing={playing}
          onToggle={() => setAnimationState(playing ? "idle" : "playing")}
        />

        {/* Tonearm. Keyframes are in index.css. */}
        <div
          className={`tonearm absolute right-8 top-0 h-1.5 w-32 origin-right rounded-full bg-gradient-to-r from-brass-deep to-brass shadow-lg ${
            playing ? "tonearm-playing" : ""
          }`}
        >
          <div className="absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-brass shadow-md" />
          <div className="absolute right-2 top-1/2 h-8 w-1 -translate-y-1/2 rotate-45 bg-brass-deep" />
        </div>
      </div>
      <p className="mx-auto mt-6 min-h-[4.5rem] max-w-sm text-center font-book text-lg leading-snug text-cream-muted lg:mx-0 lg:text-left">
        {!activeRecord ? (
          "Software projects and coursework. Pull a record off the shelf to learn more."
        ) : (
          <>
            <span className="block font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-brass">
              {playing ? "Now Playing" : "Stopped"}
            </span>
            <span className="text-cream">
              {formatDisplayName(activeRecord)}
            </span>
          </>
        )}
      </p>
    </div>
  );
}

// Starts the deck again after a side runs out. The lamp reads by brightness
// and by its label, never by hue: a red/green LED would not be legible to a
// red-green colourblind reader.
function PowerLamp({
  enabled,
  playing,
  onToggle,
  className = "",
}: {
  enabled: boolean;
  playing: boolean;
  onToggle: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      disabled={!enabled}
      aria-pressed={playing}
      aria-label={
        !enabled
          ? "No record on the deck"
          : playing
            ? "Stop the record"
            : "Start the record"
      }
      title={!enabled ? "Put a record on first" : playing ? "Stop" : "Start"}
      className={`group flex flex-col items-center gap-[3px] rounded-sm p-1 transition-opacity disabled:cursor-default disabled:opacity-40 ${className}`}
    >
      <span
        className="h-2.5 w-2.5 rounded-full transition-all duration-300"
        style={{
          background: playing ? "#f0c674" : "#2a241c",
          boxShadow: playing
            ? "0 0 9px 2px rgba(240,198,116,0.65), inset 0 0 2px rgba(255,255,255,0.8)"
            : "inset 0 1px 2px rgba(0,0,0,0.9)",
        }}
      />
      <span className="font-sans text-[6.5px] font-semibold uppercase tracking-[0.1em] text-cream-muted/70 group-enabled:group-hover:text-brass">
        {playing ? "Stop" : "Start"}
      </span>
    </button>
  );
}

export default RecordPlayer;
