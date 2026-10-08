import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import ProjectDisplayHandler from "./ProjectDisplayHandler";
import { formatDisplayName, paletteFor } from "../recordArt";
import { MODE_ORDER, sectionsFor, type ProjectMode } from "../projects";

// The panel is paper rather than another dark surface: liner notes are
// printed, and the reading copy here runs long.
function ContentArea({ activeRecord }: { activeRecord: string | null }) {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [currentMode, setCurrentMode] = useState<ProjectMode>("abstract");

  // Reset to abstract when activeRecord changes
  useEffect(() => {
    setCurrentMode("abstract");
  }, [activeRecord]);

  const palette = activeRecord ? paletteFor(activeRecord) : null;
  // Each project names its own sections; the coursework keeps the defaults.
  const labels = activeRecord ? sectionsFor(activeRecord) : null;
  const title = activeRecord ? formatDisplayName(activeRecord) : null;

  if (isFullScreen && activeRecord) {
    return (
      <motion.div
        className="fixed inset-0 z-50 overflow-y-auto bg-paper"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="sticky top-0 flex items-center justify-between border-b border-paper-shade bg-paper/95 px-6 py-4 backdrop-blur">
          <h1 className="text-xl font-semibold text-paper-ink">{title}</h1>
          <button
            onClick={() => setIsFullScreen(false)}
            className="rounded-sm px-3 py-1.5 font-sans text-sm font-medium text-paper-muted transition-colors hover:bg-paper-shade hover:text-paper-ink"
          >
            &larr; Back to the shelf
          </button>
        </div>

        <div className="mx-auto max-w-3xl px-6 py-10 font-book text-lg leading-relaxed text-paper-ink">
          <ProjectDisplayHandler
            projectLabel={activeRecord.toLowerCase()}
            mode="full"
          />
        </div>
      </motion.div>
    );
  }

  return (
    <div className="w-full">
      {/* No framer `layout`: it animates a height change by scaling the
          box, which squashes the text inside while it runs. */}
      <div className="overflow-hidden rounded-sm bg-paper shadow-[0_28px_60px_-24px_rgba(0,0,0,0.85)]">
        {!activeRecord ? (
          <div className="px-8 py-20 text-center">
            <h2 className="text-2xl font-semibold text-paper-ink">
              Nothing on the turntable
            </h2>
            <p className="mx-auto mt-3 max-w-sm font-book text-lg text-paper-muted">
              Pick a record off the shelf above to read about the project.
            </p>
          </div>
        ) : (
          <>
            {/* Sleeve colour and catalogue number carry over, so the panel
                is visibly the same release as the record playing. */}
            <header
              className="border-b border-paper-shade px-8 pb-6 pt-7"
              style={{ borderTop: `3px solid ${palette?.ink}` }}
            >
              <motion.div
                key={activeRecord}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-paper-muted">
                  {palette?.cat}
                </p>
                <h2 className="mt-2 text-3xl font-semibold text-paper-ink">
                  {title}
                </h2>
              </motion.div>

              <nav className="-mb-6 mt-6 flex flex-wrap gap-6">
                {MODE_ORDER.map((mode) => {
                  const active = currentMode === mode;
                  return (
                    <button
                      key={mode}
                      onClick={() => setCurrentMode(mode)}
                      aria-current={active ? "page" : undefined}
                      className={`relative pb-3 font-sans text-sm font-medium transition-colors ${
                        active
                          ? "text-paper-ink"
                          : "text-paper-muted hover:text-paper-ink"
                      }`}
                    >
                      {labels?.[mode]}
                      {active && (
                        <motion.span
                          layoutId="mode-underline"
                          className="absolute inset-x-0 -bottom-px h-0.5"
                          style={{ background: palette?.ink }}
                        />
                      )}
                    </button>
                  );
                })}
              </nav>
            </header>

            {/* Content flows and the page scrolls. A fixed-height inner
                scroller would clip the Book Music demo. */}
            {/* A keyed fade-in rather than AnimatePresence mode="wait",
                which holds the incoming panel until the outgoing one has
                finished exiting and can strand the reader on an empty one. */}
            <div className="px-8 py-8">
              <motion.div
                key={`${activeRecord}-${currentMode}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                <div
                  className={`font-book text-[20px] leading-relaxed text-paper-ink ${
                    currentMode === "full" ? "" : "measure"
                  }`}
                >
                  <ProjectDisplayHandler
                    projectLabel={activeRecord.toLowerCase()}
                    mode={currentMode}
                  />
                </div>

                {currentMode !== "full" && (
                  <button
                    onClick={() => setIsFullScreen(true)}
                    className="mt-8 rounded-sm border border-paper-shade px-4 py-2 font-sans text-sm font-medium text-paper-ink transition-colors hover:bg-paper-shade"
                  >
                    Read full screen
                  </button>
                )}
              </motion.div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ContentArea;
