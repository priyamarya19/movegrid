export function LogoIcon({ size = 48, className = "" }: { size?: number; className?: string }) {
  const green = "#3CB54A";
  const blue = "#2B72C8";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Segmented outer ring */}
      <circle
        cx="50"
        cy="50"
        r="44"
        stroke={green}
        strokeWidth="7.5"
        strokeDasharray="20 5.3"
        strokeLinecap="butt"
        transform="rotate(-90 50 50)"
      />

      {/* Top clockwise arc arrow (left → right, upper half) */}
      <path
        d="M 20 50 A 30 30 0 0 1 74 32"
        stroke={green}
        strokeWidth="5"
        strokeLinecap="round"
      />
      {/* Arrowhead top */}
      <path
        d="M 74 32 L 80 24 L 82 34"
        stroke={green}
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Bottom clockwise arc arrow (right → left, lower half) */}
      <path
        d="M 80 50 A 30 30 0 0 1 26 68"
        stroke={green}
        strokeWidth="5"
        strokeLinecap="round"
      />
      {/* Arrowhead bottom */}
      <path
        d="M 26 68 L 20 76 L 18 66"
        stroke={green}
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Blue "C" arc — center left */}
      <path
        d="M 46 33 A 17 17 0 0 0 46 67"
        stroke={blue}
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
      />

      {/* Green lightning bolt — center */}
      <path
        d="M 57 30 L 45 52 L 54 52 L 43 72 L 64 46 L 54 46 Z"
        fill={green}
      />
    </svg>
  );
}
