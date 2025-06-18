function WoodGrainPattern({ id }: { id: string }) {
  return (
    <pattern
      id={id}
      x="0"
      y="0"
      width="400"
      height="100"
      patternUnits="userSpaceOnUse"
    >
      {/* Base wood color */}
      <rect width="400" height="100" fill="#8B4513" />

      {/* Wood grain lines */}
      <path
        d="M0,20 Q100,15 200,25 T400,20"
        stroke="#654321"
        strokeWidth="1.5"
        fill="none"
        opacity="0.7"
      />
      <path
        d="M0,35 Q150,30 300,40 T400,35"
        stroke="#654321"
        strokeWidth="1"
        fill="none"
        opacity="0.5"
      />
      <path
        d="M0,50 Q80,45 160,55 Q240,60 320,50 Q360,45 400,52"
        stroke="#654321"
        strokeWidth="2"
        fill="none"
        opacity="0.8"
      />
      <path
        d="M0,65 Q120,60 240,70 T400,65"
        stroke="#654321"
        strokeWidth="1"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M0,80 Q90,75 180,85 Q270,90 360,80 Q380,75 400,82"
        stroke="#654321"
        strokeWidth="1.5"
        fill="none"
        opacity="0.7"
      />

      {/* Knots and imperfections */}
      <ellipse cx="80" cy="45" rx="8" ry="4" fill="#5D4037" opacity="0.6" />
      <ellipse cx="220" cy="30" rx="6" ry="3" fill="#5D4037" opacity="0.5" />
      <ellipse cx="350" cy="60" rx="7" ry="3.5" fill="#5D4037" opacity="0.6" />

      {/* Subtle highlights */}
      <path
        d="M0,18 Q100,13 200,23 T400,18"
        stroke="#A0522D"
        strokeWidth="0.5"
        fill="none"
        opacity="0.8"
      />
      <path
        d="M0,48 Q80,43 160,53 Q240,58 320,48 Q360,43 400,50"
        stroke="#A0522D"
        strokeWidth="0.5"
        fill="none"
        opacity="0.8"
      />
    </pattern>
  );
}

export default WoodGrainPattern;
