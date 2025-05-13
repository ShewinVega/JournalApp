import React from "react";
import { Link as RouterLink } from "react-router";
import { Grid, Typography, Button, Link, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "@hooks/useForm";

const formData = {
  displayName: "Edwin Vega",
  email: `edwinvega201196@gmail.com`,
  password: `**********`,
};

// const formValidations = {
//   email: [(value: string) => value.includes("@"), "email must have an @"],
//   password: [
//     (value: string) => value.length >= 6,
//     "password must havve more than 6 characters",
//   ],
//   displayName: [(value: string) => value.length >= 1, "name is required"],
// };

export const RegisterPage = () => {
  const { t } = useTranslation(); // i18N translation;

  const {
    email,
    password,
    displayName,
    onInputChange,
    formState,
    // isFormValid,
    emailValid,
    passwordValid,
    displayNameValid,
  } = useForm(formData); // Custom form

  // submit funcntion
  const onSubmit = (event) => {
    event.preventDefault();
    console.info(formState);
  };

  return (
    <AuthLayout title="titles.register">
      <form onSubmit={onSubmit}>
        <Grid container flexDirection="column" gap="2px">
          <Grid container spacing={2} sx={{ mb: 2 }}>
            <TextField
              label={t("fields.name.base")}
              name="displayName"
              type="text"
              placeholder={t("fields.name.placeholder")}
              value={displayName}
              fullWidth
              onChange={onInputChange}
              error={displayNameValid}
              helperText={displayNameValid}
            />
            <TextField
              label={t("fields.email.base")}
              name="email"
              type="email"
              placeholder={t("fields.email.placeholder")}
              value={email}
              fullWidth
              error={emailValid}
              onChange={onInputChange}
            />
            <TextField
              label={t("fields.password.base")}
              name="password"
              type="password"
              value={password}
              fullWidth
              error={passwordValid}
              helperText={passwordValid}
              onChange={onInputChange}
            />
          </Grid>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid size={12}>
              <Button type="submit" variant="contained" fullWidth>
                {t("buttons.register")}
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end" sx={{ mt: 2 }}>
            <Typography sx={{ mr: 1 }}>{t("auth_titles.account")}</Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
              {t("auth_titles.get_logging")}
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
