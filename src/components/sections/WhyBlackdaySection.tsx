import React from 'react';
import { useI18n } from '../../i18n/index.tsx';
import { ShieldCheck, Search, Crosshair, Zap, Building2, Briefcase } from 'lucide-react';

export const WhyBlackdaySection: React.FC = () => {
  const { t } = useI18n();

  const pillarIcons = [ShieldCheck, Search, Crosshair, Zap];

  return (
    <section className="py-24 bg-[#050505] border-b border-[#181920]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Why Blackday Stryker */}
        <div className="mb-20">
          <div className="max-w-3xl mb-12 space-y-3">
            <div className="inline-block text-xs font-mono-tech text-[#A40000] uppercase tracking-[0.25em]">
              CORE PILLARS
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
              {t.whyUs.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.whyUs.pillars.map((pillar, idx) => {
              const Icon = pillarIcons[idx] || ShieldCheck;
              return (
                <div
                  key={idx}
                  className="p-6 bg-[#090a0f] border border-[#1b1d28] hover:border-[#A40000]/60 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-10 h-10 bg-[#141622] flex items-center justify-center text-[#ff6b6b]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="text-[10px] font-mono-tech text-gray-500 uppercase tracking-widest">
                      PILLAR 0{idx + 1}
                    </div>
                    <h3 className="font-heading text-lg font-bold uppercase text-white tracking-wide">
                      {pillar.name}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Client Sectors Matrix (Section 26) */}
        <div className="p-8 bg-[#0a0b10] border border-[#1d202c]">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 pb-4 border-b border-[#181a24] gap-4">
            <div>
              <span className="text-[10px] font-mono-tech text-[#A40000] uppercase tracking-widest block mb-1">
                INSTITUTIONAL CLIENT BASE
              </span>
              <h3 className="font-heading text-2xl font-bold uppercase text-white tracking-wide">
                {t.clientSegments.title}
              </h3>
            </div>
            <p className="text-xs text-gray-400 max-w-md font-mono-tech">
              {t.clientSegments.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {t.clientSegments.sectors.map((sec, idx) => (
              <div
                key={idx}
                className="p-4 bg-[#10121a] border border-[#1a1c26] hover:border-gray-500 transition-colors flex flex-col justify-between"
              >
                <Briefcase className="w-4 h-4 text-gray-400 mb-2" />
                <span className="font-heading text-xs font-bold uppercase text-gray-200 tracking-wide">
                  {sec}
                </span>
                <span className="font-mono-tech text-[9px] text-gray-400 mt-2 block">
                  REF // S-{idx + 10}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
