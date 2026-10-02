import React from 'react';
import { useI18n } from '../../i18n/index.tsx';
import { Search, ShieldAlert, Crosshair, ArrowUpRight } from 'lucide-react';

interface ValuePropositionSectionProps {
  onSelectPillar: (pillar: string) => void;
}

export const ValuePropositionSection: React.FC<ValuePropositionSectionProps> = ({
  onSelectPillar,
}) => {
  const { t } = useI18n();

  return (
    <section className="relative py-20 bg-[#07070a] border-y border-[#181920]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Headline */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-block text-xs font-mono-tech text-[#A40000] uppercase tracking-[0.25em]">
            EXECUTIVE PARADIGM
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            {t.valueProp.title} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A40000] via-[#c40000] to-red-400">
              {t.valueProp.subtitle}
            </span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 leading-relaxed pt-2">
            In high-consequence environments, raw data creates confusion. We filter out the noise and deliver verified, actionable intelligence that shields organizations and enables decisive leadership.
          </p>
        </div>

        {/* 3 Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Intelligence */}
          <div
            onClick={() => onSelectPillar('private-intelligence')}
            className="group cursor-pointer p-8 bg-[#0c0d12] hover:bg-[#11131a] border border-[#1e2029] hover:border-[#A40000]/60 transition-all duration-300 relative flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 bg-[#171922] border border-[#262836] flex items-center justify-center text-gray-300 group-hover:text-white group-hover:border-[#A40000] transition-colors">
                <Search className="w-6 h-6 text-[#A40000]" />
              </div>
              <div className="text-[10px] font-mono-tech text-gray-400 uppercase tracking-widest">
                PILLAR 01 // ANALYSIS
              </div>
              <h3 className="font-heading text-xl font-bold uppercase text-white tracking-wide">
                {t.valueProp.card1Title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {t.valueProp.card1Desc}
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-[#181a22] flex items-center justify-between text-xs font-mono-tech text-gray-400 group-hover:text-white">
              <span>EXPLORE PRIVATE INTEL</span>
              <ArrowUpRight className="w-4 h-4 text-[#A40000] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </div>

          {/* Card 2: Security */}
          <div
            onClick={() => onSelectPillar('cybersecurity')}
            className="group cursor-pointer p-8 bg-[#0c0d12] hover:bg-[#11131a] border border-[#1e2029] hover:border-[#A40000]/60 transition-all duration-300 relative flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 bg-[#171922] border border-[#262836] flex items-center justify-center text-gray-300 group-hover:text-white group-hover:border-[#A40000] transition-colors">
                <ShieldAlert className="w-6 h-6 text-yellow-500" />
              </div>
              <div className="text-[10px] font-mono-tech text-gray-400 uppercase tracking-widest">
                PILLAR 02 // DEFENSE
              </div>
              <h3 className="font-heading text-xl font-bold uppercase text-white tracking-wide">
                {t.valueProp.card2Title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {t.valueProp.card2Desc}
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-[#181a22] flex items-center justify-between text-xs font-mono-tech text-gray-400 group-hover:text-white">
              <span>EXPLORE CYBER & THREAT</span>
              <ArrowUpRight className="w-4 h-4 text-[#A40000] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </div>

          {/* Card 3: Decisive Action */}
          <div
            onClick={() => onSelectPillar('crisis-risk')}
            className="group cursor-pointer p-8 bg-[#0c0d12] hover:bg-[#11131a] border border-[#1e2029] hover:border-[#A40000]/60 transition-all duration-300 relative flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 bg-[#171922] border border-[#262836] flex items-center justify-center text-gray-300 group-hover:text-white group-hover:border-[#A40000] transition-colors">
                <Crosshair className="w-6 h-6 text-[#C40000]" />
              </div>
              <div className="text-[10px] font-mono-tech text-gray-400 uppercase tracking-widest">
                PILLAR 03 // STRIKE
              </div>
              <h3 className="font-heading text-xl font-bold uppercase text-white tracking-wide">
                {t.valueProp.card3Title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {t.valueProp.card3Desc}
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-[#181a22] flex items-center justify-between text-xs font-mono-tech text-gray-400 group-hover:text-white">
              <span>EXPLORE DECISION RESPONSE</span>
              <ArrowUpRight className="w-4 h-4 text-[#A40000] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
