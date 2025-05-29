import i18next from "../../i18n";

export const formValidations = {
  email: [
    (value: string) => value.includes("@"),
    i18next.t("fields.email.valid"),
  ],
  password: [
    (value: string) => value.length >= 6,
    i18next.t("fields.password.min"),
  ],
  displayName: [
    (value: string) => value.length >= 3,
    i18next.t("fields.name.min"),
  ],
};
