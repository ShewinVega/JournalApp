import React from "react";
import { Link as RouterLink } from "react-router";
import { Grid, Typography, Button, Link } from "@mui/material";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.ts";
import { CustomInput } from "@components/CustomInputs";
import { FormSchema, FormValues } from "@models/CustomForm";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { AuthLayout } from "../layout/AuthLayout";

export const RegisterPage = () => {
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
    <AuthLayout title="titles.register">
      <form onSubmit={handleSubmit()}>
        <Grid container flexDirection="column" gap="2px">
          <Grid container spacing={2} sx={{ mb: 2 }}>
            <CustomInput
              name="fullName"
              label={t("fields.name.base")}
              control={control}
              type="text"
              placeholder={t("fields.name.placeholder")}
              error={errors.fullName}
            />
            <CustomInput
              name="email"
              label={t("fields.email.base")}
              control={control}
              type="email"
              placeholder={t("fields.email.placeholder")}
              error={errors.email}
            />
            <CustomInput
              name="password"
              label={t("fields.password.base")}
              control={control}
              type="password"
              placeholder={t("fields.password.placeholder")}
              error={errors.password}
            />
          </Grid>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid size={12}>
              <Button variant="contained" fullWidth>
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
