import React, { useState, useEffect } from 'react';
import { useI18n } from '../../i18n/index.tsx';
import { SupportedLanguage } from '../../i18n/types.ts';
import { LogoPrincipal } from '../logos/LogoPrincipal.tsx';
import { LogoSecondary } from '../logos/LogoSecondary.tsx';
import {
  ShieldAlert,
  Send,
  Menu,
  X,
  Lock,
  Globe,
  ChevronDown,
  Layers,
  FileText,
  Search,
  Crosshair,
  Radar,
  Anchor,
  Compass,
} from 'lucide-react';

interface NavbarProps {
  onOpenBriefing: () => void;
  onOpenEmblems: () => void;
  activeLogoVariant: 'principal' | 'secondary';
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBriefing,
  onOpenEmblems,
  activeLogoVariant,
  activeSection,
  onNavigate,
}) => {
  const { language, setLanguage, t } = useI18n();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages: { code: SupportedLanguage; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'pt', label: 'PT' },
    { code: 'ru', label: 'RU' },
    { code: 'de', label: 'DE' },
    { code: 'fr', label: 'FR' },
    { code: 'he', label: 'HE' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050505]/95 backdrop-blur-md border-b border-[#1b1c22] shadow-[0_4px_20px_rgba(0,0,0,0.8)]'
          : 'bg-gradient-to-b from-[#050505] via-[#050505]/80 to-transparent border-b border-transparent'
      }`}
    >
      {/* Top micro banner */}
      <div className="hidden lg:flex items-center justify-between px-6 py-1 bg-[#09090c] border-b border-[#181920] text-[11px] font-mono-tech text-gray-400">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-gray-300">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-ping" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
            MANDATES: ACTIVE GLOBALLY
          </span>
          <span className="text-gray-600">|</span>
          <span>STRICT NEED-TO-KNOW PROTOCOLS</span>
          <span className="text-gray-600">|</span>
          <span className="text-gray-300">SECURE DISPATCH: blackday.striker@protonmail.com</span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://t.me/blackdaystriker"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[#38bdf8] hover:text-[#7dd3fc] transition-colors"
          >
            <Send className="w-3 h-3" />
            TELEGRAM: BLACKDAY STRIKER
          </a>
          <span className="text-gray-600">|</span>
          <button
            onClick={onOpenEmblems}
            className="text-gray-400 hover:text-white transition-colors flex items-center gap-1"
            title="Inspect Official Emblems (Logo 2 Principal & Logo 1 Secundário)"
          >
            EMBLEM: {activeLogoVariant === 'principal' ? 'LOGO 2 (PRINCIPAL)' : 'LOGO 1 (SECUNDÁRIO)'} ▾
          </button>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo lockup */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3.5 group text-left focus:outline-none"
            title="BLACKDAY STRYKER - Home"
          >
            {activeLogoVariant === 'principal' ? (
              <LogoPrincipal variant="horizontal" size="sm" showSubtitle={false} />
            ) : (
              <LogoSecondary variant="horizontal" size="sm" showSubtitle={false} />
            )}
          </button>

          {/* Quick Emblem Switch button badge */}
          <button
            onClick={onOpenEmblems}
            className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 text-[9px] font-mono-tech uppercase bg-[#14151a] hover:bg-[#1e2029] border border-[#282a35] text-gray-400 hover:text-gray-200 transition-colors"
            title="Switch between Logo 2 (Principal) and Logo 1 (Secundário)"
          >
            {activeLogoVariant === 'principal' ? 'LOGO 2' : 'LOGO 1'}
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-6 text-[13px] font-medium tracking-wide">
          <button
            onClick={() => handleNavClick('home')}
            className={`transition-colors ${
              activeSection === 'home' ? 'text-white font-semibold' : 'text-gray-400 hover:text-white'
            }`}
          >
            {t.nav.home}
          </button>

          <button
            onClick={() => handleNavClick('about')}
            className={`transition-colors ${
              activeSection === 'about' ? 'text-white font-semibold' : 'text-gray-400 hover:text-white'
            }`}
          >
            {t.nav.about}
          </button>

          {/* Capabilities Dropdown */}
          <div className="relative group">
            <button
              onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              onMouseEnter={() => setServicesDropdownOpen(true)}
              className={`flex items-center gap-1 transition-colors ${
                ['capabilities', 'osint', 'cybersecurity', 'spystriker'].includes(activeSection)
                  ? 'text-white font-semibold'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {t.nav.capabilities}
              <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
            </button>

            {/* Dropdown Menu */}
            {servicesDropdownOpen && (
              <div
                onMouseLeave={() => setServicesDropdownOpen(false)}
                className="absolute top-full left-0 w-80 bg-[#0a0b0e] border border-[#22242c] shadow-2xl py-3 px-2 mt-1 space-y-1 z-50 animate-in fade-in duration-150"
              >
                <div className="px-3 py-1 text-[10px] font-mono-tech text-gray-500 uppercase tracking-widest border-b border-[#1b1c23] mb-1">
                  Core Mandate Domains
                </div>
                <button
                  onClick={() => handleNavClick('private-intelligence')}
                  className="w-full text-left px-3 py-2 text-xs text-gray-300 hover:text-white hover:bg-[#151720] flex items-center gap-2"
                >
                  <Search className="w-3.5 h-3.5 text-[#A40000]" />
                  {t.nav.privateIntelligence}
                </button>
                <button
                  onClick={() => handleNavClick('osint')}
                  className="w-full text-left px-3 py-2 text-xs text-gray-300 hover:text-white hover:bg-[#151720] flex items-center gap-2"
                >
                  <Radar className="w-3.5 h-3.5 text-blue-400" />
                  {t.nav.osint}
                </button>
                <button
                  onClick={() => handleNavClick('cybersecurity')}
                  className="w-full text-left px-3 py-2 text-xs text-gray-300 hover:text-white hover:bg-[#151720] flex items-center gap-2"
                >
                  <ShieldAlert className="w-3.5 h-3.5 text-yellow-500" />
                  {t.nav.cybersecurity}
                </button>
                <button
                  onClick={() => handleNavClick('spystriker')}
                  className="w-full text-left px-3 py-2 text-xs text-gray-300 hover:text-white hover:bg-[#151720] flex items-center gap-2"
                >
                  <Crosshair className="w-3.5 h-3.5 text-[#C40000]" />
                  SpyStriker™ (OPSEC)
                </button>
                <button
                  onClick={() => handleNavClick('anti-terrorism')}
                  className="w-full text-left px-3 py-2 text-xs text-gray-300 hover:text-white hover:bg-[#151720] flex items-center gap-2"
                >
                  <ShieldAlert className="w-3.5 h-3.5 text-gray-400" />
                  {t.nav.antiTerrorism}
                </button>
                <button
                  onClick={() => handleNavClick('maritime')}
                  className="w-full text-left px-3 py-2 text-xs text-gray-300 hover:text-white hover:bg-[#151720] flex items-center gap-2"
                >
                  <Anchor className="w-3.5 h-3.5 text-cyan-400" />
                  {t.nav.maritime}
                </button>
                <button
                  onClick={() => handleNavClick('critical-infrastructure')}
                  className="w-full text-left px-3 py-2 text-xs text-gray-300 hover:text-white hover:bg-[#151720] flex items-center gap-2"
                >
                  <Layers className="w-3.5 h-3.5 text-orange-400" />
                  {t.nav.criticalInfra}
                </button>
              </div>
            )}
          </div>

          <button
            onClick={() => handleNavClick('methodology')}
            className={`transition-colors ${
              activeSection === 'methodology' ? 'text-white font-semibold' : 'text-gray-400 hover:text-white'
            }`}
          >
            {t.nav.methodology}
          </button>

          <button
            onClick={() => handleNavClick('international')}
            className={`transition-colors ${
              activeSection === 'international' ? 'text-white font-semibold' : 'text-gray-400 hover:text-white'
            }`}
          >
            {t.nav.international}
          </button>

          <button
            onClick={() => handleNavClick('intelligence-brief')}
            className={`transition-colors ${
              activeSection === 'intelligence-brief' ? 'text-white font-semibold' : 'text-gray-400 hover:text-white'
            }`}
          >
            {t.nav.intelligenceBrief}
          </button>

          <button
            onClick={() => handleNavClick('confidentiality')}
            className={`transition-colors ${
              activeSection === 'confidentiality' ? 'text-white font-semibold' : 'text-gray-400 hover:text-white'
            }`}
          >
            {t.nav.confidentiality}
          </button>

          <button
            onClick={() => handleNavClick('contact')}
            className={`transition-colors ${
              activeSection === 'contact' ? 'text-white font-semibold' : 'text-gray-400 hover:text-white'
            }`}
          >
            {t.nav.contact}
          </button>
        </nav>

        {/* Right side CTAs & Language Switcher */}
        <div className="flex items-center gap-3">
          {/* Multilingual Selector */}
          <div className="flex items-center bg-[#101216] border border-[#22252e] p-0.5">
            <Globe className="w-3.5 h-3.5 text-gray-400 ml-2 mr-1 hidden sm:inline-block" />
            {languages.map((item) => (
              <button
                key={item.code}
                onClick={() => setLanguage(item.code)}
                className={`px-2 py-1 text-[11px] font-mono-tech transition-colors ${
                  language === item.code
                    ? 'bg-[#A40000] text-white font-bold'
                    : 'text-gray-400 hover:text-white hover:bg-[#1a1c24]'
                }`}
                title={`Switch to ${item.label}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Telegram Contact Button */}
          <a
            href="https://t.me/blackdaystriker"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono-tech uppercase bg-[#0088cc]/15 hover:bg-[#0088cc]/25 text-[#38bdf8] border border-[#0088cc]/30 transition-all hover:border-[#0088cc]/60"
            title="Open official Telegram channel"
          >
            <Send className="w-3.5 h-3.5" />
            <span className="hidden md:inline">TELEGRAM</span>
          </a>

          {/* Primary CTA: Confidential Briefing */}
          <button
            onClick={onOpenBriefing}
            className="flex items-center gap-2 px-4 py-2 text-xs font-mono-tech tracking-wider uppercase bg-[#A40000] hover:bg-[#c40000] text-white transition-all shadow-[0_0_15px_rgba(164,0,0,0.3)] hover:shadow-[0_0_20px_rgba(196,0,0,0.5)] active:scale-95"
          >
            <Lock className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{t.hero.btnBriefing}</span>
            <span className="sm:hidden">BRIEFING</span>
          </button>

          {/* Mobile menu hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-gray-400 hover:text-white hover:bg-[#15171f] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#07080b] border-b border-[#22242c] px-6 py-6 space-y-4 max-h-[85vh] overflow-y-auto animate-in slide-in-from-top-4 duration-200">
          <div className="p-3 bg-[#0d0e14] border border-[#1e202a] mb-4">
            <span className="text-[10px] font-mono-tech text-gray-500 uppercase tracking-widest block mb-1">
              Active Official Emblem
            </span>
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono-tech text-white">
                {activeLogoVariant === 'principal' ? 'LOGO 2 (PRINCIPAL)' : 'LOGO 1 (SECUNDÁRIO)'}
              </span>
              <button
                onClick={onOpenEmblems}
                className="text-xs text-[#38bdf8] font-mono-tech hover:underline"
              >
                View Emblems
              </button>
            </div>
          </div>

          <div className="space-y-1 text-sm font-medium border-b border-[#1b1c24] pb-4">
            <button
              onClick={() => handleNavClick('home')}
              className="w-full text-left py-2 text-gray-300 hover:text-white"
            >
              {t.nav.home}
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="w-full text-left py-2 text-gray-300 hover:text-white"
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => handleNavClick('private-intelligence')}
              className="w-full text-left py-2 text-gray-300 hover:text-white"
            >
              {t.nav.privateIntelligence}
            </button>
            <button
              onClick={() => handleNavClick('osint')}
              className="w-full text-left py-2 text-gray-300 hover:text-white"
            >
              {t.nav.osint}
            </button>
            <button
              onClick={() => handleNavClick('cybersecurity')}
              className="w-full text-left py-2 text-gray-300 hover:text-white"
            >
              {t.nav.cybersecurity}
            </button>
            <button
              onClick={() => handleNavClick('spystriker')}
              className="w-full text-left py-2 text-[#ff6b6b] hover:text-white"
            >
              SpyStriker™ (OPSEC)
            </button>
            <button
              onClick={() => handleNavClick('anti-terrorism')}
              className="w-full text-left py-2 text-gray-300 hover:text-white"
            >
              {t.nav.antiTerrorism}
            </button>
            <button
              onClick={() => handleNavClick('rescue-guard')}
              className="w-full text-left py-2 text-gray-300 hover:text-white"
            >
              {t.nav.rescueGuard}
            </button>
            <button
              onClick={() => handleNavClick('protection')}
              className="w-full text-left py-2 text-gray-300 hover:text-white"
            >
              {t.nav.protection}
            </button>
            <button
              onClick={() => handleNavClick('investigations')}
              className="w-full text-left py-2 text-gray-300 hover:text-white"
            >
              {t.nav.investigations}
            </button>
            <button
              onClick={() => handleNavClick('critical-infrastructure')}
              className="w-full text-left py-2 text-gray-300 hover:text-white"
            >
              {t.nav.criticalInfra}
            </button>
            <button
              onClick={() => handleNavClick('maritime')}
              className="w-full text-left py-2 text-gray-300 hover:text-white"
            >
              {t.nav.maritime}
            </button>
            <button
              onClick={() => handleNavClick('international')}
              className="w-full text-left py-2 text-gray-300 hover:text-white"
            >
              {t.nav.international}
            </button>
            <button
              onClick={() => handleNavClick('methodology')}
              className="w-full text-left py-2 text-gray-300 hover:text-white"
            >
              {t.nav.methodology}
            </button>
            <button
              onClick={() => handleNavClick('intelligence-brief')}
              className="w-full text-left py-2 text-gray-300 hover:text-white"
            >
              {t.nav.intelligenceBrief}
            </button>
            <button
              onClick={() => handleNavClick('confidentiality')}
              className="w-full text-left py-2 text-gray-300 hover:text-white"
            >
              {t.nav.confidentiality}
            </button>
            <button
              onClick={() => handleNavClick('compliance')}
              className="w-full text-left py-2 text-gray-300 hover:text-white"
            >
              {t.nav.compliance}
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full text-left py-2 text-gray-300 hover:text-white"
            >
              {t.nav.contact}
            </button>
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <a
              href="https://t.me/blackdaystriker"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 text-center font-mono-tech text-xs uppercase bg-[#0088cc]/20 border border-[#0088cc]/40 text-[#38bdf8] flex items-center justify-center gap-2"
            >
              <Send className="w-3.5 h-3.5" />
              TELEGRAM: BLACKDAY STRIKER
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBriefing();
              }}
              className="w-full py-2.5 px-4 text-center font-mono-tech text-xs uppercase bg-[#A40000] text-white flex items-center justify-center gap-2"
            >
              <Lock className="w-3.5 h-3.5" />
              {t.hero.btnBriefing}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
