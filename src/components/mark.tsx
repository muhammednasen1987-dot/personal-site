export function Mark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <path
        d="M32 4 L50 14 L60 32 L50 50 L32 60 L14 50 L4 32 L14 14 Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M32 14 L44 22 L50 32 L44 42 L32 50 L20 42 L14 32 L20 22 Z"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.65"
      />
      <text
        x="32"
        y="38.5"
        textAnchor="middle"
        fill="currentColor"
        fontFamily="Amiri, serif"
        fontSize="22"
        fontWeight="700"
      >
        ن
      </text>
    </svg>
  );
}
