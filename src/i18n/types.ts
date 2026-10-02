export type SupportedLanguage = 'en' | 'pt' | 'ru' | 'de' | 'fr' | 'he';

export interface TranslationDictionary {
  brand: {
    name: string;
    tagline: string;
    positioning: string;
    secondarySlogan: string;
    criticalIdea: string;
  };
  nav: {
    home: string;
    about: string;
    capabilities: string;
    privateIntelligence: string;
    osint: string;
    cybersecurity: string;
    antiTerrorism: string;
    spyStriker: string;
    rescueGuard: string;
    protection: string;
    investigations: string;
    criticalInfra: string;
    maritime: string;
    international: string;
    crisisRisk: string;
    methodology: string;
    confidentiality: string;
    compliance: string;
    intelligenceBrief: string;
    contact: string;
    requestBriefing: string;
    telegramButton: string;
  };
  hero: {
    badge: string;
    headline: string;
    subheadline: string;
    statement: string;
    btnBriefing: string;
    btnCapabilities: string;
    systemStatus: string;
    activeRegions: string;
    coordinationLead: string;
  };
  valueProp: {
    title: string;
    subtitle: string;
    card1Title: string;
    card1Desc: string;
    card2Title: string;
    card2Desc: string;
    card3Title: string;
    card3Desc: string;
  };
  confidentiality: {
    heading: string;
    lead: string;
    badge1: string;
    badge2: string;
    badge3: string;
    badge4: string;
    badge5: string;
    badge6: string;
    classificationTitle: string;
    levels: {
      public: { label: string; desc: string };
      internal: { label: string; desc: string };
      confidential: { label: string; desc: string };
      strictlyConfidential: { label: string; desc: string };
    };
  };
  services: {
    sectionTitle: string;
    sectionSubtitle: string;
    ctaButton: string;
    privateIntel: {
      title: string;
      desc: string;
      items: string[];
    };
    osint: {
      title: string;
      tagline: string;
      desc: string;
      pipeline: string[];
      items: string[];
    };
    cybersecurity: {
      title: string;
      desc: string;
      notice: string;
      cta: string;
      items: string[];
    };
    antiTerrorism: {
      title: string;
      tagline: string;
      desc: string;
      framework: string[];
      items: string[];
    };
    spyStriker: {
      title: string;
      tagline: string;
      desc: string;
      items: string[];
    };
    rescueGuard: {
      title: string;
      tagline: string;
      desc: string;
      notice: string;
      items: string[];
    };
    protection: {
      title: string;
      executiveTitle: string;
      executiveItems: string[];
      assetTitle: string;
      assetItems: string[];
      travelTitle: string;
      travelItems: string[];
    };
    investigations: {
      title: string;
      principles: string[];
      desc: string;
      items: string[];
    };
    criticalInfra: {
      title: string;
      desc: string;
      sectors: string[];
      items: string[];
    };
    maritime: {
      title: string;
      desc: string;
      frameworks: string[];
      items: string[];
    };
    crisisRisk: {
      title: string;
      tagline: string;
      cycle: string[];
      desc: string;
      items: string[];
    };
  };
  international: {
    title: string;
    subtitle: string;
    statement: string;
    coreIdea: string;
    regions: {
      name: string;
      details: string;
      focus: string;
    }[];
  };
  methodology: {
    title: string;
    subtitle: string;
    stages: {
      number: string;
      name: string;
      desc: string;
      details: string[];
    }[];
    confidenceTitle: string;
    confidenceSubtitle: string;
    confidenceLevels: {
      level: string;
      title: string;
      desc: string;
    }[];
  };
  clientSegments: {
    title: string;
    subtitle: string;
    sectors: string[];
  };
  whyUs: {
    title: string;
    pillars: {
      name: string;
      desc: string;
    }[];
  };
  briefing: {
    title: string;
    subtitle: string;
    warning: string;
    cta: string;
    form: {
      name: string;
      organization: string;
      role: string;
      country: string;
      language: string;
      category: string;
      urgency: string;
      urgencyOptions: {
        routine: string;
        priority: string;
        critical: string;
      };
      contactMethod: string;
      contactMethodOptions: {
        protonmail: string;
        telegram: string;
        secureCall: string;
      };
      objective: string;
      ndaRequired: string;
      consent: string;
      submitBtn: string;
      successTitle: string;
      successMsg: string;
    };
  };
  intelligenceBrief: {
    title: string;
    subtitle: string;
    readMore: string;
    confidence: string;
    category: string;
    disclaimer: string;
  };
  criticalSecurity: {
    badge: string;
    title: string;
    subtitle: string;
    defensiveFrameworkTitle: string;
    frameworkSteps: {
      phase: string;
      title: string;
      desc: string;
    }[];
    scenariosTitle: string;
    scenariosSubtitle: string;
    scenarios: {
      id: string;
      title: string;
      threatLevel: string;
      target: string;
      vector: string;
      defense: string;
    }[];
    vulnerabilityAuditsTitle: string;
    tabletopTitle: string;
    tabletopDesc: string;
    ctaButton: string;
  };
  compliance: {
    title: string;
    subtitle: string;
    statement: string;
    disclaimer: string;
    points: string[];
  };
  footer: {
    brandSubtitle: string;
    directContact: string;
    telegramNotice: string;
    rights: string;
    disclaimer: string;
  };
}
