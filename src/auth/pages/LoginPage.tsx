import React, { useMemo } from "react";
import { Link as RouterLink } from "react-router";
import {
  Grid,
  Typography,
  Button,
  Link,
  TextField,
  Alert,
} from "@mui/material";
import { Google } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "@hooks";
import {
  startGoogleSignIn,
  startSignInWithEmailAndPassword,
  AppDispatch,
} from "@store";
import { AuthSliceInterface } from "@interfaces";

const formData = {
  email: `samiii@gmail.com`,
  password: `Samuel123`,
};

export const LoginPage = () => {
  // Translation
  const { t } = useTranslation();

  // Redux
  const dispatch: AppDispatch = useDispatch();
  const { status, errorMessage }: AuthSliceInterface = useSelector(
    (state) => state.auth,
  );

  const { email, password, onInputChange } = useForm(formData);

  const isAuthenticated = useMemo(() => {
    if (status === "checking") {
      return true;
    }
  }, [status]);

  // Simple signIn
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(
      startSignInWithEmailAndPassword({
        email,
        password,
      }),
    );
  };

  // Google signIn
  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  };

  return (
    <AuthLayout title="titles.login">
      <form
        onSubmit={onSubmit}
        className="animate__animated animate__fadeIn animate__faster"
      >
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
          <Grid
            display={errorMessage && !isAuthenticated ? "" : "none"}
            size={{ xs: 12 }}
          >
            <Alert severity="error">{errorMessage}</Alert>
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
