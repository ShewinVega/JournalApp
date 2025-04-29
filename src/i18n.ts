import i18n from "i18next";
import i18nBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

const getCurrentHost: string =
  import.meta.env.MODE === "development"
    ? "http://localhost:5173"
    : "LINK TO PRODUCTION";

const initI18nPromise = i18n
  .use(i18nBackend)
  .use(initReactI18next)
  .init({
    lng: localStorage.getItem("lng") || "es",
    fallbackLng: "es",
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: `${getCurrentHost}/i18n/{{lng}}.json`,
    },
  });

export { initI18nPromise };
export default i18n;
