import React from "react";
import { Link as RouterLink } from "react-router";
import { Grid, Typography, Button, Link } from "@mui/material";
import { Google } from "@mui/icons-material";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.ts";
import { CustomInput } from "@components";
import { useForm } from "react-hook-form";
import { FormSchema, FormValues } from "@models/CustomForm";
import { useTranslation } from "react-i18next";
import { AuthLayout } from "../layout/AuthLayout";

export const LoginPage = () => {
  const { t } = useTranslation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    mode: "onBlur",
  });

  return (
    <AuthLayout title="titles.login">
      <form onSubmit={handleSubmit()}>
        <Grid container flexDirection="column" gap="2px">
          <Grid container spacing={2} sx={{ mb: 2 }}>
            <CustomInput
              name="email"
              label={t("fields.email.base")}
              control={control}
              type="email"
              error={errors.email}
            />
            <CustomInput
              name="password"
              label={t("fields.password.base")}
              control={control}
              type="password"
              error={errors.password}
            />
          </Grid>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Button variant="contained" fullWidth>
                {t("buttons.login")}
              </Button>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Button variant="contained" fullWidth>
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
