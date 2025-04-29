import i18n, { initI18nPromise } from "../i18n";

export const translate = async (key: string): Promise<string> => {
  await initI18nPromise;
  return i18n.t(key);
};
