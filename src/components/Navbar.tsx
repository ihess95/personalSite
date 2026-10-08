import DustSleeve from "./DustSleeve";
import { useState } from "react";
import { PROJECT_LABELS } from "../projects";

function NavBar({
  onRecordSelect,
  activeRecord,
  flyingRecord,
}: {
  onRecordSelect: (label: string) => void;
  activeRecord: string | null;
  /** The record currently in the air between a sleeve and the platter. */
  flyingRecord?: string | null;
}) {
  const [hoveredRecord, setHoveredRecord] = useState<string | null>(null);
  return (
    <nav className="relative overflow-hidden">
      {/* Shelf Content */}
      <div className="relative z-10">
        {/* The lit top edge of the board */}
        <div className="h-1.5 bg-wood-light"></div>

        {/* Main shelf surface */}
        <div className="flex items-end justify-center gap-6 bg-wood-main px-8 pb-3 pt-5">
          {PROJECT_LABELS.map((label) => (
            <DustSleeve
              key={label}
              label={label}
              isHovered={hoveredRecord === label}
              onHover={(hovered) => setHoveredRecord(hovered ? label : null)}
              onClick={() => onRecordSelect(label)}
              isActive={activeRecord === label}
              inFlight={flyingRecord === label}
            />
          ))}
        </div>

        {/* The lip underneath, in shadow */}
        <div className="h-2 bg-wood-dark"></div>
      </div>
    </nav>
  );
}

export default NavBar;
