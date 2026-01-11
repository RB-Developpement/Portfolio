export function CardPattern({
  className = "",
  color = "",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 300 200"
      className={`
        absolute inset-1 w-fit h-full
        pointer-events-none
        rotate-150
        ${className}
      `}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <path
        d="M-20 140 C 40 120, 80 160, 140 140 S 240 120, 320 130"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M-10 90 C 60 70, 100 110, 160 90 S 260 70, 330 80"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}