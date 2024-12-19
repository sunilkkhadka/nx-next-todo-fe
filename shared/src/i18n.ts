import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en.json';
import translationJA from './locales/ja.json';

const resources = {
  en: {
    translation: translationEN
  },
  ja: {
    translation: translationJA
  }
};

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: process.env.NEXT_PUBLIC_ENVIRONMENT === 'production' ? 'ja' : 'en',
    // whitelist: ["ja", "en"],
    load: 'languageOnly',
    // nonExplicitWhitelist: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    keySeparator: false,
    nsSeparator: '|'
  });

export { i18next };
