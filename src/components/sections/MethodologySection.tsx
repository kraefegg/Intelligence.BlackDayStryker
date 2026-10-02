import React, { useState } from 'react';
import { useI18n } from '../../i18n/index.tsx';
import {
  FileText,
  Database,
  CheckCircle2,
  GitBranch,
  ShieldCheck,
  RefreshCw,
  AlertCircle,
  HelpCircle,
} from 'lucide-react';

export const MethodologySection: React.FC = () => {
  const { t } = useI18n();
  const [activeStage, setActiveStage] = useState<number>(0);

  const stageIcons = [
    FileText,
    Database,
    CheckCircle2,
    GitBranch,
    ShieldCheck,
    RefreshCw,
  ];

  return (
    <section id="methodology" className="py-24 bg-[#07070a] border-b border-[#181920]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-block text-xs font-mono-tech text-[#A40000] uppercase tracking-[0.25em]">
            SYSTEMATIC REPRODUCIBILITY
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            {t.methodology.title}
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            {t.methodology.subtitle}
          </p>
        </div>

        {/* 6-Stage Timeline Stepper */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {t.methodology.stages.map((stage, idx) => {
            const Icon = stageIcons[idx];
            return (
              <button
                key={idx}
                onClick={() => setActiveStage(idx)}
                className={`p-4 text-left border transition-all ${
                  activeStage === idx
                    ? 'bg-[#151722] border-[#A40000] text-white shadow-[0_0_15px_rgba(164,0,0,0.2)]'
                    : 'bg-[#0a0b10] border-[#1b1d26] text-gray-400 hover:text-white hover:bg-[#0f1118]'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono-tech text-xs font-bold text-[#A40000]">
                    {stage.number}
                  </span>
                  <Icon className="w-4 h-4 text-gray-400" />
                </div>
                <div className="font-heading text-xs font-bold uppercase tracking-wider text-white">
                  {stage.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Panel */}
        <div className="p-8 bg-[#0a0b10] border border-[#1d1f2b] mb-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#A40000]/5 rounded-bl-full pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono-tech text-[#A40000] uppercase tracking-widest">
                STAGE {t.methodology.stages[activeStage].number} // EXECUTION DETAILS
              </span>
              <h3 className="font-heading text-2xl font-bold uppercase text-white tracking-wide">
                {t.methodology.stages[activeStage].name}
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                {t.methodology.stages[activeStage].desc}
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {t.methodology.stages[activeStage].details.map((detail, dIdx) => (
                  <div
                    key={dIdx}
                    className="p-3.5 bg-[#10121a] border border-[#1e212d] flex items-center gap-2.5 text-xs text-gray-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#A40000] shrink-0" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Intelligence Confidence Framework (Section 25) */}
        <div className="border-t border-[#181920] pt-16">
          <div className="max-w-2xl mb-10 space-y-2">
            <span className="text-xs font-mono-tech text-[#A40000] uppercase tracking-widest">
              SOURCE ACCREDITATION & RELIABILITY
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold uppercase text-white tracking-wide">
              {t.methodology.confidenceTitle}
            </h3>
            <p className="text-xs sm:text-sm text-gray-400">
              {t.methodology.confidenceSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* High Confidence */}
            <div className="p-6 bg-[#090b10] border-t-2 border-t-emerald-500 border-x border-b border-[#181a24] space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 text-[10px] font-mono-tech bg-emerald-950/80 text-emerald-400 font-bold uppercase border border-emerald-800/40">
                  {t.methodology.confidenceLevels[0].level}
                </span>
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              </div>
              <h4 className="font-heading text-base font-bold text-white uppercase">
                {t.methodology.confidenceLevels[0].title}
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                {t.methodology.confidenceLevels[0].desc}
              </p>
            </div>

            {/* Moderate Confidence */}
            <div className="p-6 bg-[#090b10] border-t-2 border-t-amber-500 border-x border-b border-[#181a24] space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 text-[10px] font-mono-tech bg-amber-950/80 text-amber-400 font-bold uppercase border border-amber-800/40">
                  {t.methodology.confidenceLevels[1].level}
                </span>
                <AlertCircle className="w-4 h-4 text-amber-400" />
              </div>
              <h4 className="font-heading text-base font-bold text-white uppercase">
                {t.methodology.confidenceLevels[1].title}
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                {t.methodology.confidenceLevels[1].desc}
              </p>
            </div>

            {/* Low Confidence */}
            <div className="p-6 bg-[#090b10] border-t-2 border-t-[#A40000] border-x border-b border-[#181a24] space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 text-[10px] font-mono-tech bg-red-950/80 text-[#ff6b6b] font-bold uppercase border border-red-800/40">
                  {t.methodology.confidenceLevels[2].level}
                </span>
                <HelpCircle className="w-4 h-4 text-[#ff6b6b]" />
              </div>
              <h4 className="font-heading text-base font-bold text-white uppercase">
                {t.methodology.confidenceLevels[2].title}
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                {t.methodology.confidenceLevels[2].desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
