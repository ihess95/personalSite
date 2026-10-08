import { useState, useRef, useLayoutEffect } from "react";
import NavBar from "./components/Navbar";
import RecordPlayer from "./components/RecordPlayer";
import ContentArea from "./components/ContentArea";
import Vinyl from "./components/Vinyl";

const FLIGHT_MS = 750;

type Flight = { label: string; from: DOMRect; to: DOMRect };

const rectOf = (selector: string): DOMRect | null =>
  document.querySelector(selector)?.getBoundingClientRect() ?? null;

// Skip the flight unless at least this much of the deck is on screen.
const WATCHABLE = 0.9;

// Fraction of a rect on screen. The shelf is sticky and opaque, so the band
// behind it does not count as visible.
const onScreenFraction = (r: DOMRect): number => {
  if (r.width <= 0 || r.height <= 0) return 0;
  const shelfBottom = rectOf("[data-shelf]")?.bottom ?? 0;
  const visibleY =
    Math.min(r.bottom, window.innerHeight) - Math.max(r.top, shelfBottom);
  const visibleX = Math.min(r.right, window.innerWidth) - Math.max(r.left, 0);
  return (Math.max(0, visibleX) * Math.max(0, visibleY)) / (r.width * r.height);
};

export default function App() {
  const [activeRecord, setActiveRecord] = useState<string | null>(null);

  // A record in the air between a sleeve and the platter. Both ends are
  // measured in viewport coordinates and a fixed copy is flown between them,
  // so the sticky shelf and the scroll position cannot skew the path.
  const [flight, setFlight] = useState<Flight | null>(null);
  const takeoff = useRef<{ label: string; from: DOMRect } | null>(null);

  const handleRecordSelect = (label: string) => {
    const putAway = activeRecord === label;
    // Measure while the source is still mounted.
    const from = putAway
      ? rectOf('[data-vinyl="platter"]')
      : rectOf(`[data-vinyl="shelf-${label}"]`);
    takeoff.current = from ? { label, from } : null;
    setActiveRecord(putAway ? null : label);
  };

  // Before paint, so the destination is measured and hidden in one frame.
  useLayoutEffect(() => {
    const t = takeoff.current;
    takeoff.current = null;
    if (!t) return;
    const reduced = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced) return;
    const to = activeRecord
      ? rectOf('[data-vinyl="platter"]')
      : rectOf(`[data-vinyl="shelf-${t.label}"]`);
    if (!to) return;

    // The deck, not the record on it: the record only exists while
    // something is playing, so it is not there to measure on the way out.
    const deck = rectOf("[data-deck]");
    if (!deck || onScreenFraction(deck) < WATCHABLE) return;

    setFlight({ label: t.label, from: t.from, to });
  }, [activeRecord]);

  const flyer = useRef<HTMLDivElement>(null);

  // element.animate rather than a framer tween: it starts on the call, so the
  // copy never sits still for a frame, and it can be seeked in a test.
  useLayoutEffect(() => {
    const node = flyer.current;
    if (!flight || !node) return;
    const dx = flight.to.left - flight.from.left;
    const dy = flight.to.top - flight.from.top;
    const scale = flight.to.width / flight.from.width;

    const anim = node.animate(
      [
        { transform: "translate(0px, 0px) scale(1)" },
        { transform: `translate(${dx}px, ${dy}px) scale(${scale})` },
      ],
      {
        duration: FLIGHT_MS,
        easing: "cubic-bezier(0.4, 0, 0.2, 1)",
        fill: "forwards",
      },
    );
    anim.onfinish = () => setFlight(null);

    // Both ends are hidden while it flies, so the copy must always clear
    // itself even if onfinish never arrives.
    const safety = setTimeout(() => setFlight(null), FLIGHT_MS + 400);
    return () => {
      clearTimeout(safety);
      anim.cancel();
    };
  }, [flight]);

  return (
    // Plain div. A framer `layout` here transforms the root while it
    // animates, and a transformed ancestor breaks the sticky shelf.
    <div className="min-h-screen bg-ink text-cream">
      <div
        data-shelf
        className="sticky top-0 z-30 bg-ink shadow-[0_10px_30px_-12px_rgba(0,0,0,0.9)]"
      >
        <NavBar
          onRecordSelect={handleRecordSelect}
          activeRecord={activeRecord}
          flyingRecord={flight?.label ?? null}
        />
      </div>

      <div className="mx-auto max-w-6xl px-6 pb-20 pt-10">
        <div className="grid justify-center gap-10 grid-cols-[minmax(0,44rem)] lg:grid-cols-[17rem_minmax(0,44rem)]">
          <div>
            <div className="lg:sticky lg:top-[158px]">
              <div className="flex justify-center lg:justify-start">
                <RecordPlayer
                  activeRecord={activeRecord}
                  inFlight={flight?.label === activeRecord && flight !== null}
                />
              </div>
            </div>
          </div>
          <ContentArea activeRecord={activeRecord} />
        </div>
      </div>

      {/* Fixed, to match the space the endpoints were measured in. */}
      {flight && (
        <div
          ref={flyer}
          data-flyer={flight.label}
          className="pointer-events-none fixed z-40"
          style={{
            left: flight.from.left,
            top: flight.from.top,
            width: flight.from.width,
            height: flight.from.height,
            transformOrigin: "top left",
          }}
        >
          <Vinyl label={flight.label} id="in-flight" />
        </div>
      )}
    </div>
  );
}
