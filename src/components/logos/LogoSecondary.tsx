import React from 'react';

interface LogoSecondaryProps {
  className?: string;
  variant?: 'full' | 'horizontal' | 'mark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
}

export const LogoSecondary: React.FC<LogoSecondaryProps> = ({
  className = '',
  variant = 'full',
  size = 'md',
  showSubtitle = true,
}) => {
  const markDimensions = {
    sm: 'w-10 h-10',
    md: 'w-16 h-16',
    lg: 'w-24 h-24',
    xl: 'w-36 h-36',
  };

  const titleSizes = {
    sm: 'text-sm tracking-wider',
    md: 'text-lg tracking-widest',
    lg: 'text-2xl tracking-[0.2em]',
    xl: 'text-3xl tracking-[0.25em]',
  };

  const subtitleSizes = {
    sm: 'text-[9px] tracking-widest',
    md: 'text-[11px] tracking-[0.22em]',
    lg: 'text-xs tracking-[0.28em]',
    xl: 'text-sm tracking-[0.32em]',
  };

  const EclipseEmblemSVG = (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)] select-none"
    >
      <defs>
        <radialGradient id="secEclipseGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1a1c22" />
          <stop offset="65%" stopColor="#0c0e12" />
          <stop offset="100%" stopColor="#030406" />
        </radialGradient>
        <linearGradient id="secEclipseRim" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#555d6b" />
          <stop offset="35%" stopColor="#2c3038" />
          <stop offset="70%" stopColor="#6e7787" />
          <stop offset="100%" stopColor="#1b1d24" />
        </linearGradient>
        <linearGradient id="secMetallicSilver" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e2e8f0" />
          <stop offset="40%" stopColor="#94a3b8" />
          <stop offset="75%" stopColor="#cbd5e1" />
          <stop offset="100%" stopColor="#475569" />
        </linearGradient>
        <linearGradient id="secEagleLight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="60%" stopColor="#cbd5e1" />
          <stop offset="100%" stopColor="#64748b" />
        </linearGradient>
        <linearGradient id="secSerpentGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#334155" />
          <stop offset="30%" stopColor="#94a3b8" />
          <stop offset="70%" stopColor="#475569" />
          <stop offset="100%" stopColor="#1e293b" />
        </linearGradient>
        <linearGradient id="secRedAccent" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#A40000" />
          <stop offset="100%" stopColor="#C40000" />
        </linearGradient>
      </defs>

      {/* Outer Tactical Coordinate Ring */}
      <circle cx="200" cy="200" r="176" stroke="#252a33" strokeWidth="2.5" strokeDasharray="6 8" opacity="0.6" />
      <line x1="200" y1="10" x2="200" y2="24" stroke="#A40000" strokeWidth="2.5" />
      <line x1="200" y1="376" x2="200" y2="390" stroke="#475569" strokeWidth="2" />
      <line x1="10" y1="200" x2="24" y2="200" stroke="#475569" strokeWidth="2" />
      <line x1="376" y1="200" x2="390" y2="200" stroke="#475569" strokeWidth="2" />

      {/* Black Sun / Eclipse Disk */}
      <circle cx="205" cy="195" r="142" stroke="url(#secEclipseRim)" strokeWidth="11" fill="none" opacity="0.9" />
      <circle cx="205" cy="195" r="136" fill="url(#secEclipseGlow)" />

      {/* Negative Space Skull in Right Lunar Crescent */}
      <g opacity="0.82">
        <path
          d="M 235 110 C 275 112 305 138 310 178 C 313 205 300 230 286 242 C 282 245 282 258 276 264 C 272 268 262 268 258 266 C 255 264 254 256 250 254 C 242 254 236 250 234 244 C 234 235 240 228 245 220 C 247 210 242 200 236 195 C 230 190 224 192 218 185 C 214 175 220 160 224 148 C 228 132 230 118 235 110 Z"
          fill="url(#secMetallicSilver)"
          opacity="0.32"
        />
        <ellipse cx="272" cy="182" rx="14" ry="18" fill="#050608" transform="rotate(8 272 182)" />
        <path d="M 288 206 L 280 216 L 284 219 Z" fill="#050608" />
      </g>

      {/* Coiling Serpent */}
      <path
        d="M 150 290 C 180 320 235 340 270 310 C 310 275 305 225 285 200 C 265 175 240 185 225 195 C 210 205 180 215 155 235 C 135 250 135 275 150 290 Z"
        fill="none"
        stroke="url(#secSerpentGrad)"
        strokeWidth="24"
        strokeLinecap="round"
      />
      <path
        d="M 156 290 C 184 316 230 334 265 308 C 298 277 296 232 280 208 C 263 186 242 192 227 201 C 212 210 184 218 160 237"
        fill="none"
        stroke="#e2e8f0"
        strokeWidth="3"
        strokeDasharray="4 6"
        opacity="0.75"
      />

      {/* Strike Eagle Vector */}
      <polygon points="120,40 195,145 150,150" fill="url(#secEagleLight)" />
      <polygon points="100,75 190,155 140,165" fill="#1e293b" />
      <polygon points="85,115 185,165 135,180" fill="url(#secEagleLight)" />
      <polygon points="70,160 178,178 130,195" fill="#0f172a" />
      <polygon points="60,210 168,190 125,212" fill="url(#secMetallicSilver)" />

      {/* Eagle Head & Beak */}
      <path
        d="M 188 126 L 208 120 L 232 126 L 244 140 L 226 148 L 204 142 Z"
        fill="url(#secEagleLight)"
      />
      <path
        d="M 232 128 L 254 136 C 255 142 250 152 242 152 L 235 142 Z"
        fill="#f8fafc"
        stroke="#0f172a"
        strokeWidth="1"
      />
      <circle cx="216" cy="134" r="1.5" fill="#A40000" />
    </svg>
  );

  if (variant === 'mark') {
    return <div className={`${markDimensions[size]} ${className}`}>{EclipseEmblemSVG}</div>;
  }

  if (variant === 'horizontal') {
    return (
      <div className={`flex items-center gap-3.5 select-none ${className}`}>
        <div className={markDimensions[size]}>{EclipseEmblemSVG}</div>
        <div className="flex flex-col justify-center">
          <span className={`font-heading font-extrabold text-white tracking-widest leading-none ${titleSizes[size]}`}>
            BLACKDAY <span className="text-[#3b82f6]">STRYKER</span>
          </span>
          {showSubtitle && (
            <span className={`font-mono-tech text-gray-400 mt-1 uppercase ${subtitleSizes[size]}`}>
              PRIVATE INTELLIGENCE <span className="text-[#A40000]">•</span> SECURITY <span className="text-[#A40000]">•</span> CRITICAL AFFAIRS
            </span>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center text-center select-none ${className}`}>
      <div className={`${markDimensions[size]} mb-3.5`}>{EclipseEmblemSVG}</div>
      <h2 className={`font-heading font-black text-white tracking-[0.22em] uppercase leading-tight ${titleSizes[size]}`}>
        BLACKDAY STRIKER
      </h2>
      {showSubtitle && (
        <p className={`font-mono-tech text-gray-400 mt-1.5 uppercase font-medium tracking-[0.25em] ${subtitleSizes[size]}`}>
          PRIVATE INTELLIGENCE <span className="text-[#A40000] mx-1">•</span> SECURITY <span className="text-[#A40000] mx-1">•</span> CRITICAL AFFAIRS
        </p>
      )}
    </div>
  );
};
