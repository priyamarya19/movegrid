"use client";

export function LogoWordmark({
  height = 36,
  className = "",
}: {
  height?: number;
  className?: string;
}) {
  return (
    <svg
      height={height}
      viewBox="0 0 220 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="MoveGrid"
    >
      {/* Charging plug connector — sits above "Grid" */}
      {/* Cable */}
      <line x1="149" y1="2" x2="149" y2="9" stroke="#3CB54A" strokeWidth="2.2" strokeLinecap="round" />
      {/* Plug body */}
      <rect x="143" y="9" width="12" height="7" rx="1.5" fill="#3CB54A" />
      {/* Plug prongs */}
      <line x1="146" y1="16" x2="146" y2="20" stroke="#3CB54A" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="152" y1="16" x2="152" y2="20" stroke="#3CB54A" strokeWidth="2.2" strokeLinecap="round" />

      {/* "Move" — dark blue */}
      <text
        x="0"
        y="44"
        fontFamily="'Exo 2', 'Exo', 'Rajdhani', 'Arial Black', sans-serif"
        fontWeight="800"
        fontSize="44"
        fill="#1B5FA6"
        letterSpacing="-1"
      >
        Move
      </text>

      {/* "Grid" — green */}
      <text
        x="112"
        y="44"
        fontFamily="'Exo 2', 'Exo', 'Rajdhani', 'Arial Black', sans-serif"
        fontWeight="800"
        fontSize="44"
        fill="#3CB54A"
        letterSpacing="-1"
      >
        Grid
      </text>
    </svg>
  );
}
