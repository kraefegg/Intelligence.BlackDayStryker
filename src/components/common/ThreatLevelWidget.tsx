import React, { useState, useMemo } from 'react';
import {
  ShieldAlert,
  ShieldCheck,
  AlertTriangle,
  Flame,
  Radio,
  Sliders,
  Send,
  Lock,
  ChevronRight,
  RefreshCw,
} from 'lucide-react';

interface ThreatLevelWidgetProps {
  onOpenBriefing: (threatLevel?: string) => void;
  className?: string;
}

export type ThreatLevelState = 'LOW' | 'ELEVATED' | 'CRITICAL';

export const ThreatLevelWidget: React.FC<ThreatLevelWidgetProps> = ({
  onOpenBriefing,
  className = '',
}) => {
  // Selectable Security Parameters
  const [environment, setEnvironment] = useState<number>(25); // 10, 25, 45, 60
  const [exposure, setExposure] = useState<number>(25); // 10, 25, 40, 55
  const [reconActivity, setReconActivity] = useState<number>(30); // 10, 30, 55, 75
  const [hardening, setHardening] = useState<number>(0); // -20, 0, 25, 40
  const [expandedSettings, setExpandedSettings] = useState<boolean>(false);

  // Dynamic composite score calculation (normalized 0 - 100)
  const compositeScore = useMemo(() => {
    const raw = (environment * 0.3) + (exposure * 0.25) + (reconActivity * 0.35) + (hardening * 0.2);
    return Math.min(100, Math.max(8, Math.round(raw * 1.5)));
  }, [environment, exposure, reconActivity, hardening]);

  // Derived Threat Level
  const threatLevel: ThreatLevelState = useMemo(() => {
    if (compositeScore < 40) return 'LOW';
    if (compositeScore < 72) return 'ELEVATED';
    return 'CRITICAL';
  }, [compositeScore]);

  // Presets
  const setPreset = (level: ThreatLevelState) => {
    if (level === 'LOW') {
      setEnvironment(10);
      setExposure(10);
      setReconActivity(10);
      setHardening(-20);
    } else if (level === 'ELEVATED') {
      setEnvironment(25);
      setExposure(25);
      setReconActivity(30);
      setHardening(0);
    } else {
      setEnvironment(60);
      setExposure(55);
      setReconActivity(75);
      setHardening(40);
    }
  };

  // Color & Badge Maps
  const levelConfig = {
    LOW: {
      color: 'text-emerald-400',
      bgGlow: 'bg-emerald-500/10 border-emerald-500/40',
      barColor: 'bg-emerald-500',
      badgeBg: 'bg-emerald-950/80 text-emerald-400 border-emerald-600/50',
      defcon: 'DEFCON 4 // LEVEL 1',
      icon: ShieldCheck,
      headline: 'LOW THREAT LEVEL',
      statusText: 'Routine Baseline Vigilance. Standard continuous intelligence monitoring active.',
      actionText: 'Periodic OSINT footprint audit & routine executive briefing.',
      alertBorder: 'border-emerald-500/30',
    },
    ELEVATED: {
      color: 'text-yellow-400',
      bgGlow: 'bg-yellow-500/10 border-yellow-500/40',
      barColor: 'bg-yellow-500',
      badgeBg: 'bg-yellow-950/80 text-yellow-300 border-yellow-600/50',
      defcon: 'DEFCON 2 // LEVEL 2-3',
      icon: AlertTriangle,
      headline: 'ELEVATED THREAT LEVEL',
      statusText: 'Active Adversarial Reconnaissance Detected. Exposure vectors identified across perimeter.',
      actionText: 'Deploy SpyStriker™ OPSEC hardening, transit escort review & threat actor link analysis.',
      alertBorder: 'border-yellow-500/40',
    },
    CRITICAL: {
      color: 'text-[#ff4444]',
      bgGlow: 'bg-red-950/30 border-red-600/60 shadow-[0_0_25px_rgba(220,38,38,0.3)]',
      barColor: 'bg-[#A40000]',
      badgeBg: 'bg-red-950 text-[#ff6b6b] border-red-600 animate-pulse',
      defcon: 'DEFCON 1 // LEVEL 4 (MAX)',
      icon: Flame,
      headline: 'CRITICAL THREAT LEVEL',
      statusText: 'Imminent Disruption or Hostile Interdiction Vector. High probability of operational breach.',
      actionText: 'Activate Incident Command advisory, safe-haven lockdown staging & urgent intervention.',
      alertBorder: 'border-[#A40000]',
    },
  }[threatLevel];

  const Icon = levelConfig.icon;

  return (
    <div
      className={`relative p-5 sm:p-6 bg-[#0a0c12]/95 border ${levelConfig.alertBorder} backdrop-blur-md transition-all duration-300 ${className}`}
    >
      {/* Top HUD Bar */}
      <div className="flex items-center justify-between border-b border-[#1b1e2a] pb-3 mb-4">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span
              className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                threatLevel === 'CRITICAL'
                  ? 'bg-red-500'
                  : threatLevel === 'ELEVATED'
                  ? 'bg-yellow-400'
                  : 'bg-emerald-400'
              }`}
            />
            <span
              className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
                threatLevel === 'CRITICAL'
                  ? 'bg-red-600'
                  : threatLevel === 'ELEVATED'
                  ? 'bg-yellow-500'
                  : 'bg-emerald-500'
              }`}
            />
          </span>
          <span className="font-mono-tech text-[10px] text-gray-400 uppercase tracking-widest">
            TACTICAL THREAT LEVEL MONITOR
          </span>
        </div>

        <span className={`px-2 py-0.5 text-[9px] font-mono-tech uppercase font-bold border ${levelConfig.badgeBg}`}>
          {levelConfig.defcon}
        </span>
      </div>

      {/* Main Status Display */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
        <div className="space-y-1">
          <div className="text-[10px] font-mono-tech text-gray-400 uppercase tracking-wider">
            CALCULATED SITUATIONAL POSTURE:
          </div>
          <div className="flex items-center gap-2.5">
            <Icon className={`w-6 h-6 ${levelConfig.color}`} />
            <h3 className={`font-heading text-xl sm:text-2xl font-black uppercase tracking-wider ${levelConfig.color}`}>
              {levelConfig.headline}
            </h3>
          </div>
        </div>

        {/* Threat Score Gauge Number */}
        <div className="sm:text-right">
          <div className="text-[10px] font-mono-tech text-gray-400 uppercase">THREAT INDEX</div>
          <div className="flex items-baseline sm:justify-end gap-1 font-mono-tech">
            <span className={`text-2xl sm:text-3xl font-black ${levelConfig.color}`}>
              {compositeScore}
            </span>
            <span className="text-xs text-gray-500">/ 100</span>
          </div>
        </div>
      </div>

      {/* Progress Bar (Visual Tri-Zone Metric) */}
      <div className="w-full bg-[#121520] h-2 mb-4 border border-[#222738] overflow-hidden relative">
        <div
          className={`h-full transition-all duration-500 ${levelConfig.barColor}`}
          style={{ width: `${compositeScore}%` }}
        />
        {/* Tier boundary markings */}
        <div className="absolute top-0 bottom-0 left-[40%] w-[1px] bg-[#333a4d]" title="Elevated Threshold" />
        <div className="absolute top-0 bottom-0 left-[72%] w-[1px] bg-[#A40000]" title="Critical Threshold" />
      </div>

      {/* Contextual Status & Recommendation Box */}
      <div className="p-3.5 bg-[#0e1018] border border-[#1d2130] space-y-2 mb-4">
        <p className="text-xs text-gray-300 leading-relaxed font-sans">
          {levelConfig.statusText}
        </p>
        <div className="pt-1 border-t border-[#181c28] flex items-start gap-1.5 text-[11px] font-mono-tech text-gray-400">
          <span className="text-[#A40000] font-bold">RECOM:</span>
          <span>{levelConfig.actionText}</span>
        </div>
      </div>

      {/* Quick Threat Level Preset Switcher */}
      <div className="space-y-2 mb-4">
        <div className="flex items-center justify-between text-[10px] font-mono-tech text-gray-400">
          <span>QUICK THREAT LEVEL SELECTOR:</span>
          <button
            onClick={() => setExpandedSettings(!expandedSettings)}
            className="text-gray-400 hover:text-white flex items-center gap-1 transition-colors"
          >
            <Sliders className="w-3 h-3 text-[#A40000]" />
            <span>{expandedSettings ? 'Hide Parameters' : 'Adjust Parameters'}</span>
          </button>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <button
            onClick={() => setPreset('LOW')}
            className={`py-2 px-2 text-[10px] font-mono-tech uppercase tracking-wider text-center border transition-all ${
              threatLevel === 'LOW'
                ? 'bg-emerald-950/70 border-emerald-500 text-emerald-300 font-bold shadow-[0_0_10px_rgba(16,185,129,0.3)]'
                : 'bg-[#10131c] border-[#1d2232] text-gray-400 hover:text-white'
            }`}
          >
            LOW (4)
          </button>
          <button
            onClick={() => setPreset('ELEVATED')}
            className={`py-2 px-2 text-[10px] font-mono-tech uppercase tracking-wider text-center border transition-all ${
              threatLevel === 'ELEVATED'
                ? 'bg-yellow-950/70 border-yellow-500 text-yellow-300 font-bold shadow-[0_0_10px_rgba(234,179,8,0.3)]'
                : 'bg-[#10131c] border-[#1d2232] text-gray-400 hover:text-white'
            }`}
          >
            ELEVATED (2-3)
          </button>
          <button
            onClick={() => setPreset('CRITICAL')}
            className={`py-2 px-2 text-[10px] font-mono-tech uppercase tracking-wider text-center border transition-all ${
              threatLevel === 'CRITICAL'
                ? 'bg-red-950/80 border-red-600 text-red-300 font-bold shadow-[0_0_12px_rgba(220,38,38,0.4)] animate-pulse'
                : 'bg-[#10131c] border-[#1d2232] text-gray-400 hover:text-white'
            }`}
          >
            CRITICAL (1)
          </button>
        </div>
      </div>

      {/* Expanded Security Parameter Adjusters */}
      {expandedSettings && (
        <div className="p-3.5 bg-[#07090e] border border-[#1b2030] space-y-3 mb-4 animate-in fade-in duration-150">
          <div className="text-[10px] font-mono-tech text-[#A40000] uppercase tracking-widest">
            CALIBRATE SECURITY PARAMETERS:
          </div>

          {/* Param 1: Environment */}
          <div className="space-y-1">
            <div className="flex justify-between text-[10px] font-mono-tech text-gray-400">
              <span>Operating Environment:</span>
              <span className="text-white">
                {environment === 10 ? 'Domestic Corporate' : environment === 25 ? 'Transboundary' : environment === 45 ? 'High-Risk Foreign' : 'Contested Chokepoint'}
              </span>
            </div>
            <div className="grid grid-cols-4 gap-1">
              {[10, 25, 45, 60].map((val) => (
                <button
                  key={val}
                  onClick={() => setEnvironment(val)}
                  className={`py-1 text-[9px] font-mono-tech border ${
                    environment === val ? 'bg-[#1b2234] border-[#A40000] text-white' : 'bg-[#0f121a] border-[#191e2b] text-gray-400'
                  }`}
                >
                  {val === 10 ? 'Dom.' : val === 25 ? 'Trans.' : val === 45 ? 'Foreign' : 'Hostile'}
                </button>
              ))}
            </div>
          </div>

          {/* Param 2: Target Exposure */}
          <div className="space-y-1">
            <div className="flex justify-between text-[10px] font-mono-tech text-gray-400">
              <span>Target Exposure Profile:</span>
              <span className="text-white">
                {exposure === 10 ? 'Standard Entity' : exposure === 25 ? 'C-Suite Exec' : exposure === 40 ? 'Mega Litigation' : 'Critical Asset'}
              </span>
            </div>
            <div className="grid grid-cols-4 gap-1">
              {[10, 25, 40, 55].map((val) => (
                <button
                  key={val}
                  onClick={() => setExposure(val)}
                  className={`py-1 text-[9px] font-mono-tech border ${
                    exposure === val ? 'bg-[#1b2234] border-[#A40000] text-white' : 'bg-[#0f121a] border-[#191e2b] text-gray-400'
                  }`}
                >
                  {val === 10 ? 'Corp' : val === 25 ? 'Exec' : val === 40 ? 'Litig.' : 'Vital'}
                </button>
              ))}
            </div>
          </div>

          {/* Param 3: Recon Activity */}
          <div className="space-y-1">
            <div className="flex justify-between text-[10px] font-mono-tech text-gray-400">
              <span>Adversarial Reconnaissance:</span>
              <span className="text-white">
                {reconActivity === 10 ? 'Dormant' : reconActivity === 30 ? 'Phishing / OSINT' : reconActivity === 55 ? 'Counter-Surv.' : 'Imminent Vector'}
              </span>
            </div>
            <div className="grid grid-cols-4 gap-1">
              {[10, 30, 55, 75].map((val) => (
                <button
                  key={val}
                  onClick={() => setReconActivity(val)}
                  className={`py-1 text-[9px] font-mono-tech border ${
                    reconActivity === val ? 'bg-[#1b2234] border-[#A40000] text-white' : 'bg-[#0f121a] border-[#191e2b] text-gray-400'
                  }`}
                >
                  {val === 10 ? 'Dorm.' : val === 30 ? 'Probing' : val === 55 ? 'Surv.' : 'Imminent'}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Action Footer Buttons */}
      <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
        <button
          onClick={() => onOpenBriefing(threatLevel)}
          className={`flex-1 py-2.5 px-3 text-xs font-mono-tech uppercase font-bold tracking-wider text-white transition-all flex items-center justify-center gap-2 ${
            threatLevel === 'CRITICAL'
              ? 'bg-[#A40000] hover:bg-[#c40000] shadow-[0_0_15px_rgba(164,0,0,0.5)]'
              : threatLevel === 'ELEVATED'
              ? 'bg-[#b45309] hover:bg-[#d97706]'
              : 'bg-[#047857] hover:bg-[#059669]'
          }`}
        >
          <Lock className="w-3.5 h-3.5" />
          <span>REQUEST {threatLevel} ADVISORY</span>
        </button>

        <a
          href="https://t.me/blackdaystriker"
          target="_blank"
          rel="noopener noreferrer"
          className="py-2.5 px-3 bg-[#0088cc]/15 hover:bg-[#0088cc]/25 border border-[#0088cc]/40 text-[#38bdf8] font-mono-tech text-xs uppercase flex items-center justify-center gap-1.5 transition-colors"
        >
          <Send className="w-3.5 h-3.5" />
          <span>TELEGRAM</span>
        </a>
      </div>
    </div>
  );
};
