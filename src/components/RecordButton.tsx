// RecordButton.tsx - Fixed version
import { motion } from "framer-motion";

interface RecordButtonProps {
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
  label?: string;
  isAnimating?: boolean;
}

function RecordButton({
  isActive = false,
  onClick,
  className = "",
  label,
  isAnimating = false,
}: RecordButtonProps) {
  // Separate the rotation animation from layout animations
  const shouldRotate = isActive && !isAnimating; // Only rotate when playing, not during transition

  return (
    <motion.button
      layoutId={label ? `record-${label}` : undefined}
      onClick={onClick}
      className={`relative w-16 h-16 rounded-full bg-gradient-to-br from-gray-900 via-black to-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 ${className}`}
      // Clean separation of animations
      animate={shouldRotate ? { rotate: 360 } : undefined}
      transition={{
        rotate: {
          duration: 2,
          repeat: shouldRotate ? Infinity : 0,
          ease: "linear",
        },
        layout: {
          duration: 0.8,
          ease: [0.4, 0, 0.2, 1], // Use cubic-bezier instead of spring for more predictable timing
        },
      }}
      // Use CSS transforms for hover effects to avoid conflicts
      whileHover={!isActive ? { scale: 1.05 } : undefined}
      whileTap={!isActive ? { scale: 0.95 } : undefined}
    >
      {/* Noise texture overlay */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-gray-700/20 to-transparent opacity-60"></div>

      {/* Sheen */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-transparent"></div>

      {/* Record grooves */}
      <div className="absolute inset-1 rounded-full border border-gray-600/40"></div>
      <div className="absolute inset-2 rounded-full border border-gray-600/30"></div>
      <div className="absolute inset-3 rounded-full border border-gray-600/20"></div>

      {/* White record label area */}
      <div className="absolute inset-4 rounded-full bg-gradient-to-br from-gray-100 to-gray-300 shadow-inner"></div>

      {/* Small black spindle hole */}
      <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-black rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>

      {/* Curved Label Text */}
      {label && (
        <div className="absolute inset-4 rounded-full flex items-center justify-center pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <defs>
              <path
                id={`curve-${label}`}
                d="M 20 50 A 30 30 0 0 1 80 50"
                fill="none"
              />
            </defs>
            <text className="fill-gray-800 text-[8px] font-bold">
              <textPath
                href={`#curve-${label}`}
                startOffset="50%"
                textAnchor="middle"
              >
                {label.toUpperCase()}
              </textPath>
            </text>
          </svg>
        </div>
      )}
    </motion.button>
  );
}

export default RecordButton;
