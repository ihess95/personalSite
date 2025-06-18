function WoodSurface({
  children,
  patternId,
  className = "",
}: {
  children?: React.ReactNode;
  patternId: string;
  className: string;
}) {
  return (
    <div
      className={`relative ${className}`}
      style={{ background: `url(#${patternId})` }}
    >
      {children}
    </div>
  );
}

export default WoodSurface;
