import React, { createContext, useContext, useState, useEffect } from 'react';
import { SupportedLanguage, TranslationDictionary } from './types.ts';
import { enLocale } from './locales/en.ts';
import { ptLocale } from './locales/pt.ts';
import { ruLocale } from './locales/ru.ts';
import { deLocale } from './locales/de.ts';
import { frLocale } from './locales/fr.ts';
import { heLocale } from './locales/he.ts';

const locales: Record<SupportedLanguage, TranslationDictionary> = {
  en: enLocale,
  pt: ptLocale,
  ru: ruLocale,
  de: deLocale,
  fr: frLocale,
  he: heLocale,
};

interface I18nContextType {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  t: TranslationDictionary;
}

const I18nContext = createContext<I18nContextType | null>(null);

function detectInitialLanguage(): SupportedLanguage {
  if (typeof window === 'undefined') return 'en';

  const stored = localStorage.getItem('blackday_lang') as SupportedLanguage | null;
  if (stored && ['en', 'pt', 'ru', 'de', 'fr', 'he'].includes(stored)) {
    return stored;
  }

  const browserLang = (navigator.language || '').toLowerCase();
  if (browserLang.startsWith('pt')) return 'pt';
  if (browserLang.startsWith('ru')) return 'ru';
  if (browserLang.startsWith('de')) return 'de';
  if (browserLang.startsWith('fr')) return 'fr';
  if (browserLang.startsWith('he') || browserLang.startsWith('iw')) return 'he';

  return 'en';
}

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<SupportedLanguage>(detectInitialLanguage);

  const setLanguage = (lang: SupportedLanguage) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('blackday_lang', lang);
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr';
    } catch {
      // localStorage may fail in restricted sandboxes
    }
  };

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'he' ? 'rtl' : 'ltr';
  }, [language]);

  const value: I18nContextType = {
    language,
    setLanguage,
    t: locales[language] || locales.en,
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}
