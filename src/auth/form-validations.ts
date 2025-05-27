import { translate } from "../utils";

export const formValidations = {
  email: [
    (value: string) => value.includes("@"),
    translate("fields.email.valid"),
  ],
  password: [
    (value: string) => value.length >= 6,
    translate("fields.password.min"),
  ],
  displayName: [
    (value: string) => value.length >= 3,
    translate("fields.name.min"),
  ],
};
