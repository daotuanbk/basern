import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {configs} from '@app/configs';

import testEn from '@assets/jsons/locales/en/test.json';

import testVi from '@assets/jsons/locales/vi/test.json';

const resources = {
  en: {
    test: testEn,
  },
  vi: {
    test: testVi,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: configs.defaultLang,

  keySeparator: false, // we do not use keys in form messages.welcome

  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
