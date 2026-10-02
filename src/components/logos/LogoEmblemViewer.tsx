import React, { useState } from 'react';
import { LogoPrincipal } from './LogoPrincipal.tsx';
import { LogoSecondary } from './LogoSecondary.tsx';
import { Eye, Shield, Sun, Sparkles, X, Compass, ExternalLink } from 'lucide-react';

interface LogoEmblemViewerProps {
  isOpen: boolean;
  onClose: () => void;
  activeLogoVariant: 'principal' | 'secondary';
  onSelectLogoVariant: (variant: 'principal' | 'secondary') => void;
}

export const LogoEmblemViewer: React.FC<LogoEmblemViewerProps> = ({
  isOpen,
  onClose,
  activeLogoVariant,
  onSelectLogoVariant,
}) => {
  const [selectedTab, setSelectedTab] = useState<'principal' | 'secondary'>(activeLogoVariant);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#090909] border border-[#22242c] text-white shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#1b1d24] bg-[#0c0d12]">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 bg-[#A40000] inline-block animate-pulse" />
            <h3 className="font-heading text-lg font-bold tracking-widest uppercase">
              BLACKDAY STRYKER // OFFICIAL BRAND EMBLEMS
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-gray-400 hover:text-white hover:bg-[#1a1c24] transition-colors"
            title="Close Viewer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selector */}
        <div className="flex border-b border-[#1b1d24] bg-[#08090c]">
          <button
            onClick={() => {
              setSelectedTab('principal');
              onSelectLogoVariant('principal');
            }}
            className={`flex-1 py-3 px-6 text-xs font-mono-tech tracking-widest uppercase flex items-center justify-center gap-2 border-b-2 transition-all ${
              selectedTab === 'principal'
                ? 'border-[#A40000] text-white bg-[#12141a]'
                : 'border-transparent text-gray-400 hover:text-gray-200 hover:bg-[#0d0e13]'
            }`}
          >
            <Shield className="w-4 h-4 text-[#A40000]" />
            LOGO PRINCIPAL (TACTICAL SHIELD & INFINITY SERPENT)
            {activeLogoVariant === 'principal' && (
              <span className="text-[10px] bg-[#A40000]/20 text-[#ff6b6b] px-2 py-0.5 border border-[#A40000]/40 font-mono-tech">
                ACTIVE
              </span>
            )}
          </button>
          <button
            onClick={() => {
              setSelectedTab('secondary');
              onSelectLogoVariant('secondary');
            }}
            className={`flex-1 py-3 px-6 text-xs font-mono-tech tracking-widest uppercase flex items-center justify-center gap-2 border-b-2 transition-all ${
              selectedTab === 'secondary'
                ? 'border-[#A40000] text-white bg-[#12141a]'
                : 'border-transparent text-gray-400 hover:text-gray-200 hover:bg-[#0d0e13]'
            }`}
          >
            <Sun className="w-4 h-4 text-gray-400" />
            LOGO SECUNDÁRIO (BLACK SUN ECLIPSE)
            {activeLogoVariant === 'secondary' && (
              <span className="text-[10px] bg-[#A40000]/20 text-[#ff6b6b] px-2 py-0.5 border border-[#A40000]/40 font-mono-tech">
                ACTIVE
              </span>
            )}
          </button>
        </div>

        {/* Body content */}
        <div className="overflow-y-auto p-6 md:p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Visual Emblem Display */}
            <div className="flex flex-col items-center justify-center p-8 bg-[#050507] border border-[#1b1d24] relative group">
              <div className="absolute top-3 left-3 text-[10px] font-mono-tech text-gray-500">
                VECTOR RENDER // HI-RES
              </div>
              <div className="absolute top-3 right-3 flex items-center gap-1.5 text-[10px] font-mono-tech text-[#A40000]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A40000]"></span>
                AUTHENTIC EMBLEM
              </div>

              {selectedTab === 'principal' ? (
                <LogoPrincipal size="xl" variant="full" />
              ) : (
                <LogoSecondary size="xl" variant="full" />
              )}

              <div className="mt-6 flex gap-3">
                <button
                  onClick={() => onSelectLogoVariant(selectedTab)}
                  className="px-4 py-2 text-xs font-mono-tech uppercase bg-[#A40000] hover:bg-[#c40000] text-white transition-colors"
                >
                  Set as Default App Logo
                </button>
              </div>
            </div>

            {/* Symbolic Breakdown */}
            <div className="space-y-4">
              <div className="border-l-2 border-[#A40000] pl-3">
                <span className="text-xs font-mono-tech text-gray-400 uppercase tracking-widest">
                  Symbolic Architecture
                </span>
                <h4 className="font-heading text-xl font-bold tracking-wider uppercase text-white">
                  {selectedTab === 'principal'
                    ? 'Heraldic Tactical Shield & Infinity Loop'
                    : 'Black Sun Eclipse & Dynamic Strike'}
                </h4>
              </div>

              <div className="space-y-3 text-sm text-gray-300">
                {selectedTab === 'principal' ? (
                  <>
                    <div className="p-3 bg-[#101217] border border-[#1d2028]">
                      <div className="flex items-center gap-2 font-mono-tech text-xs text-white uppercase font-bold mb-1">
                        <Shield className="w-3.5 h-3.5 text-blue-400" />
                        1. TACTICAL CREST & SHIELD
                      </div>
                      <p className="text-xs text-gray-400">
                        Two-tone split graphite/navy shield representing defensive integrity, legal grounding, and asset preservation.
                      </p>
                    </div>

                    <div className="p-3 bg-[#101217] border border-[#1d2028]">
                      <div className="flex items-center gap-2 font-mono-tech text-xs text-white uppercase font-bold mb-1">
                        <Compass className="w-3.5 h-3.5 text-gray-300" />
                        2. SPREAD-WING EAGLE
                      </div>
                      <p className="text-xs text-gray-400">
                        Symmetrical heraldic posture symbolizing commanding panoramic surveillance, precision intelligence, and strategic clarity.
                      </p>
                    </div>

                    <div className="p-3 bg-[#101217] border border-[#1d2028]">
                      <div className="flex items-center gap-2 font-mono-tech text-xs text-white uppercase font-bold mb-1">
                        <Sparkles className="w-3.5 h-3.5 text-[#A40000]" />
                        3. INFINITY LOOP SERPENT (∞)
                      </div>
                      <p className="text-xs text-gray-400">
                        Brushed 3D chrome infinity loop representing perpetual tactical adaptability, resilience, and uninterrupted monitoring.
                      </p>
                    </div>

                    <div className="p-3 bg-[#101217] border border-[#1d2028]">
                      <div className="flex items-center gap-2 font-mono-tech text-xs text-white uppercase font-bold mb-1">
                        <Eye className="w-3.5 h-3.5 text-gray-400" />
                        4. APEX SKULL TALISMAN
                      </div>
                      <p className="text-xs text-gray-400">
                        Anchored at the bottom apex of the shield, symbolizing awareness of consequence, mortality, and non-negotiable discretion.
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="p-3 bg-[#101217] border border-[#1d2028]">
                      <div className="flex items-center gap-2 font-mono-tech text-xs text-white uppercase font-bold mb-1">
                        <Sun className="w-3.5 h-3.5 text-[#A40000]" />
                        1. BLACK SUN / ECLIPSE
                      </div>
                      <p className="text-xs text-gray-400">
                        Represents <strong className="text-gray-200">BLACKDAY</strong>: The critical moment when uncertainty peaks, exposure emerges, and decisive advisory is paramount.
                      </p>
                    </div>

                    <div className="p-3 bg-[#101217] border border-[#1d2028]">
                      <div className="flex items-center gap-2 font-mono-tech text-xs text-white uppercase font-bold mb-1">
                        <Compass className="w-3.5 h-3.5 text-blue-400" />
                        2. STRIKE EAGLE (STRYKER)
                      </div>
                      <p className="text-xs text-gray-400">
                        Represents strategic vision, superior vantage point, surgical intervention, and breaking through fog and complexity.
                      </p>
                    </div>

                    <div className="p-3 bg-[#101217] border border-[#1d2028]">
                      <div className="flex items-center gap-2 font-mono-tech text-xs text-white uppercase font-bold mb-1">
                        <Sparkles className="w-3.5 h-3.5 text-gray-300" />
                        3. COILING SERPENT
                      </div>
                      <p className="text-xs text-gray-400">
                        Represents stealth, adaptability, patience, deep intelligence gathering, and understanding concealed adversarial moves.
                      </p>
                    </div>

                    <div className="p-3 bg-[#101217] border border-[#1d2028]">
                      <div className="flex items-center gap-2 font-mono-tech text-xs text-white uppercase font-bold mb-1">
                        <Eye className="w-3.5 h-3.5 text-gray-400" />
                        4. NEGATIVE-SPACE SKULL
                      </div>
                      <p className="text-xs text-gray-400">
                        Formed inside the right lunar crescent. Represents awareness of mortality and high-consequence stakes.
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-[#1b1d24] bg-[#0c0d12] flex flex-wrap items-center justify-between text-xs text-gray-400">
          <span className="font-mono-tech text-[11px]">
            BLACKDAY STRIKER • PRIVATE INTELLIGENCE • SECURITY • CRITICAL AFFAIRS
          </span>
          <div className="flex items-center gap-3">
            <a
              href="https://t.me/blackdaystriker"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#38bdf8] hover:underline flex items-center gap-1 font-mono-tech"
            >
              Telegram: Blackday Striker <ExternalLink className="w-3 h-3" />
            </a>
            <button
              onClick={onClose}
              className="px-3 py-1 bg-[#1a1c24] hover:bg-[#232733] text-gray-200 transition-colors"
            >
              Dismiss
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
