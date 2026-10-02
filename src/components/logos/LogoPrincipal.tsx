import React from 'react';

interface LogoPrincipalProps {
  className?: string;
  variant?: 'full' | 'horizontal' | 'mark';
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  showSubtitle?: boolean;
}

export const LogoPrincipal: React.FC<LogoPrincipalProps> = ({
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
    '2xl': 'w-52 h-52 sm:w-64 sm:h-64',
  };

  const titleSizes = {
    sm: 'text-sm tracking-wider',
    md: 'text-lg tracking-widest',
    lg: 'text-2xl tracking-[0.2em]',
    xl: 'text-3xl tracking-[0.25em]',
    '2xl': 'text-3xl sm:text-4xl tracking-[0.25em]',
  };

  const subtitleSizes = {
    sm: 'text-[9px] tracking-widest',
    md: 'text-[11px] tracking-[0.22em]',
    lg: 'text-xs tracking-[0.28em]',
    xl: 'text-sm tracking-[0.32em]',
    '2xl': 'text-xs sm:text-sm tracking-[0.32em]',
  };

  // High-fidelity vector SVG matching the uploaded image exactly
  const ShieldEmblemSVG = (
    <svg
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full drop-shadow-[0_15px_35px_rgba(0,0,0,0.9)] select-none"
    >
      <defs>
        {/* Chrome & Silver Gradients */}
        <linearGradient id="shieldChromeBevel" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="25%" stopColor="#cbd5e1" />
          <stop offset="50%" stopColor="#64748b" />
          <stop offset="75%" stopColor="#94a3b8" />
          <stop offset="100%" stopColor="#334155" />
        </linearGradient>

        <linearGradient id="shieldChromeHighlight" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#475569" />
          <stop offset="35%" stopColor="#f8fafc" />
          <stop offset="65%" stopColor="#cbd5e1" />
          <stop offset="100%" stopColor="#1e293b" />
        </linearGradient>

        {/* 3D Infinity Loop Metallic Gradients */}
        <linearGradient id="infinityLoopGradLeft" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f1f5f9" />
          <stop offset="30%" stopColor="#94a3b8" />
          <stop offset="70%" stopColor="#475569" />
          <stop offset="100%" stopColor="#e2e8f0" />
        </linearGradient>

        <linearGradient id="infinityLoopGradRight" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="35%" stopColor="#64748b" />
          <stop offset="70%" stopColor="#334155" />
          <stop offset="100%" stopColor="#cbd5e1" />
        </linearGradient>

        {/* Tactical Shield Body Gradients (Two-tone vertical shadow split) */}
        <linearGradient id="shieldBodyLeft" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e2e42" />
          <stop offset="50%" stopColor="#142131" />
          <stop offset="100%" stopColor="#0a121c" />
        </linearGradient>

        <linearGradient id="shieldBodyRight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#111c29" />
          <stop offset="50%" stopColor="#0a121c" />
          <stop offset="100%" stopColor="#04080e" />
        </linearGradient>

        {/* Outer Ring Gradients */}
        <linearGradient id="outerRingLeft" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1c2a3b" />
          <stop offset="50%" stopColor="#131e2b" />
          <stop offset="100%" stopColor="#0c131c" />
        </linearGradient>

        <linearGradient id="outerRingRight" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#131e2b" />
          <stop offset="50%" stopColor="#0c131c" />
          <stop offset="100%" stopColor="#06090e" />
        </linearGradient>

        {/* Eagle Feather Gradients */}
        <linearGradient id="eagleWingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#25374d" />
          <stop offset="40%" stopColor="#162332" />
          <stop offset="80%" stopColor="#0d1620" />
          <stop offset="100%" stopColor="#050a0f" />
        </linearGradient>

        <linearGradient id="eagleBevelHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f8fafc" />
          <stop offset="50%" stopColor="#94a3b8" />
          <stop offset="100%" stopColor="#475569" />
        </linearGradient>

        {/* Radial Depth Shading */}
        <radialGradient id="emblemCoreShadow" cx="50%" cy="50%" r="50%">
          <stop offset="65%" stopColor="#000000" stopOpacity="0" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.85" />
        </radialGradient>

        <filter id="emblemDropShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#000000" floodOpacity="0.7" />
        </filter>
      </defs>

      {/* 1. OUTER TARGETING / RADAR CIRCULAR FRAME */}
      {/* Outer Halo Rim */}
      <circle cx="250" cy="235" r="198" stroke="url(#shieldChromeBevel)" strokeWidth="3" opacity="0.6" />
      <circle cx="250" cy="235" r="192" stroke="#05090f" strokeWidth="1" />

      {/* Segmented Quadrant Ring (Dark Navy / Graphite with 3D Depth) */}
      <g filter="url(#emblemDropShadow)">
        {/* Top-Left Quadrant */}
        <path
          d="M 235 48 A 190 190 0 0 0 58 225 L 85 225 A 162 162 0 0 1 235 75 Z"
          fill="url(#outerRingLeft)"
          stroke="#33465e"
          strokeWidth="1.5"
        />
        {/* Top-Right Quadrant */}
        <path
          d="M 265 48 A 190 190 0 0 1 442 225 L 415 225 A 162 162 0 0 0 265 75 Z"
          fill="url(#outerRingRight)"
          stroke="#202c3c"
          strokeWidth="1.5"
        />
        {/* Bottom-Right Quadrant */}
        <path
          d="M 442 245 A 190 190 0 0 1 265 422 L 265 395 A 162 162 0 0 0 415 245 Z"
          fill="url(#outerRingRight)"
          stroke="#202c3c"
          strokeWidth="1.5"
        />
        {/* Bottom-Left Quadrant */}
        <path
          d="M 58 245 A 190 190 0 0 0 235 422 L 235 395 A 162 162 0 0 1 85 245 Z"
          fill="url(#outerRingLeft)"
          stroke="#33465e"
          strokeWidth="1.5"
        />
      </g>

      {/* Precision Crosshair Target Cuts (12, 3, 6, 9 o'clock) */}
      <g stroke="url(#shieldChromeHighlight)" strokeWidth="3" strokeLinecap="square">
        <line x1="250" y1="36" x2="250" y2="78" stroke="#ffffff" />
        <line x1="410" y1="235" x2="452" y2="235" />
        <line x1="250" y1="392" x2="250" y2="434" />
        <line x1="48" y1="235" x2="90" y2="235" />
      </g>

      {/* Inner Metallic Circular Track */}
      <circle cx="250" cy="235" r="162" stroke="url(#shieldChromeBevel)" strokeWidth="2.5" fill="none" opacity="0.8" />
      <circle cx="250" cy="235" r="156" stroke="#070c14" strokeWidth="2" fill="none" />

      {/* 2. CENTRAL TACTICAL SHIELD CREST */}
      <g filter="url(#emblemDropShadow)">
        {/* Shield Outer Bevel Rim (Heavy 3D Chrome) */}
        <path
          d="M 250 82 
             L 362 124 
             C 362 250 318 344 250 392 
             C 182 344 138 250 138 124 
             Z"
          fill="url(#shieldChromeBevel)"
          stroke="#0f172a"
          strokeWidth="2"
        />

        {/* Shield Inner Inset Border */}
        <path
          d="M 250 94 
             L 350 132 
             C 350 244 310 330 250 374 
             C 190 330 150 244 150 132 
             Z"
          fill="#06090e"
        />

        {/* Shield Left Half (Illuminated Navy) */}
        <path
          d="M 250 96 
             L 152 134 
             C 152 242 191 328 250 372 
             Z"
          fill="url(#shieldBodyLeft)"
        />

        {/* Shield Right Half (Shadow Navy / Dark Graphite) */}
        <path
          d="M 250 96 
             L 348 134 
             C 348 242 309 328 250 372 
             Z"
          fill="url(#shieldBodyRight)"
        />

        {/* Shield Vertical Seam Highlight */}
        <line x1="250" y1="96" x2="250" y2="372" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />

        {/* Shield Secondary Fine Inner Contour */}
        <path
          d="M 250 108 
             L 336 142 
             C 336 236 300 312 250 354 
             C 200 312 164 236 164 142 
             Z"
          fill="none"
          stroke="#253549"
          strokeWidth="2"
          opacity="0.7"
        />
      </g>

      {/* 3. SPREAD-WING EAGLE POISED AT TOP OF SHIELD */}
      <g filter="url(#emblemDropShadow)">
        {/* Left Wing Primary Outstretched Feathers */}
        {/* Upper Tier Wing Leading Edge */}
        <polygon points="250,140 185,102 120,60 170,88 112,94 175,116 122,130 188,144 145,166 215,165" fill="url(#eagleWingGrad)" stroke="#475f7d" strokeWidth="1.2" />
        {/* Secondary Feather Facets */}
        <polygon points="250,140 195,110 135,74 175,98" fill="url(#shieldChromeHighlight)" opacity="0.9" />
        <polygon points="175,98 126,104 182,122" fill="#1b2838" />
        <polygon points="182,122 136,138 194,150" fill="url(#shieldChromeBevel)" opacity="0.85" />
        <polygon points="194,150 156,170 220,168" fill="#111c29" />

        {/* Right Wing Symmetrical Outstretched Feathers */}
        <polygon points="250,140 315,102 380,60 330,88 388,94 325,116 378,130 312,144 355,166 285,165" fill="url(#eagleWingGrad)" stroke="#27384a" strokeWidth="1.2" />
        {/* Right Feather Shadow Facets */}
        <polygon points="250,140 305,110 365,74 325,98" fill="#2d3d52" />
        <polygon points="325,98 374,104 318,122" fill="#0f1722" />
        <polygon points="318,122 364,138 306,150" fill="#223040" />
        <polygon points="306,150 344,170 280,168" fill="#090e15" />

        {/* Eagle Breast & Torso (Faceted Heraldic Shield Inset) */}
        <path
          d="M 250 135 
             L 268 152 
             L 260 188 
             L 250 205 
             L 240 188 
             L 232 152 
             Z"
          fill="url(#shieldChromeBevel)"
          stroke="#0f172a"
          strokeWidth="1.5"
        />
        {/* Breast Shading Division */}
        <path
          d="M 250 135 L 268 152 L 260 188 L 250 205 Z"
          fill="url(#outerRingRight)"
          opacity="0.6"
        />

        {/* Eagle Head (Facing Right with Sharp Hooked Beak) */}
        <polygon points="248,135 250,118 258,110 274,116 284,124 266,134 254,136" fill="url(#shieldChromeBevel)" />
        {/* Sharp Hooked Beak */}
        <path
          d="M 274 116 
             L 294 125 
             C 294 132 284 138 276 135 
             L 272 126 
             Z"
          fill="#ffffff"
          stroke="#1e293b"
          strokeWidth="1"
        />
        {/* Eagle Keen Eye (Red/Amber Crosshair Pupil) */}
        <polygon points="264,121 270,123 267,126 262,124" fill="#A40000" />
        <circle cx="265.5" cy="123" r="1" fill="#ffffff" />
      </g>

      {/* 4. INFINITY SERPENT (∞) IN DIMENSIONAL 3D CHROME */}
      <g filter="url(#emblemDropShadow)">
        {/* Serpent Head Descending from Eagle Chest */}
        <path
          d="M 242 195 
             L 258 195 
             L 262 216 
             L 250 234 
             L 238 216 
             Z"
          fill="url(#shieldChromeBevel)"
          stroke="#0c1219"
          strokeWidth="1.5"
        />
        {/* Serpent Eyes */}
        <circle cx="244" cy="214" r="1.8" fill="#A40000" />
        <circle cx="256" cy="214" r="1.8" fill="#A40000" />
        {/* Red Forked Tongue */}
        <path d="M 250 234 L 250 248 M 250 248 L 246 254 M 250 248 L 254 254" stroke="#A40000" strokeWidth="2.5" strokeLinecap="round" />

        {/* Deep Under-Shadow for Infinity Loop */}
        <path
          d="M 250 286 
             C 214 246 165 246 165 286 
             C 165 326 214 326 250 286 
             C 286 246 335 246 335 286 
             C 335 326 286 326 250 286 
             Z"
          fill="none"
          stroke="#020406"
          strokeWidth="32"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Main 3D Metallic Infinity Loop Body (Left Loop) */}
        <path
          d="M 250 286 
             C 214 246 165 246 165 286 
             C 165 326 214 326 250 286 
             Z"
          fill="none"
          stroke="url(#infinityLoopGradLeft)"
          strokeWidth="24"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Main 3D Metallic Infinity Loop Body (Right Loop) */}
        <path
          d="M 250 286 
             C 286 246 335 246 335 286 
             C 335 326 286 326 250 286 
             Z"
          fill="none"
          stroke="url(#infinityLoopGradRight)"
          strokeWidth="24"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Inner Highlight Rail (Simulating Serpent Spine / Scales) */}
        <path
          d="M 250 286 
             C 216 250 172 250 172 286 
             C 172 322 216 322 250 286 
             C 284 250 328 250 328 286 
             C 328 322 284 322 250 286"
          fill="none"
          stroke="#ffffff"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.8"
        />
        {/* Scale Texture Tick Marks */}
        <path
          d="M 250 286 
             C 216 250 172 250 172 286 
             C 172 322 216 322 250 286 
             C 284 250 328 250 328 286 
             C 328 322 284 322 250 286"
          fill="none"
          stroke="#334155"
          strokeWidth="3"
          strokeDasharray="4 6"
          opacity="0.9"
        />
      </g>

      {/* 5. APEX SKULL TALISMAN AT BOTTOM CENTER */}
      <g filter="url(#emblemDropShadow)">
        {/* Cranium */}
        <path
          d="M 234 402 
             C 234 388 266 388 266 402 
             C 272 414 268 424 262 430 
             L 262 440 
             C 256 444 244 444 238 440 
             L 238 430 
             C 232 424 228 414 234 402 
             Z"
          fill="url(#shieldChromeBevel)"
          stroke="#090d13"
          strokeWidth="2"
        />
        {/* Cranium Highlight */}
        <path
          d="M 236 402 C 236 392 250 392 250 402 L 250 426 L 240 426 Z"
          fill="#ffffff"
          opacity="0.3"
        />
        {/* Eye Sockets */}
        <ellipse cx="242" cy="410" rx="3.5" ry="4.5" fill="#040609" />
        <ellipse cx="258" cy="410" rx="3.5" ry="4.5" fill="#040609" />
        {/* Nasal Cavity */}
        <polygon points="250,416 248,423 252,423" fill="#040609" />
        {/* Maxilla & Teeth Line */}
        <line x1="243" y1="434" x2="243" y2="440" stroke="#040609" strokeWidth="1.5" />
        <line x1="248" y1="434" x2="248" y2="440" stroke="#040609" strokeWidth="1.5" />
        <line x1="252" y1="434" x2="252" y2="440" stroke="#040609" strokeWidth="1.5" />
        <line x1="257" y1="434" x2="257" y2="440" stroke="#040609" strokeWidth="1.5" />
      </g>
    </svg>
  );

  if (variant === 'mark') {
    return <div className={`${markDimensions[size]} ${className}`}>{ShieldEmblemSVG}</div>;
  }

  if (variant === 'horizontal') {
    return (
      <div className={`flex items-center gap-3.5 select-none ${className}`}>
        <div className={markDimensions[size]}>{ShieldEmblemSVG}</div>
        <div className="flex flex-col justify-center">
          <span className={`font-heading font-extrabold text-white tracking-widest leading-none ${titleSizes[size]}`}>
            BLACKDAY <span className="text-[#3b82f6]">STRIKER</span>
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

  // Default 'full' centered corporate lockup exactly matching the logo in the image
  return (
    <div className={`flex flex-col items-center text-center select-none ${className}`}>
      <div className={`${markDimensions[size]} mb-4`}>{ShieldEmblemSVG}</div>
      <h2 className={`font-heading font-black text-white tracking-[0.18em] uppercase leading-tight ${titleSizes[size]}`}>
        BLACKDAY STRIKER
      </h2>
      {showSubtitle && (
        <p className={`font-mono-tech text-gray-400 mt-2 uppercase font-medium tracking-[0.24em] ${subtitleSizes[size]}`}>
          PRIVATE INTELLIGENCE <span className="text-[#A40000] mx-1">•</span> SECURITY <span className="text-[#A40000] mx-1">•</span> CRITICAL AFFAIRS
        </p>
      )}
    </div>
  );
};
