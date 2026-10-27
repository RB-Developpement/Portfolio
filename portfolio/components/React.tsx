export function React({ className = "" }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="React"
    >
      <circle cx="12" cy="12" r="2" fill="currentColor" />
      <g fill="none" stroke="currentColor" strokeWidth="1">
        <ellipse cx="12" cy="12" rx="11" ry="4.2" />
        <ellipse
          cx="12"
          cy="12"
          rx="11"
          ry="4.2"
          transform="rotate(60 12 12)"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="11"
          ry="4.2"
          transform="rotate(120 12 12)"
        />
      </g>
    </svg>
  );
}

// export function TypeScriptLogo({ className = "" }: { className?: string }) {
//   return (
//     <svg
//       role="img"
//       viewBox="0 0 24 24"
//       xmlns="http://www.w3.org/2000/svg"
//       className={className}
//       aria-label="TypeScript"
//     >
//       <rect width="24" height="24" fill="currentColor" />
//       <text
//         x="22"
//         y="21"
//         fill="white"
//         fontFamily="Arial, Helvetica, sans-serif"
//         fontSize="14"
//         fontWeight="bold"
//         textAnchor="end"
//       >
//         TS
//       </text>
//     </svg>
//   );
// }