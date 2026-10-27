export function ZigZagPattern({
  className = "",
  color = "",
}: {
  className?: string;
  color?: string;
}) {
return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 300 200"
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <path
        d="M-20 40 L40 10 L80 70 L140 20 L180 90 L240 40 L300 80"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M-10 110 L50 80 L90 140 L150 90 L190 160 L250 110 L310 150"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
