export default function RiderIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 520 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-auto ${className}`}
      aria-hidden="true"
    >
      {/* ── Background road ── */}
      <rect width="520" height="340" rx="20" fill="#0D0D14" />

      {/* Road */}
      <path d="M0 260 Q130 240 260 250 Q390 260 520 245" stroke="#1E1E2E" strokeWidth="60" strokeLinecap="round" />
      {/* Road center dashes */}
      <path d="M30 255 L80 252" stroke="#2A2A3E" strokeWidth="3" strokeLinecap="round" strokeDasharray="8 12" />
      <path d="M120 250 L220 248" stroke="#2A2A3E" strokeWidth="3" strokeLinecap="round" strokeDasharray="8 12" />
      <path d="M280 250 L380 252" stroke="#2A2A3E" strokeWidth="3" strokeLinecap="round" strokeDasharray="8 12" />
      <path d="M420 250 L490 248" stroke="#2A2A3E" strokeWidth="3" strokeLinecap="round" strokeDasharray="8 12" />

      {/* ── Route path (dotted arc from house to flag) ── */}
      <path
        d="M 60 230 Q 150 130 260 155 Q 370 178 450 200"
        stroke="#00C48C"
        strokeWidth="2"
        strokeDasharray="6 8"
        strokeLinecap="round"
        opacity="0.5"
      />
      {/* Route dots */}
      <circle cx="60" cy="230" r="5" fill="#00C48C" opacity="0.7" />
      <circle cx="260" cy="155" r="3" fill="#00C48C" opacity="0.4" />
      <circle cx="450" cy="200" r="5" fill="#00C48C" opacity="0.7" />

      {/* ── Start: House icon ── */}
      <g transform="translate(30, 195)">
        <rect x="0" y="14" width="28" height="20" rx="2" fill="#1E1E2E" stroke="#3CB54A" strokeWidth="1.5" />
        <polygon points="14,0 28,14 0,14" fill="#3CB54A" opacity="0.8" />
        <rect x="10" y="22" width="8" height="12" rx="1" fill="#0D0D14" />
      </g>
      <text x="44" y="224" fill="#3CB54A" fontSize="8" fontFamily="'Exo 2', sans-serif" fontWeight="700" opacity="0.8">START</text>

      {/* ── End: Flag icon ── */}
      <g transform="translate(436, 168)">
        <line x1="0" y1="0" x2="0" y2="32" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" />
        <rect x="0" y="0" width="18" height="12" rx="2" fill="#0EA5E9" opacity="0.9" />
        <rect x="3" y="3" width="5" height="6" fill="#0D0D14" opacity="0.5" />
        <rect x="10" y="3" width="5" height="6" fill="#0D0D14" opacity="0.5" />
      </g>
      <text x="458" y="207" fill="#0EA5E9" fontSize="8" fontFamily="'Exo 2', sans-serif" fontWeight="700" opacity="0.8">DELIVER</text>

      {/* ── EV Scooter body (white) ── */}
      <g transform="translate(195, 205)">
        {/* Rear wheel */}
        <circle cx="20" cy="52" r="22" fill="#1A1A2A" stroke="#E0E0E0" strokeWidth="3" />
        <circle cx="20" cy="52" r="12" fill="#2A2A3A" stroke="#C0C0C0" strokeWidth="2" />
        <circle cx="20" cy="52" r="4" fill="#E0E0E0" />
        {/* Spokes */}
        <line x1="20" y1="40" x2="20" y2="64" stroke="#C0C0C0" strokeWidth="1" opacity="0.5" />
        <line x1="8" y1="52" x2="32" y2="52" stroke="#C0C0C0" strokeWidth="1" opacity="0.5" />

        {/* Front wheel */}
        <circle cx="108" cy="52" r="22" fill="#1A1A2A" stroke="#E0E0E0" strokeWidth="3" />
        <circle cx="108" cy="52" r="12" fill="#2A2A3A" stroke="#C0C0C0" strokeWidth="2" />
        <circle cx="108" cy="52" r="4" fill="#E0E0E0" />
        <line x1="108" y1="40" x2="108" y2="64" stroke="#C0C0C0" strokeWidth="1" opacity="0.5" />
        <line x1="96" y1="52" x2="120" y2="52" stroke="#C0C0C0" strokeWidth="1" opacity="0.5" />

        {/* Main body — white scooter */}
        <path d="M 28 52 L 32 28 L 55 20 L 85 18 L 100 30 L 105 52 Z" fill="#F0F0F0" />
        <path d="M 32 28 L 55 20 L 85 18 L 100 30 L 95 28 L 82 16 L 54 18 L 34 26 Z" fill="#FFFFFF" />

        {/* MoveGrid sticker (green stripe on body) */}
        <rect x="42" y="28" width="36" height="8" rx="2" fill="#3CB54A" opacity="0.9" />
        <text x="44" y="35" fill="white" fontSize="5" fontFamily="'Exo 2', sans-serif" fontWeight="800" letterSpacing="0.5">MoveGrid</text>

        {/* Battery / charging indicator */}
        <rect x="58" y="20" width="14" height="6" rx="1" fill="#00C48C" opacity="0.8" />

        {/* Footrest */}
        <rect x="26" y="44" width="20" height="4" rx="2" fill="#D0D0D0" />

        {/* Front fork */}
        <line x1="98" y1="30" x2="106" y2="50" stroke="#C0C0C0" strokeWidth="3" strokeLinecap="round" />

        {/* Handlebar */}
        <line x1="90" y1="14" x2="106" y2="18" stroke="#A0A0A0" strokeWidth="3" strokeLinecap="round" />

        {/* Headlight */}
        <ellipse cx="108" cy="30" rx="5" ry="3" fill="#FFE066" opacity="0.9" />
        <path d="M 113 29 L 124 25 L 122 32 Z" fill="#FFE066" opacity="0.4" />
      </g>

      {/* ── Delivery box on scooter ── */}
      <g transform="translate(210, 185)">
        <rect x="0" y="0" width="30" height="22" rx="3" fill="#1B5FA6" stroke="#0EA5E9" strokeWidth="1.5" />
        <line x1="15" y1="0" x2="15" y2="22" stroke="#0EA5E9" strokeWidth="1" opacity="0.5" />
        <line x1="0" y1="11" x2="30" y2="11" stroke="#0EA5E9" strokeWidth="1" opacity="0.5" />
        <text x="5" y="9" fill="#0EA5E9" fontSize="5" fontFamily="sans-serif" opacity="0.8">▶</text>
      </g>

      {/* ── Rider figure ── */}
      <g transform="translate(262, 165)">
        {/* Helmet */}
        <ellipse cx="28" cy="14" rx="18" ry="16" fill="#1E1E2E" stroke="#3CB54A" strokeWidth="2" />
        <ellipse cx="28" cy="17" rx="14" ry="8" fill="#2A2A3A" />
        {/* Visor */}
        <path d="M 16 16 Q 28 22 40 16" stroke="#00C48C" strokeWidth="1.5" fill="none" opacity="0.8" />

        {/* Body — MoveGrid t-shirt (dark with green) */}
        <path d="M 14 30 L 10 58 L 46 58 L 42 30 Z" fill="#12121A" />
        {/* MoveGrid text on shirt */}
        <rect x="16" y="38" width="24" height="8" rx="2" fill="#3CB54A" opacity="0.9" />
        <text x="17" y="44" fill="white" fontSize="4" fontFamily="'Exo 2', sans-serif" fontWeight="800">MoveGrid</text>

        {/* Arms */}
        <line x1="14" y1="36" x2="2" y2="46" stroke="#12121A" strokeWidth="7" strokeLinecap="round" />
        <line x1="42" y1="36" x2="50" y2="38" stroke="#12121A" strokeWidth="7" strokeLinecap="round" />

        {/* Gloves */}
        <circle cx="2" cy="46" r="5" fill="#1E1E2E" stroke="#3CB54A" strokeWidth="1" />
        <circle cx="50" cy="38" r="5" fill="#1E1E2E" stroke="#3CB54A" strokeWidth="1" />

        {/* Legs */}
        <path d="M 18 58 L 14 76" stroke="#1E3A5F" strokeWidth="8" strokeLinecap="round" />
        <path d="M 38 58 L 40 72" stroke="#1E3A5F" strokeWidth="8" strokeLinecap="round" />

        {/* Shoes */}
        <ellipse cx="14" cy="78" rx="8" ry="4" fill="#0A0A0F" />
        <ellipse cx="40" cy="74" rx="8" ry="4" fill="#0A0A0F" />
      </g>

      {/* ── Motion lines ── */}
      <line x1="155" y1="235" x2="185" y2="238" stroke="#00C48C" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
      <line x1="150" y1="245" x2="183" y2="247" stroke="#00C48C" strokeWidth="1.5" strokeLinecap="round" opacity="0.25" />
      <line x1="158" y1="255" x2="185" y2="256" stroke="#00C48C" strokeWidth="1" strokeLinecap="round" opacity="0.15" />

      {/* ── Electric bolt icon (EV indicator) ── */}
      <g transform="translate(360, 140)">
        <circle cx="16" cy="16" r="16" fill="#00C48C" opacity="0.12" />
        <circle cx="16" cy="16" r="16" stroke="#00C48C" strokeWidth="1" opacity="0.3" />
        <path d="M 19 6 L 10 18 L 16 18 L 13 28 L 22 16 L 16 16 Z" fill="#00C48C" opacity="0.9" />
      </g>

      {/* ── Background city silhouette ── */}
      <g opacity="0.06">
        <rect x="20" y="160" width="18" height="70" fill="white" />
        <rect x="16" y="150" width="26" height="10" fill="white" />
        <rect x="50" y="180" width="22" height="50" fill="white" />
        <rect x="420" y="155" width="20" height="75" fill="white" />
        <rect x="448" y="170" width="16" height="60" fill="white" />
        <rect x="472" y="162" width="24" height="68" fill="white" />
        {/* Windows */}
        <rect x="24" y="165" width="4" height="4" fill="#0D0D14" />
        <rect x="30" y="165" width="4" height="4" fill="#0D0D14" />
        <rect x="24" y="175" width="4" height="4" fill="#0D0D14" />
        <rect x="30" y="175" width="4" height="4" fill="#0D0D14" />
      </g>

      {/* ── Ambient glow under scooter ── */}
      <ellipse cx="260" cy="285" rx="80" ry="8" fill="#00C48C" opacity="0.07" />
    </svg>
  );
}
