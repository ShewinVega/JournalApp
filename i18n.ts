import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// import i18nBackend from "i18next-http-backend";

import es from "./src/locales/es.json";
import en from "./src/locales/en.json";

const verifyLanguageSelected: string =
  localStorage.getItem("i18nextLng") || "en";

const resources = {
  es: {
    translation: es,
  },
  en: {
    translation: en,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: verifyLanguageSelected,
});

export default i18n;
