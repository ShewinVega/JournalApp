import i18n, { TFunction } from "i18next";
import i18nBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const getCurrentHost: string =
  import.meta.env.MODE === "development"
    ? "http://localhost:5173"
    : "LINK TO PRODUCTION";

// Check the localStorage before i18next can
const storageLang: string | null = localStorage.getItem("i18nextLng");

const initI18nPromise: Promise<TFunction<"translation", undefined>> = i18n
  .use(LanguageDetector)
  .use(i18nBackend)
  .use(initReactI18next)
  .init({
    fallbackLng: "es",
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: `${getCurrentHost}/i18n/{{lng}}.json`,
    },
    storageLang,
  });

export { initI18nPromise };
export default i18n;
