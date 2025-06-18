function DarkWoodGrainPattern({ id }: { id: string }) {
  return (
    <pattern
      id={id}
      x="0"
      y="0"
      width="400"
      height="20"
      patternUnits="userSpaceOnUse"
    >
      <rect width="400" height="20" fill="#654321" />
      <path
        d="M0,8 Q100,6 200,10 T400,8"
        stroke="#4A2C17"
        strokeWidth="1"
        fill="none"
        opacity="0.8"
      />
      <path
        d="M0,15 Q150,13 300,17 T400,15"
        stroke="#4A2C17"
        strokeWidth="0.5"
        fill="none"
        opacity="0.6"
      />
    </pattern>
  );
}

export default DarkWoodGrainPattern;
