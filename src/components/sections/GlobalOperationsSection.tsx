import React, { useState } from 'react';
import { useI18n } from '../../i18n/index.tsx';
import { Globe, MapPin, ShieldCheck, Compass } from 'lucide-react';

export const GlobalOperationsSection: React.FC = () => {
  const { t } = useI18n();
  const [selectedRegion, setSelectedRegion] = useState<number>(0);

  return (
    <section id="international" className="py-24 bg-[#050507] border-b border-[#181920]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono-tech text-[#A40000] uppercase tracking-[0.25em]">
            <Globe className="w-3.5 h-3.5" />
            OPERATIONAL THEATERS
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            {t.international.title}
          </h2>
          <p className="text-base text-gray-300 leading-relaxed">
            {t.international.coreIdea}
          </p>
        </div>

        {/* Global Hubs Grid & Interactive Region Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Region Tabs */}
          <div className="lg:col-span-5 space-y-2">
            {t.international.regions.map((region, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedRegion(idx)}
                className={`w-full p-4 text-left border transition-all flex items-center justify-between ${
                  selectedRegion === idx
                    ? 'bg-[#141620] border-[#A40000] text-white shadow-[0_0_15px_rgba(164,0,0,0.2)]'
                    : 'bg-[#090a0f] border-[#1a1c26] text-gray-400 hover:text-white hover:bg-[#0e1017]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <MapPin
                    className={`w-4 h-4 ${
                      selectedRegion === idx ? 'text-[#A40000]' : 'text-gray-500'
                    }`}
                  />
                  <div>
                    <div className="font-heading text-xs font-bold uppercase tracking-wider text-white">
                      {region.name}
                    </div>
                    <div className="text-[10px] font-mono-tech text-gray-500">
                      {region.details.split(',')[0]}
                    </div>
                  </div>
                </div>
                <span className="font-mono-tech text-xs text-gray-600">0{idx + 1}</span>
              </button>
            ))}
          </div>

          {/* Region Details Display Panel */}
          <div className="lg:col-span-7 p-8 bg-[#090a0f] border border-[#1d202c] relative">
            <div className="flex items-center justify-between border-b border-[#181a24] pb-4 mb-6">
              <div>
                <span className="text-[10px] font-mono-tech text-[#A40000] uppercase tracking-widest block mb-1">
                  THEATER SPECIFICATION
                </span>
                <h3 className="font-heading text-2xl font-bold uppercase text-white tracking-wide">
                  {t.international.regions[selectedRegion].name}
                </h3>
              </div>
              <Compass className="w-8 h-8 text-gray-700" />
            </div>

            <div className="space-y-6">
              <div>
                <label className="text-[10px] font-mono-tech text-gray-500 uppercase tracking-widest block mb-1">
                  Primary Coordination Nodes & Corridors:
                </label>
                <p className="text-sm font-mono-tech text-[#e2e8f0]">
                  {t.international.regions[selectedRegion].details}
                </p>
              </div>

              <div>
                <label className="text-[10px] font-mono-tech text-gray-500 uppercase tracking-widest block mb-1">
                  Core Advisory Mandate & Sector Focus:
                </label>
                <p className="text-sm text-gray-300 leading-relaxed bg-[#10121a] border border-[#1c202c] p-4">
                  {t.international.regions[selectedRegion].focus}
                </p>
              </div>

              {/* Geographic Coordinates HUD box */}
              <div className="p-4 bg-[#06070a] border border-[#161822] grid grid-cols-2 sm:grid-cols-4 gap-4 text-[10px] font-mono-tech text-gray-400">
                <div>
                  <span className="text-gray-600 block">JURISDICTION:</span>
                  <span className="text-white">SOVEREIGN LAW</span>
                </div>
                <div>
                  <span className="text-gray-600 block">LOCAL PARTNERS:</span>
                  <span className="text-white">ACCREDITED</span>
                </div>
                <div>
                  <span className="text-gray-600 block">LGPD COMPLIANCE:</span>
                  <span className="text-emerald-400">VERIFIED</span>
                </div>
                <div>
                  <span className="text-gray-600 block">MANDATE SCOPE:</span>
                  <span className="text-white">STRICT BOUNDS</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mandatory International Operations Disclaimer */}
        <div className="mt-12 p-4 bg-[#0a0b10] border border-[#1a1c24] flex items-start gap-3 text-xs text-gray-400 font-mono-tech">
          <ShieldCheck className="w-4 h-4 text-[#A40000] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            {t.international.statement}
          </p>
        </div>
      </div>
    </section>
  );
};
