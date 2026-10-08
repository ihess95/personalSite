import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { paletteFor } from "../recordArt";

const getInitials = (text: string) => {
  return text
    .split(" ")
    .map((word) => word.charAt(0))
    .join("")
    .toUpperCase()
    .substring(0, 3); // Max 3 initials to keep it readable
};

interface RecordButtonProps {
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
  label?: string;
  isAnimating?: boolean;
  globalActiveRecord?: string | null;
}

function RecordButton({
  isActive = false,
  onClick,
  className = "",
  label,
  isAnimating = false,
  globalActiveRecord,
}: RecordButtonProps) {
  const [localIsActive, setLocalIsActive] = useState(isActive);

  useEffect(() => {
    if (isActive) {
      setLocalIsActive(true);
    } else if (globalActiveRecord && globalActiveRecord !== label) {
      const timer = setTimeout(() => {
        setLocalIsActive(false);
      }, 100);
      return () => clearTimeout(timer);
    } else if (!globalActiveRecord) {
      setLocalIsActive(false);
    }
  }, [isActive, globalActiveRecord, label]);

  const shouldRotate = localIsActive && !isAnimating;

  // The label wears the colour of the project's sleeve.
  const palette = label ? paletteFor(label) : null;

  return (
    <motion.button
      layoutId={label ? `record-${label}` : undefined}
      onClick={onClick}
      className={`relative w-32 h-32 rounded-full bg-gradient-to-br from-gray-900 via-black to-gray-800 shadow-2xl border-2 border-gray-700 transition-all duration-300 hover:shadow-3xl focus:outline-none focus:ring-4 focus:ring-blue-500/30 ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      animate={{
        rotate: shouldRotate ? 360 : 0,
      }}
      transition={{
        rotate: {
          duration: 3,
          ease: "linear",
          repeat: shouldRotate ? Infinity : 0,
        },
        layout: {
          duration: 0.8,
          ease: "easeInOut",
        },
      }}
    >
      {/* Noise texture overlay */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-white/5 to-transparent pointer-events-none"></div>

      {/* Sheen */}
      <div className="absolute top-4 left-4 w-8 h-8 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-sm pointer-events-none"></div>

      {/* Record grooves */}
      <div className="absolute inset-2 rounded-full border border-gray-600/60"></div>
      <div className="absolute inset-4 rounded-full border border-gray-600/40"></div>
      <div className="absolute inset-6 rounded-full border border-gray-600/30"></div>
      <div className="absolute inset-8 rounded-full border border-gray-600/20"></div>

      {/* Colored record label area - now uses matching colors */}
      <div
        className="absolute inset-8 flex items-center justify-center rounded-full shadow-inner"
        style={{ background: palette?.ink ?? "#E5E7EB" }}
      >
        {/* Small black spindle hole */}
        <div className="absolute w-2 h-2 bg-black rounded-full z-20"></div>

        {/* Initials Label */}
        {label && (
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <span
              className="text-sm font-bold tracking-wider"
              style={{ color: palette?.on }}
            >
              {getInitials(label)}
            </span>
          </div>
        )}
      </div>
    </motion.button>
  );
}

export default RecordButton;
