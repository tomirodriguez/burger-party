export function StitchMascot({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 220"
      className={className}
      role="img"
      aria-label="Experimento 626"
    >
      <defs>
        <radialGradient id="body" cx="50%" cy="40%" r="65%">
          <stop offset="0%" stopColor="#a7dcf5" />
          <stop offset="60%" stopColor="#4fa8d8" />
          <stop offset="100%" stopColor="#1f4f7a" />
        </radialGradient>
        <radialGradient id="belly" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#e9f6fd" />
          <stop offset="100%" stopColor="#a7dcf5" />
        </radialGradient>
      </defs>
      {/* ears */}
      <path
        d="M40 60 Q20 20 55 30 Q60 55 50 75 Z"
        fill="url(#body)"
      />
      <path
        d="M160 60 Q180 20 145 30 Q140 55 150 75 Z"
        fill="url(#body)"
      />
      <path d="M46 55 Q38 35 55 38 Q55 52 52 65 Z" fill="#ff6f9c" opacity="0.55" />
      <path d="M154 55 Q162 35 145 38 Q145 52 148 65 Z" fill="#ff6f9c" opacity="0.55" />
      {/* head */}
      <ellipse cx="100" cy="100" rx="66" ry="60" fill="url(#body)" />
      {/* belly / face light */}
      <ellipse cx="100" cy="120" rx="44" ry="40" fill="url(#belly)" />
      {/* eyes */}
      <ellipse cx="78" cy="95" rx="11" ry="13" fill="#0e2a44" />
      <ellipse cx="122" cy="95" rx="11" ry="13" fill="#0e2a44" />
      <circle cx="82" cy="90" r="3" fill="#fff" />
      <circle cx="126" cy="90" r="3" fill="#fff" />
      {/* nose */}
      <path
        d="M94 112 Q100 108 106 112 Q100 120 94 112 Z"
        fill="#0e2a44"
      />
      {/* mouth */}
      <path
        d="M82 128 Q100 150 118 128"
        fill="none"
        stroke="#0e2a44"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path d="M92 138 Q100 146 108 138" fill="#ff6f9c" opacity="0.65" />
      {/* cheeks */}
      <circle cx="68" cy="128" r="7" fill="#ff6f9c" opacity="0.35" />
      <circle cx="132" cy="128" r="7" fill="#ff6f9c" opacity="0.35" />
      {/* bowtie (formal) */}
      <path
        d="M72 180 L100 168 L128 180 L128 200 L100 190 L72 200 Z"
        fill="#0e2a44"
      />
      <circle cx="100" cy="184" r="5" fill="#ffd84d" />
    </svg>
  );
}

export function Hibiscus({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <g>
        {[0, 72, 144, 216, 288].map((r) => (
          <ellipse
            key={r}
            cx="32"
            cy="18"
            rx="10"
            ry="16"
            fill="#ff6f9c"
            transform={`rotate(${r} 32 32)`}
            opacity="0.9"
          />
        ))}
        <circle cx="32" cy="32" r="5" fill="#ffd84d" />
      </g>
    </svg>
  );
}

export function Sparkle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        d="M12 0 L14 10 L24 12 L14 14 L12 24 L10 14 L0 12 L10 10 Z"
        fill="currentColor"
      />
    </svg>
  );
}
