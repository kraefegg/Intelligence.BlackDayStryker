import React, { useState } from 'react';
import { useI18n } from '../../i18n/index.tsx';
import {
  Search,
  Radar,
  ShieldAlert,
  Crosshair,
  Shield,
  LifeBuoy,
  FileSearch,
  Layers,
  Anchor,
  Activity,
  AlertTriangle,
  CheckCircle2,
  Lock,
  ArrowRight,
} from 'lucide-react';

interface ServicesGridSectionProps {
  onOpenBriefing: () => void;
  activeFilter?: string;
}

export const ServicesGridSection: React.FC<ServicesGridSectionProps> = ({
  onOpenBriefing,
  activeFilter = 'all',
}) => {
  const { t } = useI18n();
  const [selectedCategory, setSelectedCategory] = useState<string>(activeFilter);

  const filterButtons = [
    { id: 'all', label: 'ALL CAPABILITIES' },
    { id: 'intelligence', label: 'INTELLIGENCE & OSINT' },
    { id: 'cyber', label: 'CYBER & SPYSTRIKER™' },
    { id: 'threat', label: 'COUNTER-THREAT & PROTECTION' },
    { id: 'infrastructure', label: 'CRITICAL INFRA & MARITIME' },
    { id: 'crisis', label: 'CRISIS & INVESTIGATIONS' },
  ];

  return (
    <section id="capabilities" className="py-24 bg-[#050505] border-b border-[#181920]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-block text-xs font-mono-tech text-[#A40000] uppercase tracking-[0.25em]">
              MANDATE ARCHITECTURE
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
              {t.services.sectionTitle}
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              {t.services.sectionSubtitle}
            </p>
          </div>

          <button
            onClick={onOpenBriefing}
            className="self-start md:self-auto px-6 py-3 bg-[#A40000] hover:bg-[#c40000] text-white font-mono-tech text-xs tracking-wider uppercase transition-all shadow-[0_0_15px_rgba(164,0,0,0.3)] flex items-center gap-2"
          >
            <Lock className="w-3.5 h-3.5" />
            {t.services.ctaButton}
          </button>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap gap-2 mb-12 border-b border-[#1b1c24] pb-4">
          {filterButtons.map((btn) => (
            <button
              key={btn.id}
              onClick={() => setSelectedCategory(btn.id)}
              className={`px-3.5 py-2 text-xs font-mono-tech uppercase transition-all ${
                selectedCategory === btn.id
                  ? 'bg-[#1b1e28] text-white border-b-2 border-[#A40000]'
                  : 'text-gray-400 hover:text-white hover:bg-[#101217]'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 01: Private Intelligence */}
          {(selectedCategory === 'all' || selectedCategory === 'intelligence') && (
            <div
              id="private-intelligence"
              className="p-8 bg-[#090a0f] border border-[#1d1f2a] hover:border-[#A40000]/60 transition-all flex flex-col justify-between"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between border-b border-[#181a24] pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#141620] flex items-center justify-center text-[#ff6b6b]">
                      <Search className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold uppercase tracking-wider text-white">
                        {t.services.privateIntel.title}
                      </h3>
                      <span className="text-[10px] font-mono-tech text-gray-400">
                        DECISION-LEVEL ADVISORY
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-mono-tech text-[#A40000]">SEC-01</span>
                </div>

                <p className="text-sm text-gray-300 leading-relaxed">
                  {t.services.privateIntel.desc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                  {t.services.privateIntel.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-gray-400">
                      <span className="w-1.5 h-1.5 bg-[#A40000]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#181a24] flex items-center justify-between">
                <button
                  onClick={onOpenBriefing}
                  className="text-xs font-mono-tech text-white hover:text-[#ff6b6b] flex items-center gap-1.5 uppercase"
                >
                  Request Mandate <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* 02: OSINT */}
          {(selectedCategory === 'all' || selectedCategory === 'intelligence') && (
            <div
              id="osint"
              className="p-8 bg-[#090a0f] border border-[#1d1f2a] hover:border-[#A40000]/60 transition-all flex flex-col justify-between"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between border-b border-[#181a24] pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#141620] flex items-center justify-center text-blue-400">
                      <Radar className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold uppercase tracking-wider text-white">
                        {t.services.osint.title}
                      </h3>
                      <span className="text-[10px] font-mono-tech text-gray-400">
                        LAWFUL OPEN-SOURCE RESEARCH
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-mono-tech text-blue-400">SEC-02</span>
                </div>

                <p className="text-sm text-gray-300 leading-relaxed">
                  {t.services.osint.desc}
                </p>

                {/* OSINT Pipeline */}
                <div className="p-3 bg-[#0f1118] border border-[#1e2230]">
                  <div className="text-[10px] font-mono-tech text-gray-400 uppercase tracking-widest mb-1.5">
                    Pipeline Architecture:
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5 text-[10px] font-mono-tech text-[#cbd5e1]">
                    {t.services.osint.pipeline.map((step, idx) => (
                      <React.Fragment key={idx}>
                        <span className="px-2 py-0.5 bg-[#171a24] border border-[#252a38] text-white">
                          {step}
                        </span>
                        {idx < t.services.osint.pipeline.length - 1 && (
                          <span className="text-[#A40000]">→</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                  {t.services.osint.items.slice(0, 8).map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-gray-400">
                      <span className="w-1.5 h-1.5 bg-blue-500" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#181a24] flex items-center justify-between">
                <button
                  onClick={onOpenBriefing}
                  className="text-xs font-mono-tech text-white hover:text-blue-400 flex items-center gap-1.5 uppercase"
                >
                  Commission OSINT Dossier <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* 03: Cybersecurity */}
          {(selectedCategory === 'all' || selectedCategory === 'cyber') && (
            <div
              id="cybersecurity"
              className="p-8 bg-[#090a0f] border border-[#1d1f2a] hover:border-[#A40000]/60 transition-all flex flex-col justify-between"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between border-b border-[#181a24] pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#141620] flex items-center justify-center text-yellow-500">
                      <ShieldAlert className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold uppercase tracking-wider text-white">
                        {t.services.cybersecurity.title}
                      </h3>
                      <span className="text-[10px] font-mono-tech text-gray-400">
                        DEFENSIVE POSTURE & CTI
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-mono-tech text-yellow-500">SEC-03</span>
                </div>

                <p className="text-sm text-gray-300 leading-relaxed">
                  {t.services.cybersecurity.desc}
                </p>

                {/* Mandatory Legal Statement */}
                <div className="p-3 bg-[#17130e] border border-[#302619] flex items-start gap-2.5 text-xs text-yellow-200/90 font-mono-tech">
                  <AlertTriangle className="w-4 h-4 text-yellow-500 shrink-0 mt-0.5" />
                  <span className="text-[11px] leading-tight">
                    {t.services.cybersecurity.notice}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                  {t.services.cybersecurity.items.slice(0, 8).map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-gray-400">
                      <span className="w-1.5 h-1.5 bg-yellow-500" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#181a24] flex items-center justify-between">
                <button
                  onClick={onOpenBriefing}
                  className="text-xs font-mono-tech text-white hover:text-yellow-400 flex items-center gap-1.5 uppercase"
                >
                  {t.services.cybersecurity.cta} <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* 04: SpyStriker™ (Proprietary) */}
          {(selectedCategory === 'all' || selectedCategory === 'cyber') && (
            <div
              id="spystriker"
              className="p-8 bg-[#0d0909] border border-[#311717] hover:border-[#A40000] transition-all flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 px-3 py-1 bg-[#A40000] text-white text-[9px] font-mono-tech uppercase font-bold tracking-widest">
                PROPRIETARY METHODOLOGY
              </div>

              <div className="space-y-5">
                <div className="flex items-center justify-between border-b border-[#2d1414] pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#1d0e0e] flex items-center justify-center text-[#ff6b6b]">
                      <Crosshair className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold uppercase tracking-wider text-white">
                        {t.services.spyStriker.title}
                      </h3>
                      <span className="text-[10px] font-mono-tech text-[#ff8080]">
                        {t.services.spyStriker.tagline}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-gray-200 leading-relaxed">
                  {t.services.spyStriker.desc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                  {t.services.spyStriker.items.slice(0, 8).map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-gray-300">
                      <span className="w-1.5 h-1.5 bg-[#C40000]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#2d1414] flex items-center justify-between">
                <button
                  onClick={onOpenBriefing}
                  className="text-xs font-mono-tech text-white hover:text-[#ff8080] flex items-center gap-1.5 uppercase font-bold"
                >
                  Initiate SpyStriker™ Audit <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* 05: Counter-Threat & Anti-Terrorism */}
          {(selectedCategory === 'all' || selectedCategory === 'threat') && (
            <div
              id="services-anti-terrorism"
              className="p-8 bg-[#090a0f] border border-[#1d1f2a] hover:border-[#A40000]/60 transition-all flex flex-col justify-between"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between border-b border-[#181a24] pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#141620] flex items-center justify-center text-red-500">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold uppercase tracking-wider text-white">
                        {t.services.antiTerrorism.title}
                      </h3>
                      <span className="text-[10px] font-mono-tech text-gray-400">
                        DEFENSIVE READINESS
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-mono-tech text-red-500">SEC-04</span>
                </div>

                <p className="text-sm text-gray-300 leading-relaxed">
                  {t.services.antiTerrorism.desc}
                </p>

                {/* 5-Phase Defensive Framework */}
                <div className="p-3 bg-[#0f1118] border border-[#1e2230]">
                  <div className="text-[10px] font-mono-tech text-gray-400 uppercase tracking-widest mb-1.5">
                    Defensive Prevention Cycle:
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5 text-[10px] font-mono-tech text-[#cbd5e1]">
                    {t.services.antiTerrorism.framework.map((step, idx) => (
                      <React.Fragment key={idx}>
                        <span className="px-2 py-0.5 bg-[#171a24] border border-[#252a38] text-white">
                          {step}
                        </span>
                        {idx < t.services.antiTerrorism.framework.length - 1 && (
                          <span className="text-[#A40000]">→</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                  {t.services.antiTerrorism.items.slice(0, 8).map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-gray-400">
                      <span className="w-1.5 h-1.5 bg-red-500" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#181a24] flex items-center justify-between">
                <button
                  onClick={onOpenBriefing}
                  className="text-xs font-mono-tech text-white hover:text-red-400 flex items-center gap-1.5 uppercase"
                >
                  Request Threat Evaluation <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* 06: Rescue & Guard */}
          {(selectedCategory === 'all' || selectedCategory === 'threat') && (
            <div
              id="rescue-guard"
              className="p-8 bg-[#090a0f] border border-[#1d1f2a] hover:border-[#A40000]/60 transition-all flex flex-col justify-between"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between border-b border-[#181a24] pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#141620] flex items-center justify-center text-emerald-400">
                      <LifeBuoy className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold uppercase tracking-wider text-white">
                        {t.services.rescueGuard.title}
                      </h3>
                      <span className="text-[10px] font-mono-tech text-gray-400">
                        {t.services.rescueGuard.tagline}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-mono-tech text-emerald-400">SEC-05</span>
                </div>

                <p className="text-sm text-gray-300 leading-relaxed">
                  {t.services.rescueGuard.desc}
                </p>

                <div className="p-3 bg-[#0d1210] border border-[#192b22] text-[11px] font-mono-tech text-emerald-200/90 leading-tight">
                  {t.services.rescueGuard.notice}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                  {t.services.rescueGuard.items.slice(0, 8).map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-gray-400">
                      <span className="w-1.5 h-1.5 bg-emerald-500" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#181a24] flex items-center justify-between">
                <button
                  onClick={onOpenBriefing}
                  className="text-xs font-mono-tech text-white hover:text-emerald-400 flex items-center gap-1.5 uppercase"
                >
                  Coordinate Emergency Protocol <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* 07: Critical Infrastructure */}
          {(selectedCategory === 'all' || selectedCategory === 'infrastructure') && (
            <div
              id="critical-infrastructure"
              className="p-8 bg-[#090a0f] border border-[#1d1f2a] hover:border-[#A40000]/60 transition-all flex flex-col justify-between"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between border-b border-[#181a24] pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#141620] flex items-center justify-center text-orange-400">
                      <Layers className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold uppercase tracking-wider text-white">
                        {t.services.criticalInfra.title}
                      </h3>
                      <span className="text-[10px] font-mono-tech text-gray-400">
                        PHYSICAL & HYBRID VULNERABILITY
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-mono-tech text-orange-400">SEC-06</span>
                </div>

                <p className="text-sm text-gray-300 leading-relaxed">
                  {t.services.criticalInfra.desc}
                </p>

                {/* Sectors badges */}
                <div className="flex flex-wrap gap-1.5">
                  {t.services.criticalInfra.sectors.map((sector, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 bg-[#12141c] border border-[#212432] text-[10px] font-mono-tech text-gray-300"
                    >
                      {sector}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                  {t.services.criticalInfra.items.slice(0, 6).map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-gray-400">
                      <span className="w-1.5 h-1.5 bg-orange-500" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#181a24] flex items-center justify-between">
                <button
                  onClick={onOpenBriefing}
                  className="text-xs font-mono-tech text-white hover:text-orange-400 flex items-center gap-1.5 uppercase"
                >
                  Audit Infrastructure Resilience <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* 08: Maritime Intelligence */}
          {(selectedCategory === 'all' || selectedCategory === 'infrastructure') && (
            <div
              id="maritime"
              className="p-8 bg-[#090a0f] border border-[#1d1f2a] hover:border-[#A40000]/60 transition-all flex flex-col justify-between"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between border-b border-[#181a24] pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#141620] flex items-center justify-center text-cyan-400">
                      <Anchor className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold uppercase tracking-wider text-white">
                        {t.services.maritime.title}
                      </h3>
                      <span className="text-[10px] font-mono-tech text-gray-400">
                        PORTS, FLEETS & CHOKEPOINTS
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-mono-tech text-cyan-400">SEC-07</span>
                </div>

                <p className="text-sm text-gray-300 leading-relaxed">
                  {t.services.maritime.desc}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {t.services.maritime.frameworks.map((fw, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 bg-[#0f171e] border border-[#1c2e3d] text-[10px] font-mono-tech text-cyan-300"
                    >
                      {fw}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                  {t.services.maritime.items.slice(0, 6).map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-gray-400">
                      <span className="w-1.5 h-1.5 bg-cyan-400" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#181a24] flex items-center justify-between">
                <button
                  onClick={onOpenBriefing}
                  className="text-xs font-mono-tech text-white hover:text-cyan-400 flex items-center gap-1.5 uppercase"
                >
                  Engage Maritime Security <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* 09: Research & Investigations */}
          {(selectedCategory === 'all' || selectedCategory === 'crisis') && (
            <div
              id="investigations"
              className="p-8 bg-[#090a0f] border border-[#1d1f2a] hover:border-[#A40000]/60 transition-all flex flex-col justify-between"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between border-b border-[#181a24] pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#141620] flex items-center justify-center text-purple-400">
                      <FileSearch className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold uppercase tracking-wider text-white">
                        {t.services.investigations.title}
                      </h3>
                      <span className="text-[10px] font-mono-tech text-gray-400">
                        EVIDENCE-BASED FACTUAL FINDING
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-mono-tech text-purple-400">SEC-08</span>
                </div>

                <p className="text-sm text-gray-300 leading-relaxed">
                  {t.services.investigations.desc}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {t.services.investigations.principles.map((pr, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 bg-[#17131e] border border-[#2d223c] text-[10px] font-mono-tech text-purple-300 font-bold"
                    >
                      {pr}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                  {t.services.investigations.items.slice(0, 8).map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-gray-400">
                      <span className="w-1.5 h-1.5 bg-purple-400" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#181a24] flex items-center justify-between">
                <button
                  onClick={onOpenBriefing}
                  className="text-xs font-mono-tech text-white hover:text-purple-400 flex items-center gap-1.5 uppercase"
                >
                  Initiate Due Diligence <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* 10: Crisis & Risk */}
          {(selectedCategory === 'all' || selectedCategory === 'crisis') && (
            <div
              id="crisis-risk"
              className="p-8 bg-[#090a0f] border border-[#1d1f2a] hover:border-[#A40000]/60 transition-all flex flex-col justify-between"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between border-b border-[#181a24] pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#141620] flex items-center justify-center text-[#ff6b6b]">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold uppercase tracking-wider text-white">
                        {t.services.crisisRisk.title}
                      </h3>
                      <span className="text-[10px] font-mono-tech text-gray-400">
                        {t.services.crisisRisk.tagline}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-mono-tech text-[#ff6b6b]">SEC-09</span>
                </div>

                <p className="text-sm text-gray-300 leading-relaxed">
                  {t.services.crisisRisk.desc}
                </p>

                {/* Crisis Cycle */}
                <div className="p-3 bg-[#0f1118] border border-[#1e2230]">
                  <div className="text-[10px] font-mono-tech text-gray-400 uppercase tracking-widest mb-1.5">
                    Contingency Response Cycle:
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5 text-[10px] font-mono-tech text-[#cbd5e1]">
                    {t.services.crisisRisk.cycle.map((step, idx) => (
                      <React.Fragment key={idx}>
                        <span className="px-2 py-0.5 bg-[#171a24] border border-[#252a38] text-white">
                          {step}
                        </span>
                        {idx < t.services.crisisRisk.cycle.length - 1 && (
                          <span className="text-[#A40000]">→</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                  {t.services.crisisRisk.items.slice(0, 8).map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-gray-400">
                      <span className="w-1.5 h-1.5 bg-[#A40000]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#181a24] flex items-center justify-between">
                <button
                  onClick={onOpenBriefing}
                  className="text-xs font-mono-tech text-white hover:text-[#ff6b6b] flex items-center gap-1.5 uppercase"
                >
                  Activate Crisis Advisory <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
