import React, { useMemo } from "react";
import { Link as RouterLink } from "react-router";
import { Grid, Typography, Button, Link, TextField } from "@mui/material";
import { Google } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "@hooks/useForm";
import { checkingAuthentication, startGoogleSignIn } from "@store/auth";

export const LoginPage = () => {
  // Translation
  const { t } = useTranslation();

  // Redux
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.auth);

  const { email, password, onInputChange } = useForm({
    email: `edwinvega201196@gmail.com`,
    password: `**********`,
  });

  const isAuthenticated = useMemo(() => status === "checking", [status]);

  // Simple signIn
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(checkingAuthentication());
  };

  // Google signIn
  const onGoogleSignIn = () => {
    console.info("Info onGoogleSignIn");
    dispatch(startGoogleSignIn());
  };

  return (
    <AuthLayout title="titles.login">
      <form onSubmit={onSubmit}>
        <Grid container flexDirection="column" gap="2px">
          <Grid container spacing={2} sx={{ mb: 2 }}>
            <TextField
              label={t("fields.email.base")}
              name="email"
              type="email"
              placeholder={t("fields.email.placeholder")}
              value={email}
              fullWidth
              onChange={onInputChange}
            />
            <TextField
              label={t("fields.password.base")}
              name="password"
              type="password"
              value={password}
              fullWidth
              onChange={onInputChange}
            />
          </Grid>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Button
                disabled={isAuthenticated}
                type="submit"
                variant="contained"
                fullWidth
              >
                {t("buttons.login")}
              </Button>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Button
                disabled={isAuthenticated}
                onClick={onGoogleSignIn}
                variant="contained"
                fullWidth
              >
                <Google />
                <Typography sx={{ ml: 1 }}>{t("buttons.google")}</Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end" sx={{ mt: 2 }}>
            <Link component={RouterLink} color="inherit" to="/auth/register">
              {t("auth_titles.create_account")}
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
