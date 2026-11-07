export function ReactLogo({ className = "" }: { className?: string }) {
  return (
    <svg role="img" aria-label="React" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className} fill="none">
      <circle cx="12" cy="12" r="2" fill="currentColor" />
      <g stroke="currentColor" strokeWidth="1">
        <ellipse cx="12" cy="12" rx="11" ry="4.2" />
        <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(120 12 12)" />
      </g>
    </svg>
  );
}
