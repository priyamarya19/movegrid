export default function EarnIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 560 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-auto ${className}`}
      aria-hidden="true"
    >
      <rect width="560" height="280" rx="20" fill="#0D0D14" />

      {/* ── Road ── */}
      <rect x="0" y="210" width="560" height="40" fill="#12121A" />
      <line x1="0" y1="230" x2="560" y2="230" stroke="#1E1E2E" strokeWidth="1" />
      {/* Road dashes */}
      {[20, 90, 160, 230, 300, 370, 440, 510].map((x, i) => (
        <rect key={i} x={x} y="227" width="40" height="4" rx="2" fill="#2A2A3E" />
      ))}

      {/* ── Three riders at different positions showing progression ── */}

      {/* Rider 1 — small / early (left) */}
      <g transform="translate(52, 155)" opacity="0.5">
        {/* Scooter */}
        <circle cx="10" cy="42" r="12" fill="#1A1A2A" stroke="#888" strokeWidth="2" />
        <circle cx="62" cy="42" r="12" fill="#1A1A2A" stroke="#888" strokeWidth="2" />
        <path d="M 14 42 L 16 26 L 32 20 L 48 19 L 56 28 L 58 42 Z" fill="#D0D0D0" />
        <rect x="22" y="24" width="22" height="6" rx="1" fill="#3CB54A" opacity="0.8" />
        {/* Rider */}
        <ellipse cx="38" cy="10" rx="10" ry="10" fill="#1E1E2E" stroke="#3CB54A" strokeWidth="1.5" />
        <rect x="28" y="20" width="20" height="22" rx="2" fill="#12121A" />
        <rect x="31" y="25" width="14" height="5" rx="1" fill="#3CB54A" opacity="0.7" />
      </g>

      {/* Rider 2 — medium (center) */}
      <g transform="translate(210, 145)" opacity="0.75">
        {/* Scooter */}
        <circle cx="14" cy="50" r="15" fill="#1A1A2A" stroke="#B0B0B0" strokeWidth="2.5" />
        <circle cx="78" cy="50" r="15" fill="#1A1A2A" stroke="#B0B0B0" strokeWidth="2.5" />
        <path d="M 18 50 L 22 28 L 42 20 L 62 19 L 72 34 L 74 50 Z" fill="#E8E8E8" />
        <rect x="28" y="26" width="28" height="7" rx="2" fill="#3CB54A" opacity="0.9" />
        <text x="30" y="32" fill="white" fontSize="4.5" fontFamily="'Exo 2', sans-serif" fontWeight="800">MoveGrid</text>
        {/* Rider */}
        <ellipse cx="46" cy="10" rx="13" ry="12" fill="#1E1E2E" stroke="#3CB54A" strokeWidth="2" />
        <rect x="33" y="22" width="26" height="28" rx="2" fill="#12121A" />
        <rect x="37" y="28" width="18" height="7" rx="2" fill="#3CB54A" opacity="0.85" />
        <text x="38" y="33.5" fill="white" fontSize="4" fontFamily="'Exo 2', sans-serif" fontWeight="800">MoveGrid</text>
        {/* Motion lines */}
        <line x1="-8" y1="46" x2="8" y2="48" stroke="#00C48C" strokeWidth="1.5" opacity="0.4" strokeLinecap="round" />
        <line x1="-10" y1="54" x2="7" y2="55" stroke="#00C48C" strokeWidth="1" opacity="0.25" strokeLinecap="round" />
      </g>

      {/* Rider 3 — large / peak earner (right) */}
      <g transform="translate(380, 132)">
        {/* Scooter */}
        <circle cx="18" cy="62" r="20" fill="#1A1A2A" stroke="#F0F0F0" strokeWidth="3" />
        <circle cx="18" cy="62" r="10" fill="#2A2A3A" stroke="#D0D0D0" strokeWidth="1.5" />
        <circle cx="18" cy="62" r="3.5" fill="#F0F0F0" />
        <circle cx="104" cy="62" r="20" fill="#1A1A2A" stroke="#F0F0F0" strokeWidth="3" />
        <circle cx="104" cy="62" r="10" fill="#2A2A3A" stroke="#D0D0D0" strokeWidth="1.5" />
        <circle cx="104" cy="62" r="3.5" fill="#F0F0F0" />
        <path d="M 24 62 L 28 36 L 52 26 L 78 24 L 94 40 L 100 62 Z" fill="#F8F8F8" />
        <path d="M 28 36 L 52 26 L 78 24 L 92 38 L 86 36 L 76 22 L 51 24 L 30 34 Z" fill="#FFFFFF" />
        <rect x="36" y="32" width="36" height="9" rx="2" fill="#3CB54A" />
        <text x="38" y="39" fill="white" fontSize="5.5" fontFamily="'Exo 2', sans-serif" fontWeight="800">MoveGrid</text>
        <rect x="60" y="24" width="12" height="5" rx="1" fill="#00C48C" opacity="0.9" />
        <line x1="95" y1="38" x2="102" y2="60" stroke="#C0C0C0" strokeWidth="3" strokeLinecap="round" />
        <line x1="86" y1="20" x2="100" y2="24" stroke="#A0A0A0" strokeWidth="3" strokeLinecap="round" />
        <ellipse cx="104" cy="40" rx="5" ry="3" fill="#FFE066" opacity="0.9" />
        {/* Rider */}
        <ellipse cx="62" cy="8" rx="16" ry="15" fill="#1E1E2E" stroke="#3CB54A" strokeWidth="2" />
        <path d="M 50 8 Q 62 16 74 8" stroke="#00C48C" strokeWidth="1.5" fill="none" opacity="0.8" />
        <path d="M 46 24 L 42 56 L 82 56 L 78 24 Z" fill="#12121A" />
        <rect x="50" y="33" width="24" height="8" rx="2" fill="#3CB54A" />
        <text x="51" y="39.5" fill="white" fontSize="4.5" fontFamily="'Exo 2', sans-serif" fontWeight="800">MoveGrid</text>
        <line x1="46" y1="32" x2="34" y2="42" stroke="#12121A" strokeWidth="7" strokeLinecap="round" />
        <line x1="78" y1="32" x2="88" y2="36" stroke="#12121A" strokeWidth="7" strokeLinecap="round" />
        <circle cx="34" cy="42" r="5" fill="#1E1E2E" stroke="#3CB54A" strokeWidth="1" />
        <circle cx="88" cy="36" r="5" fill="#1E1E2E" stroke="#3CB54A" strokeWidth="1" />
        {/* Motion lines */}
        <line x1="-14" y1="56" x2="8" y2="59" stroke="#00C48C" strokeWidth="2.5" opacity="0.5" strokeLinecap="round" />
        <line x1="-16" y1="66" x2="6" y2="68" stroke="#00C48C" strokeWidth="2" opacity="0.3" strokeLinecap="round" />
        <line x1="-12" y1="76" x2="7" y2="77" stroke="#00C48C" strokeWidth="1.5" opacity="0.18" strokeLinecap="round" />
      </g>

      {/* ── Earning bars above each rider ── */}
      {/* Bar 1 (small) */}
      <g transform="translate(72, 100)">
        <rect x="0" y="30" width="22" height="30" rx="3" fill="#3CB54A" opacity="0.3" />
        <rect x="0" y="30" width="22" height="30" rx="3" fill="#3CB54A" opacity="0.15" />
      </g>

      {/* Bar 2 (medium) */}
      <g transform="translate(256, 76)">
        <rect x="0" y="10" width="22" height="56" rx="3" fill="#3CB54A" opacity="0.55" />
        <rect x="0" y="10" width="22" height="56" rx="3" fill="url(#greenGrad)" opacity="0.4" />
      </g>

      {/* Bar 3 (tall) */}
      <g transform="translate(438, 46)">
        <rect x="0" y="0" width="22" height="88" rx="3" fill="#3CB54A" opacity="0.9" />
        <rect x="3" y="3" width="16" height="6" rx="1" fill="white" opacity="0.2" />
      </g>

      {/* Gradient def */}
      <defs>
        <linearGradient id="greenGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#00C48C" />
          <stop offset="100%" stopColor="#3CB54A" />
        </linearGradient>
      </defs>

      {/* ── Arrow connecting bars (growth) ── */}
      <path
        d="M 97 118 Q 200 80 258 100"
        stroke="#00C48C"
        strokeWidth="1.5"
        strokeDasharray="5 6"
        fill="none"
        opacity="0.4"
      />
      <path
        d="M 281 98 Q 360 68 438 78"
        stroke="#00C48C"
        strokeWidth="1.5"
        strokeDasharray="5 6"
        fill="none"
        opacity="0.4"
      />
      {/* Arrowhead */}
      <path d="M 432 74 L 442 78 L 436 86" stroke="#00C48C" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />

      {/* ── Labels ── */}
      <text x="56" y="98" fill="#A0A0B8" fontSize="9" fontFamily="'Exo 2', sans-serif" fontWeight="600">Few rides</text>
      <text x="228" y="74" fill="#A0A0B8" fontSize="9" fontFamily="'Exo 2', sans-serif" fontWeight="600">More rides</text>
      <text x="410" y="44" fill="#00C48C" fontSize="9" fontFamily="'Exo 2', sans-serif" fontWeight="700">Max earnings</text>

      {/* ── Headline text ── */}
      <text x="280" y="268" fill="#606080" fontSize="11" fontFamily="'Exo 2', sans-serif" fontWeight="700" textAnchor="middle" letterSpacing="1">
        MORE YOU RIDE · MORE YOU EARN
      </text>

      {/* ── Ambient glow ── */}
      <ellipse cx="450" cy="220" rx="60" ry="6" fill="#00C48C" opacity="0.08" />
      <ellipse cx="100" cy="220" rx="40" ry="5" fill="#3CB54A" opacity="0.05" />
    </svg>
  );
}
