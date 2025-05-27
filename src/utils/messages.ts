import { translate } from "./translate";

export const messages = {
  name: {
    required: translate("fields.name.required"),
    min: translate("fields.name.min"),
  },
  email: {
    required: translate("fields.email.required"),
    valid: translate("fields.email.valid"),
  },
  password: {
    required: translate("fields.password.required"),
    min: translate("fields.password.min"),
  },
  confirmPassword: {
    required: translate("fields.confirmPassword.required"),
    min: translate("fields.confirmPassword.min"),
    match: translate("fields.confirmPassword.match"),
  },
};
