import React, { useState } from 'react';
import { I18nProvider, useI18n } from './i18n/index.tsx';
import { Navbar } from './components/common/Navbar.tsx';
import { Footer } from './components/common/Footer.tsx';
import { ConfidentialBriefingModal } from './components/common/ConfidentialBriefingModal.tsx';
import { LogoEmblemViewer } from './components/logos/LogoEmblemViewer.tsx';
import { HeroSection } from './components/sections/HeroSection.tsx';
import { ValuePropositionSection } from './components/sections/ValuePropositionSection.tsx';
import { ConfidentialitySection } from './components/sections/ConfidentialitySection.tsx';
import { AboutSection } from './components/sections/AboutSection.tsx';
import { ServicesGridSection } from './components/sections/ServicesGridSection.tsx';
import { CriticalSecuritySection } from './components/sections/CriticalSecuritySection.tsx';
import { MethodologySection } from './components/sections/MethodologySection.tsx';
import { GlobalOperationsSection } from './components/sections/GlobalOperationsSection.tsx';
import { IntelligenceBriefSection } from './components/sections/IntelligenceBriefSection.tsx';
import { WhyBlackdaySection } from './components/sections/WhyBlackdaySection.tsx';
import { ComplianceSection } from './components/sections/ComplianceSection.tsx';
import { ContactSection } from './components/sections/ContactSection.tsx';

function MainAppContent() {
  const { t } = useI18n();
  const [activeLogoVariant, setActiveLogoVariant] = useState<'principal' | 'secondary'>('principal');
  const [isBriefingModalOpen, setIsBriefingModalOpen] = useState(false);
  const [selectedThreatLevel, setSelectedThreatLevel] = useState<string | undefined>(undefined);
  const [isEmblemsModalOpen, setIsEmblemsModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const handleOpenBriefing = (threatLevel?: string) => {
    setSelectedThreatLevel(threatLevel);
    setIsBriefingModalOpen(true);
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#E2E8F0] selection:bg-[#A40000] selection:text-white flex flex-col font-sans">
      {/* Navigation */}
      <Navbar
        onOpenBriefing={() => handleOpenBriefing()}
        onOpenEmblems={() => setIsEmblemsModalOpen(true)}
        activeLogoVariant={activeLogoVariant}
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      {/* Main Sections */}
      <main className="flex-1">
        <HeroSection
          onOpenBriefing={(level) => handleOpenBriefing(level)}
          onExploreCapabilities={() => scrollToSection('capabilities')}
          onOpenEmblems={() => setIsEmblemsModalOpen(true)}
          activeLogoVariant={activeLogoVariant}
        />

        <ValuePropositionSection
          onSelectPillar={(pillarId) => scrollToSection(pillarId)}
        />

        <ConfidentialitySection />

        <AboutSection
          onOpenEmblems={() => setIsEmblemsModalOpen(true)}
          activeLogoVariant={activeLogoVariant}
          onOpenBriefing={() => handleOpenBriefing()}
        />

        <ServicesGridSection
          onOpenBriefing={() => handleOpenBriefing()}
        />

        <CriticalSecuritySection
          onOpenBriefing={() => handleOpenBriefing('CRITICAL')}
        />

        <MethodologySection />

        <GlobalOperationsSection />

        <IntelligenceBriefSection />

        <WhyBlackdaySection />

        <ComplianceSection />

        <ContactSection
          onOpenBriefing={() => handleOpenBriefing()}
        />
      </main>

      {/* Footer */}
      <Footer
        onNavigate={scrollToSection}
        onOpenBriefing={() => handleOpenBriefing()}
        onOpenEmblems={() => setIsEmblemsModalOpen(true)}
        activeLogoVariant={activeLogoVariant}
      />

      {/* Interactive Modals */}
      <ConfidentialBriefingModal
        isOpen={isBriefingModalOpen}
        onClose={() => {
          setIsBriefingModalOpen(false);
          setSelectedThreatLevel(undefined);
        }}
        initialThreatLevel={selectedThreatLevel}
      />

      <LogoEmblemViewer
        isOpen={isEmblemsModalOpen}
        onClose={() => setIsEmblemsModalOpen(false)}
        activeLogoVariant={activeLogoVariant}
        onSelectLogoVariant={(variant) => {
          setActiveLogoVariant(variant);
        }}
      />
    </div>
  );
}

export default function App() {
  return (
    <I18nProvider>
      <MainAppContent />
    </I18nProvider>
  );
}
