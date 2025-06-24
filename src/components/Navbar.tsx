import DustSleeve from "./DustSleeve";
import { useState } from "react";

function NavBar({
  onRecordSelect,
  activeRecord,
}: {
  onRecordSelect: (label: string) => void;
  activeRecord: string | null;
}) {
  const [hoveredRecord, setHoveredRecord] = useState<string | null>(null);
  const recordFiles = import.meta.glob("./portfolioProjects/*.tsx", {
    eager: true,
  });

  const records = Object.keys(recordFiles).map(
    (path) => path.split("/").pop()?.replace(".tsx", "") ?? ""
  );

  return (
    <nav className="relative overflow-hidden">
      {/* Shelf Content */}
      <div className="relative z-10">
        {/* Shelf edge */}
        <div className="h-2 bg-wood-light shadow-inner"></div>

        {/* Main shelf surface */}
        <div className="flex gap-6 items-end justify-center px-8 py-4 bg-wood-main">
          {records.map((label) => (
            <DustSleeve
              key={label}
              label={label}
              isHovered={hoveredRecord === label}
              onHover={(hovered) => setHoveredRecord(hovered ? label : null)}
              onClick={() => onRecordSelect(label)}
              isActive={activeRecord === label}
            />
          ))}
        </div>

        {/* Shelf front edge */}
        <div className="h-1 bg-wood-dark"></div>
      </div>
    </nav>
  );
}

export default NavBar;
