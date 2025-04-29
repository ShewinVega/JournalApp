import React from "react";
import { Link as RouterLink } from "react-router";
import {
  Grid,
  Typography,
  Card,
  styled,
  CardContent,
  Box,
  Button,
  Link,
} from "@mui/material";
import { Google } from "@mui/icons-material";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.ts";
import { InputForm } from "../components/CustomInputs";
import { useForm } from "react-hook-form";
import { FormSchema, FormValues } from "../models/CustomForm";
import { useTranslation } from "react-i18next";

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

  // card style
  const StyledCard = styled(Card)({
    maxWidth: 400,
    // maxHeight: 300,
    margin: "auto",
    padding: 10,
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyItems: "center",
  });

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyItems="center"
      sx={{ backgroundColor: "primary.main", minHeight: "100vh" }}
    >
      <StyledCard>
        <CardContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mb: 3,
            }}
          >
            <Typography variant="h5" component="h2" sx={{ mb: 1 }}>
              {t("titles.login")}
            </Typography>
          </Box>
          <form onSubmit={handleSubmit()}>
            <Grid container flexDirection="column" gap="2px">
              <Grid container spacing={2} sx={{ mb: 2 }}>
                <InputForm
                  name="email"
                  label={t("fields.email.base")}
                  control={control}
                  type="email"
                  error={errors.email}
                />
                <InputForm
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
                    <Typography sx={{ ml: 1 }}>
                      {t("buttons.google")}
                    </Typography>
                  </Button>
                </Grid>
              </Grid>
              <Grid container direction="row" justifyContent="end">
                <Link
                  component={RouterLink}
                  color="inherit"
                  to="/auth/register"
                >
                  Crear una cuenta
                </Link>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </StyledCard>
    </Grid>
  );
};
