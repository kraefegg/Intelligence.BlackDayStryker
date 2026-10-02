import React, { useState } from 'react';
import { useI18n } from '../../i18n/index.tsx';
import {
  ShieldAlert,
  Crosshair,
  AlertTriangle,
  Lock,
  ArrowRight,
  Eye,
  CheckCircle2,
  Activity,
  Layers,
  FileCheck,
  Send,
} from 'lucide-react';

interface CriticalSecuritySectionProps {
  onOpenBriefing: () => void;
}

export const CriticalSecuritySection: React.FC<CriticalSecuritySectionProps> = ({
  onOpenBriefing,
}) => {
  const { t } = useI18n();
  const [selectedScenarioIdx, setSelectedScenarioIdx] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<'matrix' | 'tabletop' | 'audits'>('matrix');

  const selectedScenario = t.criticalSecurity.scenarios[selectedScenarioIdx] || t.criticalSecurity.scenarios[0];

  return (
    <section id="anti-terrorism" className="py-24 bg-[#050507] border-b border-[#181920] relative tactical-grid">
      {/* Subtle red ambient alert aura */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#A40000]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#160d0d] border border-[#3b1717] text-[11px] font-mono-tech text-[#ff6b6b] uppercase tracking-[0.25em]">
              <ShieldAlert className="w-3.5 h-3.5 text-[#A40000]" />
              {t.criticalSecurity.badge}
            </div>

            <h2 className="font-heading text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
              {t.criticalSecurity.title}
            </h2>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              {t.criticalSecurity.subtitle}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenBriefing}
              className="px-6 py-3.5 bg-[#A40000] hover:bg-[#c40000] text-white font-mono-tech text-xs tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(164,0,0,0.35)] flex items-center gap-2"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>{t.criticalSecurity.ctaButton}</span>
            </button>
            <a
              href="https://t.me/blackdaystriker"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3.5 bg-[#0088cc]/15 hover:bg-[#0088cc]/25 border border-[#0088cc]/40 text-[#38bdf8] font-mono-tech text-xs uppercase flex items-center gap-2 transition-all"
            >
              <Send className="w-3.5 h-3.5" />
              <span>TELEGRAM</span>
            </a>
          </div>
        </div>

        {/* 5-Phase Defensive Prevention Cycle (Visual HUD) */}
        <div className="p-6 sm:p-8 bg-[#0a0a0e] border border-[#20222c] mb-16 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#181a24] pb-4 gap-2">
            <div>
              <span className="text-[10px] font-mono-tech text-gray-500 uppercase tracking-widest block">
                DEFENSIVE ARCHITECTURE
              </span>
              <h3 className="font-heading text-lg sm:text-xl font-bold uppercase tracking-wider text-white">
                {t.criticalSecurity.defensiveFrameworkTitle}
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono-tech text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              100% PREVENTIVE & LAWFUL
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            {t.criticalSecurity.frameworkSteps.map((step, sIdx) => (
              <div
                key={sIdx}
                className="p-4 bg-[#0e0f15] border border-[#1b1d28] hover:border-[#A40000]/60 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono-tech">
                    <span className="text-[#A40000] font-bold">PHASE {step.phase}</span>
                    <span className="text-gray-600 font-mono-tech text-[10px]">STAGE 0{sIdx + 1}</span>
                  </div>
                  <h4 className="font-heading text-base font-bold text-white uppercase group-hover:text-[#ff6b6b] transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed pt-1">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive View Toggles */}
        <div className="flex border-b border-[#1b1c24] mb-8 bg-[#08090d]">
          <button
            onClick={() => setActiveTab('matrix')}
            className={`py-3 px-6 text-xs font-mono-tech uppercase tracking-wider border-b-2 transition-all flex items-center gap-2 ${
              activeTab === 'matrix'
                ? 'border-[#A40000] text-white bg-[#12141c]'
                : 'border-transparent text-gray-400 hover:text-white hover:bg-[#0d0e14]'
            }`}
          >
            <Crosshair className="w-3.5 h-3.5 text-[#A40000]" />
            {t.criticalSecurity.scenariosTitle}
          </button>
          <button
            onClick={() => setActiveTab('tabletop')}
            className={`py-3 px-6 text-xs font-mono-tech uppercase tracking-wider border-b-2 transition-all flex items-center gap-2 ${
              activeTab === 'tabletop'
                ? 'border-[#A40000] text-white bg-[#12141c]'
                : 'border-transparent text-gray-400 hover:text-white hover:bg-[#0d0e14]'
            }`}
          >
            <Activity className="w-3.5 h-3.5 text-yellow-500" />
            {t.criticalSecurity.tabletopTitle}
          </button>
          <button
            onClick={() => setActiveTab('audits')}
            className={`py-3 px-6 text-xs font-mono-tech uppercase tracking-wider border-b-2 transition-all flex items-center gap-2 ${
              activeTab === 'audits'
                ? 'border-[#A40000] text-white bg-[#12141c]'
                : 'border-transparent text-gray-400 hover:text-white hover:bg-[#0d0e14]'
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-blue-400" />
            {t.criticalSecurity.vulnerabilityAuditsTitle}
          </button>
        </div>

        {/* Tab 1: Threat Scenario Matrix */}
        {activeTab === 'matrix' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left selector */}
            <div className="lg:col-span-4 space-y-2">
              <span className="text-[10px] font-mono-tech text-gray-500 uppercase tracking-widest block mb-2">
                SELECT OPERATIONAL SCENARIO:
              </span>
              {t.criticalSecurity.scenarios.map((scen, idx) => (
                <button
                  key={scen.id}
                  onClick={() => setSelectedScenarioIdx(idx)}
                  className={`w-full p-4 text-left border transition-all ${
                    selectedScenarioIdx === idx
                      ? 'bg-[#151722] border-[#A40000] text-white shadow-[0_0_15px_rgba(164,0,0,0.25)]'
                      : 'bg-[#090a0f] border-[#1a1c26] text-gray-400 hover:text-white hover:bg-[#0e1017]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-mono-tech text-[10px] text-[#A40000] font-bold">
                      {scen.id}
                    </span>
                    <span className="text-[9px] font-mono-tech px-1.5 py-0.5 bg-[#231717] text-[#ff8080] border border-[#401919]">
                      {scen.threatLevel.split('/')[0]}
                    </span>
                  </div>
                  <div className="font-heading text-xs font-bold uppercase tracking-wider text-white">
                    {scen.title}
                  </div>
                </button>
              ))}
            </div>

            {/* Right detailed scenario analysis card */}
            <div className="lg:col-span-8 p-8 bg-[#090a0f] border border-[#1e212d] relative space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#181a24] pb-4 gap-2">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 text-[9px] font-mono-tech bg-[#A40000] text-white font-bold uppercase">
                      {selectedScenario.threatLevel}
                    </span>
                    <span className="text-xs font-mono-tech text-gray-400">
                      ID: {selectedScenario.id}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold uppercase text-white tracking-wide">
                    {selectedScenario.title}
                  </h3>
                </div>
                <button
                  onClick={onOpenBriefing}
                  className="px-4 py-2 bg-[#171a24] hover:bg-[#202534] border border-[#2b3040] text-white text-xs font-mono-tech uppercase transition-colors self-start sm:self-auto"
                >
                  Commission Audit
                </button>
              </div>

              {/* Target Profile */}
              <div className="p-4 bg-[#0e1017] border border-[#1b1d28] space-y-1">
                <span className="text-[10px] font-mono-tech text-gray-400 uppercase tracking-widest block">
                  Target Profile & Assets at Risk:
                </span>
                <p className="text-xs sm:text-sm text-gray-200">
                  {selectedScenario.target}
                </p>
              </div>

              {/* Threat Vector */}
              <div className="p-4 bg-[#140e0e] border border-[#2b1717] space-y-1">
                <span className="text-[10px] font-mono-tech text-[#ff8080] uppercase tracking-widest flex items-center gap-1.5">
                  <AlertTriangle className="w-3 h-3 text-[#A40000]" />
                  Threat Vector & Mode of Hostile Action:
                </span>
                <p className="text-xs sm:text-sm text-red-100">
                  {selectedScenario.vector}
                </p>
              </div>

              {/* Defensive Countermeasure Framework */}
              <div className="p-4 bg-[#0a1410] border border-[#152e22] space-y-1">
                <span className="text-[10px] font-mono-tech text-emerald-400 uppercase tracking-widest flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  Prescribed Defensive Countermeasures:
                </span>
                <p className="text-xs sm:text-sm text-emerald-100">
                  {selectedScenario.defense}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Tabletop Crisis Simulations */}
        {activeTab === 'tabletop' && (
          <div className="p-8 bg-[#090a0f] border border-[#1e212d] space-y-6">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-mono-tech text-yellow-500 uppercase tracking-widest">
                IMMERSIVE EXECUTIVE PREPAREDNESS
              </span>
              <h3 className="font-heading text-2xl font-bold uppercase text-white tracking-wide">
                {t.criticalSecurity.tabletopTitle}
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                {t.criticalSecurity.tabletopDesc}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              <div className="p-5 bg-[#0e1017] border border-[#1b1d28] space-y-3">
                <div className="font-mono-tech text-xs text-[#A40000] font-bold">MODULE 01</div>
                <h4 className="font-heading text-base font-bold text-white uppercase">
                  Sudden Hostile Incident & Safe-Haven Lockdown
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Tests board response speed, communication redundancy, and local authority emergency coordination in the critical initial 60 minutes.
                </p>
              </div>

              <div className="p-5 bg-[#0e1017] border border-[#1b1d28] space-y-3">
                <div className="font-mono-tech text-xs text-[#A40000] font-bold">MODULE 02</div>
                <h4 className="font-heading text-base font-bold text-white uppercase">
                  Critical Port / Rail Logistics Sabotage & Chokepoint Interdiction
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Evaluates alternative multi-modal rerouting, insurance notification triggers, and stakeholder crisis communications.
                </p>
              </div>

              <div className="p-5 bg-[#0e1017] border border-[#1b1d28] space-y-3">
                <div className="font-mono-tech text-xs text-[#A40000] font-bold">MODULE 03</div>
                <h4 className="font-heading text-base font-bold text-white uppercase">
                  Executive Kidnap & Hostile Detention Threat
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Stress-tests crisis management committee procedures, liaison protocols, family support structures, and legal disclosure boundaries.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#181a24] flex items-center justify-between">
              <span className="text-xs font-mono-tech text-gray-400">
                Delivered under strict mutual NDA and tailored to client sector profile.
              </span>
              <button
                onClick={onOpenBriefing}
                className="px-5 py-2.5 bg-[#A40000] hover:bg-[#c40000] text-white font-mono-tech text-xs uppercase"
              >
                Schedule Tabletop Exercise
              </button>
            </div>
          </div>
        )}

        {/* Tab 3: Facility Vulnerability Audits */}
        {activeTab === 'audits' && (
          <div className="p-8 bg-[#090a0f] border border-[#1e212d] space-y-6">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-mono-tech text-blue-400 uppercase tracking-widest">
                PERIMETER & STRUCTURAL INTEGRITY
              </span>
              <h3 className="font-heading text-2xl font-bold uppercase text-white tracking-wide">
                {t.criticalSecurity.vulnerabilityAuditsTitle}
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Comprehensive physical and structural vulnerability audits for high-value assets, corporate campuses, data centers, and remote installations.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
              <div className="p-4 bg-[#0d0e14] border border-[#181b24] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono-tech text-gray-500 uppercase">TIER 1</span>
                  <span className="text-emerald-400 text-xs font-mono-tech font-bold">AUDITED</span>
                </div>
                <h4 className="font-heading text-sm font-bold text-white uppercase">
                  Perimeter Thermal & Intrusion Detection
                </h4>
                <p className="text-xs text-gray-400">
                  Continuous overlapping thermal surveillance corridors and seismic ground sensors.
                </p>
              </div>

              <div className="p-4 bg-[#0d0e14] border border-[#181b24] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono-tech text-gray-500 uppercase">TIER 2</span>
                  <span className="text-emerald-400 text-xs font-mono-tech font-bold">AUDITED</span>
                </div>
                <h4 className="font-heading text-sm font-bold text-white uppercase">
                  Access Control Compartmentalization
                </h4>
                <p className="text-xs text-gray-400">
                  Biometric multi-factor segregation between public, administrative, and mission-critical zones.
                </p>
              </div>

              <div className="p-4 bg-[#0d0e14] border border-[#181b24] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono-tech text-gray-500 uppercase">TIER 3</span>
                  <span className="text-emerald-400 text-xs font-mono-tech font-bold">AUDITED</span>
                </div>
                <h4 className="font-heading text-sm font-bold text-white uppercase">
                  Safe-Haven & Standalone Life Support
                </h4>
                <p className="text-xs text-gray-400">
                  Ballistic-rated retreat rooms with positive-pressure air filtration and independent satellite communication.
                </p>
              </div>

              <div className="p-4 bg-[#0d0e14] border border-[#181b24] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono-tech text-gray-500 uppercase">TIER 4</span>
                  <span className="text-emerald-400 text-xs font-mono-tech font-bold">AUDITED</span>
                </div>
                <h4 className="font-heading text-sm font-bold text-white uppercase">
                  Utility Redundancy & Anti-Sabotage
                </h4>
                <p className="text-xs text-gray-400">
                  Buried backup power generation, multi-feed water lines, and tamper-evident conduits.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#181a24] flex items-center justify-between">
              <span className="text-xs font-mono-tech text-gray-400">
                Audits generate formal Gap Analysis Matrices with prioritized executive recommendations.
              </span>
              <button
                onClick={onOpenBriefing}
                className="px-5 py-2.5 bg-[#A40000] hover:bg-[#c40000] text-white font-mono-tech text-xs uppercase"
              >
                Request Facility Audit
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
