// RecordPlayer.tsx - Fixed version
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

function RecordPlayer({ activeRecord }: { activeRecord: string | null }) {
  const [animationState, setAnimationState] = useState<
    "idle" | "transitioning" | "playing"
  >("idle");
  const [currentRecord, setCurrentRecord] = useState<string | null>(null);
  const [previousRecord, setPreviousRecord] = useState<string | null>(null);

  // Handle record transitions
  useEffect(() => {
    if (activeRecord !== currentRecord) {
      // Store the previous record for exit animation
      if (currentRecord) {
        setPreviousRecord(currentRecord);
      }

      if (activeRecord) {
        setAnimationState("transitioning");
        setCurrentRecord(activeRecord);

        // Clear previous record after transition completes
        const clearPrevious = setTimeout(() => {
          setPreviousRecord(null);
        }, 800);

        // Start playing after transition
        const startPlaying = setTimeout(() => {
          setAnimationState("playing");
        }, 800);

        return () => {
          clearTimeout(clearPrevious);
          clearTimeout(startPlaying);
        };
      } else {
        // No active record - return to idle
        setAnimationState("idle");
        setCurrentRecord(null);
        const clearPrevious = setTimeout(() => {
          setPreviousRecord(null);
        }, 800);
        return () => clearTimeout(clearPrevious);
      }
    }
  }, [activeRecord, currentRecord]);

  return (
    <div className="relative">
      {/* Turntable base */}
      <div className="w-64 h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-2xl p-6">
        {/* Platter */}
        <div className="relative w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 rounded-full shadow-inner">
          {/* Platter rim */}
          <div className="absolute inset-2 border-2 border-gray-600 rounded-full"></div>

          {/* Center spindle */}
          <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-gray-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-lg"></div>

          {/* Single record element that handles all states */}
          <AnimatePresence mode="wait">
            {activeRecord && (
              <motion.div
                key={activeRecord}
                layoutId={`record-${activeRecord}`}
                className="absolute inset-4 rounded-full bg-gradient-to-br from-gray-900 via-black to-gray-800"
                initial={false} // Let layoutId handle initial positioning
                animate={
                  animationState === "playing"
                    ? {
                        rotate: [0, 360 * 90], // 90 full rotations over 180 seconds
                      }
                    : {}
                }
                transition={{
                  layout: {
                    duration: 0.8,
                    ease: [0.4, 0, 0.2, 1],
                  },
                  rotate: {
                    duration: 180, // 3 minutes of spinning
                    ease: "linear",
                  },
                  exit: {
                    duration: 0.3,
                  },
                }}
              >
                {/* Record grooves */}
                <div className="absolute inset-1 rounded-full border border-gray-600/40"></div>
                <div className="absolute inset-2 rounded-full border border-gray-600/30"></div>
                <div className="absolute inset-3 rounded-full border border-gray-600/20"></div>
                <div className="absolute inset-4 rounded-full border border-gray-600/15"></div>

                {/* Record label */}
                <div className="absolute inset-14 rounded-full bg-gradient-to-br from-gray-100 to-gray-300 shadow-inner flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <defs>
                      <path
                        id={`player-curve-${activeRecord}`}
                        d="M 25 50 A 25 25 0 0 1 75 50"
                        fill="none"
                      />
                    </defs>
                    <text className="fill-gray-800 text-[15px] font-bold">
                      <textPath
                        href={`#player-curve-${activeRecord}`}
                        startOffset="50%"
                        textAnchor="middle"
                      >
                        {activeRecord.toUpperCase()}
                      </textPath>
                    </text>
                  </svg>
                </div>

                {/* Center hole */}
                <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-black rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Tonearm - simplified animation */}
        <motion.div
          className="absolute -top-0 right-8 w-32 h-2 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full origin-right shadow-lg"
          animate={{
            rotate: animationState === "playing" ? -30 : 0,
          }}
          transition={{
            duration: animationState === "playing" ? 1.5 : 0.6,
            ease: "easeInOut",
            delay: animationState === "playing" ? 0.8 : 0, // Wait for record to arrive
          }}
        >
          <div className="absolute right-0 top-1/2 w-4 h-4 bg-gray-500 rounded-full transform -translate-y-1/2 shadow-md"></div>
          <div className="absolute right-2 top-1/2 w-1 h-8 bg-gray-600 transform -translate-y-1/2 rotate-45"></div>
        </motion.div>
      </div>

      {/* Now Playing indicator */}
      <AnimatePresence>
        {animationState === "playing" && currentRecord && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ delay: 1.2 }}
            className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-4 py-2 rounded-full text-sm font-medium"
          >
            Now Playing: {currentRecord}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default RecordPlayer;
