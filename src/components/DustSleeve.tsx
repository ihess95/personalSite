import { motion } from "framer-motion";
// Utility function to convert camelCase/PascalCase to spaced words - I think I may want to refactor this into it's own file so it's usable globally
const formatDisplayName = (label: string): string => {
  return (
    label
      // Insert a space before any uppercase letter that follows a lowercase letter
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      // Insert a space before any uppercase letter that follows a number
      .replace(/([0-9])([A-Z])/g, "$1 $2")
      // Capitalize the first letter
      .replace(/^./, (str) => str.toUpperCase())
  );
};

function DustSleeve({
  label,
  isHovered,
  onHover,
  onClick,
  isActive,
}: {
  label: string;
  isHovered: boolean;
  onHover: (hovered: boolean) => void;
  onClick: () => void;
  isActive: boolean;
}) {
  return (
    <div
      className="relative cursor-pointer"
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      onClick={onClick}
    >
      {/* Dust Sleeve*/}
      <motion.div
        className="w-20 h-20 bg-gradient-to-br from-slate-300 to-slate-500 border border-slate-300 shadow-md relative overflow-hidden z-10"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        {/* Sleeve texture */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-slate-200/30 to-slate-300/20"></div>

        {/* Corner Wear */}
        <div className="absolute top-0 right-0 w-3 h-3 bg-slate-300/40 transform rotate-45 translate-x-1 -translate-y-1"></div>

        {/* Label text on sleeve */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-2 text-center">
          <span className="text-xs font-bold text-amber-800 leading-tight">
            {formatDisplayName(label)}
          </span>
          <span className="text-[10px] text-amber-700 mt-1">PROJECT</span>
        </div>

        {/* Sleeve opening indication */}
        <div className="absolute right-0 top-0 bottom-0 w-0.5 bg-slate-400/60" />
      </motion.div>

      {/* Record that animates to player - only show when NOT active */}
      {!isActive && (
        <motion.div
          layoutId={`record-${label}`} // This matches the layoutId in RecordPlayer
          className="absolute top-1 right-0 z-0"
          initial={{ x: -12 }}
          animate={{
            x: isHovered ? 8 : -12,
          }}
          transition={{
            x: { duration: 0.3, ease: "easeOut" },
            layout: {
              duration: 0.8,
              ease: "easeInOut",
            },
          }}
        >
          {/* Simplified record for shelf */}
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-900 via-black to-gray-800 shadow-lg relative">
            {/* Record grooves */}
            <div className="absolute inset-1 rounded-full border border-gray-600/40"></div>
            <div className="absolute inset-2 rounded-full border border-gray-600/30"></div>
            <div className="absolute inset-3 rounded-full border border-gray-600/20"></div>
            <div className="absolute inset-4 rounded-full border border-gray-600/15"></div>

            {/* Record label */}
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-gray-100 to-gray-300 shadow-inner flex items-center justify-center">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <defs>
                  <path
                    id={`shelf-curve-${label}`}
                    d="M 25 50 A 25 25 0 0 1 75 50"
                    fill="none"
                  />
                </defs>
                <text className="fill-gray-800 text-[8px] font-bold">
                  <textPath
                    href={`#shelf-curve-${label}`}
                    startOffset="50%"
                    textAnchor="middle"
                  >
                    {label.toUpperCase()}
                  </textPath>
                </text>
              </svg>
            </div>

            {/* Center hole */}
            <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-black rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default DustSleeve;
