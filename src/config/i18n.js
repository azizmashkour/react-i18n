import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import BrowserLanguage from '../utils/BrowserLanguage';
import en from '../locale/en.json';
import fr from '../locale/fr.json';
import es from '../locale/es.json';
import it from '../locale/it.json';
import de from '../locale/de.json';

const CURRENT_LANG = BrowserLanguage.getDefaultLanguage();

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { common: en },
      fr: { common: fr },
      es: { common: es },
      it: { common: it },
      de: { common: de },
    },
    fallbackLng: 'en',
    lng: CURRENT_LANG,
    ns: ['common'],
    defaultNS: 'common',
    fallbackNS: ['common'],
    interpolation: {
      escapeValue: false,
    },
    // debug only when not in production
    debug: process.env.NODE_ENV !== 'production',
  });

export default i18n;
