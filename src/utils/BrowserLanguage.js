
import { CONSTANT } from '../constants/browser';

const BrowserLanguage = {
  getBrowserLanguage() {
    return navigator.language || navigator.userLanguage;
  },

  getPrevLanguage() {
    return localStorage ? localStorage.getItem(CONSTANT.LOCAL_STORAGE_LANG_KEY) : null;
  },

  setLanguage(lang) {
    if (localStorage) {
      localStorage.setItem(CONSTANT.LOCAL_STORAGE_LANG_KEY, lang);
      return true;
    }
    return false;
  },

  getDefaultLanguage() {
    const langSet = this.getPrevLanguage();
    if (langSet) {
      return langSet;
    }
    const browserLang = this.getBrowserLanguage();
    if (browserLang) {
      const lang = '';
      for (let lang of CONSTANT.LANGUAGES) {
        if (lang && browserLang.includes(lang.key)) {
          lang = lang.key;
          break;
        }
      }
      return lang || 'en';
    }
  },
};

export default BrowserLanguage;
