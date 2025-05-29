import i18next from "../../i18n";

export const messages = {
  name: {
    required: i18next.t("fields.name.required"),
    min: i18next.t("fields.name.min"),
  },
  email: {
    required: i18next.t("fields.email.required"),
    valid: i18next.t("fields.email.valid"),
  },
  password: {
    required: i18next.t("fields.password.required"),
    min: i18next.t("fields.password.min"),
  },
  confirmPassword: {
    required: i18next.t("fields.confirmPassword.required"),
    min: i18next.t("fields.confirmPassword.min"),
    match: i18next.t("fields.confirmPassword.match"),
  },
};
