
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

export const supportedLngs = {
  en: 'English',
  ka: 'Georgian',
  ru: 'Russian',
  tr: 'Turkish',
  ar: 'Arabic',
  zh: 'Chinese',
  az: 'Azerbaijani',
};

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: Object.keys(supportedLngs),
    fallbackLng: 'en',
    debug: import.meta.env.DEV, // Enable debug mode in development
    interpolation: {
      escapeValue: false, // React already safes from xss
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  });

export default i18n;
  