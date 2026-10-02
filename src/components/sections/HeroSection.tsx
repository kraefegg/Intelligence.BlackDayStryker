import React from 'react';
import { useI18n } from '../../i18n/index.tsx';
import { LogoPrincipal } from '../logos/LogoPrincipal.tsx';
import { LogoSecondary } from '../logos/LogoSecondary.tsx';
import { ThreatLevelWidget } from '../common/ThreatLevelWidget.tsx';
import {
  Lock,
  ArrowRight,
  Send,
  Eye,
  Crosshair,
  ShieldAlert,
  Radio,
  Sliders,
} from 'lucide-react';

interface HeroSectionProps {
  onOpenBriefing: (threatLevel?: string) => void;
  onExploreCapabilities: () => void;
  onOpenEmblems: () => void;
  activeLogoVariant: 'principal' | 'secondary';
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenBriefing,
  onExploreCapabilities,
  onOpenEmblems,
  activeLogoVariant,
}) => {
  const { t } = useI18n();

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-20 overflow-hidden tactical-grid">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#A40000]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#1e293b]/25 rounded-full blur-[120px] pointer-events-none" />

      {/* Floating Tactical Coordinates HUD */}
      <div className="absolute top-32 left-8 hidden 2xl:flex flex-col gap-2 font-mono-tech text-[10px] text-gray-500 select-none border-l border-[#1f232d] pl-3">
        <div className="text-gray-400 flex items-center gap-1.5">
          <Crosshair className="w-3 h-3 text-[#A40000]" />
          <span>GRID: 23°33'S 46°38'W // SAO PAULO</span>
        </div>
        <div>MANDATE: PRIVATE ADVISORY</div>
        <div>STATUS: DISCRETIONARY DEFENSE</div>
        <div>OPSEC: LEVEL 4 RESTRICTED</div>
      </div>

      <div className="absolute top-32 right-8 hidden 2xl:flex flex-col gap-2 font-mono-tech text-[10px] text-gray-500 select-none text-right border-r border-[#1f232d] pr-3">
        <div className="text-gray-400 flex items-center justify-end gap-1.5">
          <span>INTEL SIGNAL: VERIFIED</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        </div>
        <div>CHANNELS: PROTON & TELEGRAM</div>
        <div>ENCRYPTION: NEED-TO-KNOW</div>
        <div>COMPLIANCE: STRICT LGPD / INT</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full space-y-12">
        {/* Upper Hero Grid: Brand Message & High-Fidelity Vector Logo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Headlines & Positioning */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#12141a] border border-[#262a36] text-[11px] font-mono-tech text-gray-300">
              <span className="w-2 h-2 rounded-full bg-[#A40000] animate-pulse" />
              <span>{t.hero.badge}</span>
            </div>

            {/* Main Primary Headline */}
            <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight uppercase leading-[0.95]">
              INTELLIGENCE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">
                WITHOUT NOISE.
              </span>
            </h1>

            {/* Supporting text */}
            <p className="text-base sm:text-xl text-gray-300 font-normal leading-relaxed max-w-2xl">
              {t.hero.subheadline}
            </p>

            {/* Core Brand Statement */}
            <div className="p-4 bg-[#0a0c10]/90 border-l-2 border-[#A40000] border-y border-r border-[#1a1d25] text-sm text-gray-200 font-mono-tech leading-relaxed">
              <span className="text-[#A40000] font-bold">» </span>
              {t.hero.statement}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => onOpenBriefing()}
                className="px-7 py-3.5 bg-[#A40000] hover:bg-[#c40000] text-white font-mono-tech text-xs tracking-widest uppercase transition-all shadow-[0_0_25px_rgba(164,0,0,0.4)] hover:shadow-[0_0_35px_rgba(196,0,0,0.6)] flex items-center gap-3 active:scale-95"
              >
                <Lock className="w-4 h-4" />
                <span>{t.hero.btnBriefing}</span>
              </button>

              <button
                onClick={onExploreCapabilities}
                className="px-6 py-3.5 bg-[#12141b] hover:bg-[#1a1d27] border border-[#252834] text-gray-200 font-mono-tech text-xs tracking-wider uppercase transition-all flex items-center gap-2"
              >
                <span>{t.hero.btnCapabilities}</span>
                <ArrowRight className="w-4 h-4 text-[#A40000]" />
              </button>

              <a
                href="https://t.me/blackdaystriker"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 bg-[#0088cc]/15 hover:bg-[#0088cc]/25 border border-[#0088cc]/40 text-[#38bdf8] font-mono-tech text-xs tracking-wider uppercase transition-all flex items-center gap-2"
                title="Direct secure contact on Telegram: Blackday Striker"
              >
                <Send className="w-4 h-4" />
                <span>TELEGRAM</span>
              </a>
            </div>

            {/* Operational status tags */}
            <div className="pt-4 grid grid-cols-3 gap-3 border-t border-[#181a22] text-center lg:text-left">
              <div>
                <div className="text-[10px] font-mono-tech text-gray-500 uppercase tracking-widest">
                  READINESS
                </div>
                <div className="text-xs font-mono-tech text-emerald-400 font-semibold mt-0.5">
                  LEVEL 1 ACTIVE
                </div>
              </div>
              <div>
                <div className="text-[10px] font-mono-tech text-gray-500 uppercase tracking-widest">
                  ETHICAL JURISDICTION
                </div>
                <div className="text-xs font-mono-tech text-gray-200 mt-0.5">
                  STRICTLY LAWFUL
                </div>
              </div>
              <div>
                <div className="text-[10px] font-mono-tech text-gray-500 uppercase tracking-widest">
                  METHODOLOGY
                </div>
                <div className="text-xs font-mono-tech text-[#A40000] font-semibold mt-0.5">
                  SPYSTRIKER™ OPSEC
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-Impact Official Vector Centerpiece (Tactical Shield) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative p-6 sm:p-8 w-full max-w-md bg-gradient-to-b from-[#0f1118]/85 via-[#08090d]/95 to-[#040507] border border-[#212430] shadow-[0_20px_60px_rgba(0,0,0,0.9)] group">
              {/* Radar scanner sweep subtle overlay */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-white/10 rounded-full animate-radar origin-center" />
              </div>

              {/* Top mark label */}
              <div className="flex items-center justify-between text-[10px] font-mono-tech text-gray-400 mb-4 border-b border-[#1b1c24] pb-2">
                <span className="flex items-center gap-1.5 text-gray-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A40000]" />
                  {activeLogoVariant === 'principal' ? 'OFFICIAL EMBLEM // TACTICAL SHIELD' : 'ALTERNATIVE EMBLEM // ECLIPSE'}
                </span>
                <button
                  onClick={onOpenEmblems}
                  className="text-gray-400 hover:text-white flex items-center gap-1 underline underline-offset-2"
                >
                  <Eye className="w-3 h-3" />
                  Inspect Vector
                </button>
              </div>

              {/* Render the pristine vector emblem */}
              <div className="py-2 flex justify-center">
                {activeLogoVariant === 'principal' ? (
                  <LogoPrincipal variant="full" size="xl" showSubtitle={true} />
                ) : (
                  <LogoSecondary variant="full" size="xl" showSubtitle={true} />
                )}
              </div>

              {/* Bottom emblem metadata */}
              <div className="mt-4 pt-3 border-t border-[#181a22] flex items-center justify-between text-[11px] font-mono-tech text-gray-400">
                <span className="text-gray-300">
                  {activeLogoVariant === 'principal' ? 'SHIELD • SPREAD EAGLE • INFINITY • SKULL' : 'BLACK SUN • STRIKE EAGLE • SERPENT'}
                </span>
                <button
                  onClick={onOpenEmblems}
                  className="px-2.5 py-1 bg-[#161822] hover:bg-[#202330] text-gray-200 border border-[#2c3040] text-[10px] uppercase transition-colors"
                >
                  Emblem Switcher ▾
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Lower Hero Section: Dedicated Dynamic Threat Level Indicator Widget */}
        <div className="border-t border-[#181a24] pt-8">
          <div className="flex items-center gap-2 mb-3">
            <Radio className="w-4 h-4 text-[#A40000] animate-pulse" />
            <span className="text-xs font-mono-tech text-white uppercase font-bold tracking-widest">
              LIVE THREAT MONITORING MATRIX
            </span>
            <span className="text-gray-600 font-mono-tech text-xs">|</span>
            <span className="text-xs font-mono-tech text-gray-400">
              Interactive assessment based on user-selectable security parameters
            </span>
          </div>

          <ThreatLevelWidget onOpenBriefing={onOpenBriefing} />
        </div>
      </div>
    </section>
  );
};
