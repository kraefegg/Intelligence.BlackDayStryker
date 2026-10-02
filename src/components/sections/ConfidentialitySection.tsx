import React from 'react';
import { useI18n } from '../../i18n/index.tsx';
import {
  Lock,
  FileCheck,
  EyeOff,
  KeyRound,
  ShieldCheck,
  FileSpreadsheet,
} from 'lucide-react';

export const ConfidentialitySection: React.FC = () => {
  const { t } = useI18n();

  const indicators = [
    { label: t.confidentiality.badge1, icon: Lock, desc: 'Protected by strict non-disclosure covenant' },
    { label: t.confidentiality.badge2, icon: FileCheck, desc: 'Bilateral legal NDAs executed prior to mandate' },
    { label: t.confidentiality.badge3, icon: EyeOff, desc: 'Compartmentalized data silo per engagement' },
    { label: t.confidentiality.badge4, icon: KeyRound, desc: 'Hardware-key and role-limited authorization' },
    { label: t.confidentiality.badge5, icon: ShieldCheck, desc: 'End-to-end encrypted voice & PGP transmission' },
    { label: t.confidentiality.badge6, icon: FileSpreadsheet, desc: 'Explicitly scoped and bound by legal mandate' },
  ];

  return (
    <section id="confidentiality" className="py-24 bg-[#050507] border-b border-[#181920]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono-tech text-[#A40000] uppercase tracking-[0.25em]">
            <Lock className="w-3.5 h-3.5" />
            OPERATIONAL SECURITY CORE
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            {t.confidentiality.heading}
          </h2>
          <p className="text-base text-gray-300 leading-relaxed">
            {t.confidentiality.lead}
          </p>
        </div>

        {/* 6 Key Indicators Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {indicators.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-5 bg-[#090a0f] border border-[#1b1d25] flex flex-col justify-between hover:border-[#A40000]/50 transition-colors"
              >
                <div>
                  <div className="w-8 h-8 bg-[#13151d] flex items-center justify-center text-[#ff6b6b] mb-3">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="font-heading text-xs font-bold text-white uppercase tracking-wider mb-1">
                    {item.label}
                  </h4>
                </div>
                <p className="text-[10px] text-gray-400 font-mono-tech leading-tight mt-2">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Information Classification Matrix (Section 40) */}
        <div className="bg-[#09090c] border border-[#1e202a] p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#1b1c24] gap-4 mb-6">
            <div>
              <span className="text-[10px] font-mono-tech text-gray-400 uppercase tracking-widest block mb-1">
                STANDARDIZED PROTOCOL
              </span>
              <h3 className="font-heading text-xl font-bold uppercase tracking-wider text-white">
                {t.confidentiality.classificationTitle}
              </h3>
            </div>
            <div className="text-xs font-mono-tech text-gray-400">
              DISCRETION POLICY // REV. 2026
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Level 1: Public */}
            <div className="p-4 bg-[#0d0e14] border border-[#1b1d25]">
              <div className="flex items-center justify-between mb-2">
                <span className="px-2 py-0.5 text-[9px] font-mono-tech bg-gray-800 text-gray-300 font-bold uppercase">
                  {t.confidentiality.levels.public.label}
                </span>
                <span className="text-[9px] font-mono-tech text-gray-400">TIER 1</span>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed mt-2">
                {t.confidentiality.levels.public.desc}
              </p>
            </div>

            {/* Level 2: Internal */}
            <div className="p-4 bg-[#0d0e14] border border-[#1b1d25]">
              <div className="flex items-center justify-between mb-2">
                <span className="px-2 py-0.5 text-[9px] font-mono-tech bg-blue-900/60 text-blue-300 font-bold uppercase">
                  {t.confidentiality.levels.internal.label}
                </span>
                <span className="text-[9px] font-mono-tech text-gray-400">TIER 2</span>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed mt-2">
                {t.confidentiality.levels.internal.desc}
              </p>
            </div>

            {/* Level 3: Confidential */}
            <div className="p-4 bg-[#0d0e14] border border-[#2b2520]">
              <div className="flex items-center justify-between mb-2">
                <span className="px-2 py-0.5 text-[9px] font-mono-tech bg-amber-900/60 text-amber-300 font-bold uppercase">
                  {t.confidentiality.levels.confidential.label}
                </span>
                <span className="text-[9px] font-mono-tech text-gray-400">TIER 3</span>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed mt-2">
                {t.confidentiality.levels.confidential.desc}
              </p>
            </div>

            {/* Level 4: Strictly Confidential */}
            <div className="p-4 bg-[#140c0c] border border-[#3b1919]">
              <div className="flex items-center justify-between mb-2">
                <span className="px-2 py-0.5 text-[9px] font-mono-tech bg-[#A40000] text-white font-bold uppercase">
                  {t.confidentiality.levels.strictlyConfidential.label}
                </span>
                <span className="text-[9px] font-mono-tech text-[#ff6b6b]">TIER 4 (MAX)</span>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed mt-2">
                {t.confidentiality.levels.strictlyConfidential.desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
