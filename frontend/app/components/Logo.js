export default function Logo({ size = 44, variant = "navy" }) {
  const isNavy = variant === "navy";
  const bgFill = isNavy ? "#0B4F8A" : "#ffffff";
  const iconStroke = isNavy ? "#ffffff" : "#0B4F8A";
  const accentStroke = isNavy ? "#60a5fa" : "#0284c7";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ borderRadius: "50%", flexShrink: 0 }}
      aria-label="Al Sheikh Cooling Logo"
    >
      {/* Outer Circle Background */}
      <circle cx="50" cy="50" r="48" fill={bgFill} stroke={isNavy ? "#083B68" : "#e2e8f0"} strokeWidth="2.5" />
      <circle cx="50" cy="50" r="44" stroke={accentStroke} strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />

      {/* Central Cooling Snowflake & Gear Motif */}
      <g stroke={iconStroke} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Main 6 Snowflake Axes */}
        <line x1="50" y1="20" x2="50" y2="80" />
        <line x1="24" y1="35" x2="76" y2="65" />
        <line x1="24" y1="65" x2="76" y2="35" />

        {/* Snowflake Branches */}
        <path d="M44 26 L50 20 L56 26" />
        <path d="M44 74 L50 80 L56 74" />
        <path d="M28 42 L24 35 L32 33" />
        <path d="M72 58 L76 65 L68 67" />
        <path d="M28 58 L24 65 L32 67" />
        <path d="M72 42 L76 35 L68 33" />
      </g>

      {/* Central Core Hub */}
      <circle cx="50" cy="50" r="8" fill={bgFill} stroke={accentStroke} strokeWidth="3" />
      <circle cx="50" cy="50" r="3.5" fill={iconStroke} />
    </svg>
  );
}
