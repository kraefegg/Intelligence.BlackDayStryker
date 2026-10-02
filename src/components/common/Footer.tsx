import React from 'react';
import { useI18n } from '../../i18n/index.tsx';
import { SupportedLanguage } from '../../i18n/types.ts';
import { LogoPrincipal } from '../logos/LogoPrincipal.tsx';
import { LogoSecondary } from '../logos/LogoSecondary.tsx';
import { Mail, Send, ShieldCheck, Lock, ExternalLink, Globe } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenBriefing: () => void;
  onOpenEmblems: () => void;
  activeLogoVariant: 'principal' | 'secondary';
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenBriefing,
  onOpenEmblems,
  activeLogoVariant,
}) => {
  const { language, setLanguage, t } = useI18n();

  const languages: { code: SupportedLanguage; label: string }[] = [
    { code: 'en', label: 'English' },
    { code: 'pt', label: 'Português' },
    { code: 'ru', label: 'Русский' },
    { code: 'de', label: 'Deutsch' },
    { code: 'fr', label: 'Français' },
    { code: 'he', label: 'עברית' },
  ];

  return (
    <footer className="bg-[#040405] border-t border-[#181a20] text-gray-400 text-sm">
      {/* Upper Footer Action Bar */}
      <div className="border-b border-[#131418] bg-[#07080a] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-mono-tech text-xs text-[#A40000] uppercase tracking-widest block mb-1">
              HIGH-CONSEQUENCE MANDATES
            </span>
            <h4 className="font-heading text-lg font-bold text-white uppercase tracking-wider">
              {t.hero.statement}
            </h4>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://t.me/blackdaystriker"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-[#0088cc]/15 hover:bg-[#0088cc]/25 text-[#38bdf8] border border-[#0088cc]/40 font-mono-tech text-xs uppercase flex items-center gap-2 transition-all"
            >
              <Send className="w-3.5 h-3.5" />
              Telegram: Blackday Striker
            </a>

            <a
              href="mailto:blackday.striker@protonmail.com"
              className="px-5 py-2.5 bg-[#171922] hover:bg-[#202330] text-gray-200 border border-[#2b2f3d] font-mono-tech text-xs uppercase flex items-center gap-2 transition-all"
            >
              <Mail className="w-3.5 h-3.5 text-[#A40000]" />
              blackday.striker@protonmail.com
            </a>

            <button
              onClick={onOpenBriefing}
              className="px-5 py-2.5 bg-[#A40000] hover:bg-[#c40000] text-white font-mono-tech text-xs uppercase flex items-center gap-2 transition-all shadow-[0_0_15px_rgba(164,0,0,0.3)]"
            >
              <Lock className="w-3.5 h-3.5" />
              {t.hero.btnBriefing}
            </button>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Col 1: Brand & Official Channels */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              {activeLogoVariant === 'principal' ? (
                <LogoPrincipal variant="horizontal" size="md" />
              ) : (
                <LogoSecondary variant="horizontal" size="md" />
              )}
            </div>

            <p className="text-xs text-gray-400 leading-relaxed max-w-sm pt-2">
              Independent advisory, private intelligence, cyber exposure auditing, OSINT, and strategic crisis advisory for organizations navigating high-consequence environments.
            </p>

            <div className="space-y-2 pt-2 text-xs font-mono-tech">
              <div className="text-gray-300 flex items-center gap-2">
                <span className="text-gray-500">EMAIL:</span>
                <a
                  href="mailto:blackday.striker@protonmail.com"
                  className="hover:text-white text-gray-300 underline underline-offset-4"
                >
                  blackday.striker@protonmail.com
                </a>
              </div>
              <div className="text-gray-300 flex items-center gap-2">
                <span className="text-gray-500">TELEGRAM:</span>
                <a
                  href="https://t.me/blackdaystriker"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#38bdf8] hover:underline flex items-center gap-1"
                >
                  t.me/blackdaystriker (Blackday Striker)
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenEmblems}
                className="text-[11px] font-mono-tech text-gray-400 hover:text-white border border-[#22252e] bg-[#0c0d12] px-3 py-1.5 transition-colors flex items-center gap-2"
              >
                <span>Active Emblem:</span>
                <strong className="text-[#e2e8f0]">
                  {activeLogoVariant === 'principal' ? 'Logo 2 Principal (Eclipse)' : 'Logo 1 Secundário (Shield)'}
                </strong>
                <span className="text-[#A40000]">Switch ▾</span>
              </button>
            </div>
          </div>

          {/* Col 2: Services / Capabilities */}
          <div className="space-y-3">
            <h5 className="font-mono-tech text-xs text-white uppercase tracking-widest border-l-2 border-[#A40000] pl-2">
              Capabilities
            </h5>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('private-intelligence')}
                  className="hover:text-white transition-colors"
                >
                  Private Intelligence
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('osint')} className="hover:text-white transition-colors">
                  Open-Source Intelligence (OSINT)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('cybersecurity')} className="hover:text-white transition-colors">
                  Cybersecurity & CTI
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('spystriker')} className="hover:text-white transition-colors text-[#ff6b6b]">
                  SpyStriker™ (OPSEC)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('anti-terrorism')} className="hover:text-white transition-colors">
                  Counter-Threat Advisory
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('rescue-guard')} className="hover:text-white transition-colors">
                  Rescue & Guard
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('protection')} className="hover:text-white transition-colors">
                  Protection Advisory
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Sectors & Operations */}
          <div className="space-y-3">
            <h5 className="font-mono-tech text-xs text-white uppercase tracking-widest border-l-2 border-[#A40000] pl-2">
              Sectors & Strategy
            </h5>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('investigations')} className="hover:text-white transition-colors">
                  Research & Investigations
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('critical-infrastructure')} className="hover:text-white transition-colors">
                  Critical Infrastructure
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('maritime')} className="hover:text-white transition-colors">
                  Maritime Security & Ports
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('international')} className="hover:text-white transition-colors">
                  Global Operations Theaters
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('crisis-risk')} className="hover:text-white transition-colors">
                  Crisis & Risk Management
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('methodology')} className="hover:text-white transition-colors">
                  Six-Stage Methodology
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Governance & Language */}
          <div className="space-y-3">
            <h5 className="font-mono-tech text-xs text-white uppercase tracking-widest border-l-2 border-[#A40000] pl-2">
              Governance & Legal
            </h5>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('confidentiality')} className="hover:text-white transition-colors">
                  Confidentiality Protocols
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('compliance')} className="hover:text-white transition-colors">
                  Compliance & Standards
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('intelligence-brief')} className="hover:text-white transition-colors">
                  Stryker Intelligence Brief
                </button>
              </li>
              <li>
                <button onClick={onOpenBriefing} className="hover:text-white transition-colors text-white font-medium">
                  Confidential Briefing Request
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">
                  Contact Channels
                </button>
              </li>
            </ul>

            <div className="pt-3">
              <span className="text-[10px] font-mono-tech text-gray-500 uppercase tracking-widest block mb-2">
                Language / Idioma
              </span>
              <div className="flex flex-wrap gap-1.5">
                {languages.map((item) => (
                  <button
                    key={item.code}
                    onClick={() => setLanguage(item.code)}
                    className={`px-2 py-1 text-[11px] font-mono-tech transition-colors ${
                      language === item.code
                        ? 'bg-[#A40000] text-white font-bold'
                        : 'bg-[#12141a] text-gray-400 hover:text-white border border-[#20232c]'
                    }`}
                  >
                    {item.code.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory & Positioning Statement (Strict adherence to prompt Section 2, 3, 41) */}
        <div className="mt-12 pt-8 border-t border-[#13151b] space-y-4">
          <div className="p-4 bg-[#08090d] border border-[#1a1c24] text-[11px] leading-relaxed text-gray-400">
            <div className="flex items-center gap-2 text-white font-bold font-mono-tech mb-1 uppercase">
              <ShieldCheck className="w-4 h-4 text-[#A40000]" />
              Mandatory Legal & Ethical Position Statement
            </div>
            <p>
              BLACKDAY STRYKER operates strictly as an independent private consultancy and strategic advisory organization. We do not claim affiliation with any governmental intelligence bureau, military establishment, law enforcement body, or state agency (including CIA, FBI, NSA, MI6, Mossad, Interpol, NATO, Brazilian Armed Forces, Polícia Federal, ABIN, or others). All intelligence research is conducted through lawful open-source parameters, legitimate commercial registries, client authorization, and applicable legal frameworks (including the Brazilian General Data Protection Law - LGPD). Technical cybersecurity assessments require prior written authorization and predefined scope. Regulated security activities are performed only where authorized by law and through licensed, qualified professionals.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-tech text-gray-400">
            <div>
              © {new Date().getFullYear()} BLACKDAY STRYKER. All rights reserved. SpyStriker™ is a proprietary methodology.
            </div>
            <div className="flex items-center gap-4 text-[11px]">
              <span className="text-gray-400">DISCRETION • INTELLIGENCE • PRECISION • RESPONSE</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
