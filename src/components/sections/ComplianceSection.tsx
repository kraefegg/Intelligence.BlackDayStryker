import React from 'react';
import { useI18n } from '../../i18n/index.tsx';
import { ShieldCheck, Scale, AlertOctagon, CheckSquare, FileCheck } from 'lucide-react';

export const ComplianceSection: React.FC = () => {
  const { t } = useI18n();

  return (
    <section id="compliance" className="py-24 bg-[#070709] border-b border-[#181920]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono-tech text-[#A40000] uppercase tracking-[0.25em]">
            <Scale className="w-3.5 h-3.5" />
            LEGAL BOUNDARIES & COMPLIANCE
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            {t.compliance.title}
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            {t.compliance.statement}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Key Compliance Points */}
          <div className="lg:col-span-8 space-y-3">
            {t.compliance.points.map((point, idx) => (
              <div
                key={idx}
                className="p-4 bg-[#0c0d12] border border-[#1c1e28] flex items-start gap-3"
              >
                <CheckSquare className="w-4 h-4 text-[#A40000] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {point}
                </p>
              </div>
            ))}
          </div>

          {/* Institutional Integrity Notice Box */}
          <div className="lg:col-span-4 p-6 bg-[#0c0d12] border-t-2 border-t-[#A40000] border-x border-b border-[#1c1e28] space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono-tech text-white uppercase font-bold">
              <AlertOctagon className="w-4 h-4 text-[#A40000]" />
              Non-Affiliation Guarantee
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              BLACKDAY STRYKER maintains an uncompromising policy of transparency. We do not claim, imply, or fabricate relationships with national intelligence bureaus, federal law enforcement authorities, or military establishments. Our value rests entirely on verified methodology, structured analysis, and strategic independence.
            </p>
            <div className="p-3 bg-[#08090d] border border-[#161822] text-[11px] font-mono-tech text-gray-400">
              {t.compliance.disclaimer}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
