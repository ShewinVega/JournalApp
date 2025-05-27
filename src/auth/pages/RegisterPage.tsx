import React, { useMemo, useState } from "react";
import { Link as RouterLink } from "react-router";
import {
  Grid,
  Typography,
  Button,
  Link,
  TextField,
  Alert,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import { AuthLayout } from "../layout/AuthLayout";
import { formValidations } from "../form-validations";
import { useForm } from "@hooks";
import { InputErrors } from "@components";
import { starCreatingUserWithEmailPassword, AppDispatch } from "@store";
import { AuthSliceInterface } from "@interfaces";

const formData = {
  displayName: "",
  email: ``,
  password: ``,
};

export const RegisterPage = () => {
  // translation and redux management
  const { t } = useTranslation(); // i18N translation;
  const dispatch: AppDispatch = useDispatch((state) => state.auth);
  const { errorMessage, status }: AuthSliceInterface = useSelector(
    (state) => state.auth,
  );

  // variabls
  const [formSubmitted, setFormSubmitted] = useState(false);
  const isCheckingAuthentication = useMemo(
    () => status === "checking",
    [status],
  );

  const {
    email,
    password,
    displayName,
    onInputChange,
    isFormValid,
    formState,
    emailValid,
    passwordValid,
    displayNameValid,
  } = useForm(formData, formValidations);

  // submit funcntion
  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    if (!isFormValid) return;

    dispatch(starCreatingUserWithEmailPassword(formState));
  };

  return (
    <AuthLayout title="titles.register">
      <form
        onSubmit={onSubmit}
        className="animate__animated animate__fadeIn animate__faster"
      >
        <Grid container flexDirection="column" gap="2px">
          <Grid container spacing={2} sx={{ mb: 2 }}>
            <TextField
              label={t("fields.name.base")}
              name="displayName"
              type="text"
              placeholder={t("fields.name.placeholder")}
              value={displayName}
              fullWidth
              error={!!displayNameValid && formSubmitted}
              helperText={
                displayNameValid && formSubmitted ? (
                  <InputErrors errors={[displayNameValid]} />
                ) : (
                  ""
                )
              }
              onChange={onInputChange}
            />
            <TextField
              label={t("fields.email.base")}
              name="email"
              type="email"
              placeholder={t("fields.email.placeholder")}
              value={email}
              fullWidth
              error={!!emailValid && formSubmitted}
              helperText={
                emailValid && formSubmitted ? (
                  <InputErrors errors={[emailValid]} />
                ) : (
                  ""
                )
              }
              onChange={onInputChange}
            />
            <TextField
              label={t("fields.password.base")}
              name="password"
              type="password"
              value={password}
              fullWidth
              error={!!passwordValid && formSubmitted}
              helperText={
                passwordValid && formSubmitted ? (
                  <InputErrors errors={[passwordValid]} />
                ) : (
                  ""
                )
              }
              onChange={onInputChange}
            />
          </Grid>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid display={!!errorMessage ? "" : "none"} size={12}>
              <Alert severity="error">{errorMessage}</Alert>
            </Grid>
            <Grid size={12}>
              <Button
                disabled={isCheckingAuthentication}
                type="submit"
                variant="contained"
                fullWidth
              >
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
