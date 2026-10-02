import React from 'react';
import { useI18n } from '../../i18n/index.tsx';
import { LogoPrincipal } from '../logos/LogoPrincipal.tsx';
import { LogoSecondary } from '../logos/LogoSecondary.tsx';
import { Sun, ShieldAlert, Crosshair, ShieldCheck, ArrowRight, Eye, Sparkles } from 'lucide-react';

interface AboutSectionProps {
  onOpenEmblems: () => void;
  activeLogoVariant: 'principal' | 'secondary';
  onOpenBriefing: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenEmblems,
  activeLogoVariant,
  onOpenBriefing,
}) => {
  const { t } = useI18n();

  return (
    <section id="about" className="py-24 bg-[#060608] border-b border-[#181920]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Brand Concept Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-block text-xs font-mono-tech text-[#A40000] uppercase tracking-[0.25em]">
            ORGANIZATIONAL PHILOSOPHY
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            THE ANATOMY OF <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">
              BLACKDAY STRYKER
            </span>
          </h2>
          <p className="text-base text-gray-300 leading-relaxed">
            BLACKDAY STRYKER was founded upon an uncompromising premise: when environments turn volatile, standard consulting formulas fail. High-stakes moments require structured intelligence and calibrated decisive action.
          </p>
        </div>

        {/* Dual Philosophy Cards (BLACKDAY vs STRYKER) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* BLACKDAY */}
          <div className="p-8 bg-[#090a0f] border-t-4 border-t-[#A40000] border-x border-b border-[#1a1c26] space-y-5">
            <div className="flex items-center justify-between">
              <span className="font-heading text-2xl font-black text-white tracking-widest uppercase">
                BLACKDAY
              </span>
              <span className="px-2.5 py-1 text-[10px] font-mono-tech bg-[#A40000]/20 text-[#ff6b6b] border border-[#A40000]/40 uppercase">
                THE CRITICAL MOMENT
              </span>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Represents the threshold of crisis. The exact inflection point when an organization becomes exposed, information turns uncertain, threats materialize, and vital decisions can no longer be delayed.
            </p>
            <ul className="space-y-2 text-xs font-mono-tech text-gray-400">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#A40000]" />
                Emergence of asymmetrical or hidden threats
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#A40000]" />
                Information ambiguity & severe signal distortion
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#A40000]" />
                Exposure of critical assets or leadership
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#A40000]" />
                Urgent requirement for specialized factual clarity
              </li>
            </ul>
          </div>

          {/* STRYKER */}
          <div className="p-8 bg-[#090a0f] border-t-4 border-t-gray-300 border-x border-b border-[#1a1c26] space-y-5">
            <div className="flex items-center justify-between">
              <span className="font-heading text-2xl font-black text-white tracking-widest uppercase">
                STRYKER
              </span>
              <span className="px-2.5 py-1 text-[10px] font-mono-tech bg-[#1e2430] text-gray-200 border border-[#303848] uppercase">
                DECISIVE ACTION
              </span>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Represents disciplined response. Not uncontrolled or blind force, but calibrated strategic intervention, breaking through uncertainty, protecting essential interests, and converting intelligence into decisive advantage.
            </p>
            <ul className="space-y-2 text-xs font-mono-tech text-gray-400">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-gray-300" />
                Surgical precision & objective threat isolation
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-gray-300" />
                Breaking through corporate and informational fog
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-gray-300" />
                Preservation of assets, continuity, and reputation
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-gray-300" />
                Translating deep analysis into executable strategy
              </li>
            </ul>
          </div>
        </div>

        {/* Core Mathematical Equation Banner */}
        <div className="p-8 bg-[#0a0c10] border border-[#1e202a] text-center mb-16 space-y-2">
          <div className="text-xs font-mono-tech text-[#A40000] uppercase tracking-widest">
            OPERATIONAL FORMULA
          </div>
          <div className="font-heading text-xl sm:text-3xl font-black text-white uppercase tracking-wider">
            BLACKDAY <span className="text-gray-500">→</span> CRITICAL MOMENT &nbsp;&nbsp;|&nbsp;&nbsp; STRYKER <span className="text-gray-500">→</span> DECISIVE RESPONSE
          </div>
          <div className="text-sm sm:text-base font-mono-tech text-gray-300 pt-1">
            CRITICAL MOMENT. DECISIVE INTELLIGENCE.
          </div>
        </div>

        {/* Emblems Dual Showcase Banner */}
        <div className="p-8 bg-[#090a0f] border border-[#1c1e28]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 bg-[#050608] border border-[#1b1c24] flex items-center justify-center p-2">
                {activeLogoVariant === 'principal' ? (
                  <LogoPrincipal variant="mark" size="md" />
                ) : (
                  <LogoSecondary variant="mark" size="md" />
                )}
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-mono-tech text-[#A40000] uppercase tracking-widest block">
                  HERALDIC IDENTITY
                </span>
                <h4 className="font-heading text-lg font-bold uppercase text-white">
                  {activeLogoVariant === 'principal'
                    ? 'Logo 2 (Principal) — Black Sun Eclipse & Dynamic Strike'
                    : 'Logo 1 (Secundário) — Tactical Shield & Infinity Loop'}
                </h4>
                <p className="text-xs text-gray-400 max-w-lg">
                  Incorporating the Black Sun (Blackday), the striking Eagle (vision & precision), the coiling Serpent (adaptability & stealth), and the subtle negative-space skull (risk awareness).
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={onOpenEmblems}
                className="px-5 py-2.5 bg-[#171922] hover:bg-[#202330] border border-[#2b3040] text-gray-200 text-xs font-mono-tech uppercase flex items-center gap-2 transition-colors"
              >
                <Eye className="w-3.5 h-3.5 text-[#A40000]" />
                Inspect Both Emblems
              </button>
              <button
                onClick={onOpenBriefing}
                className="px-5 py-2.5 bg-[#A40000] hover:bg-[#c40000] text-white text-xs font-mono-tech uppercase flex items-center gap-2 transition-colors"
              >
                Briefing
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
