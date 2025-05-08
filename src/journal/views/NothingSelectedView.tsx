import React from "react";
import { StarBorderPurple500 } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export const NothingSelectedView = () => {
  const { t } = useTranslation();

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        backgroundColor: "primary.main",
        minHeight: "calc(100vh - 110px)",
        borderRadius: 3,
      }}
    >
      <Grid xs={12}>
        <StarBorderPurple500 sx={{ fontSize: 100, color: "white" }} />
      </Grid>
      <Grid xs={12}>
        <Typography color="white" variant="h5">
          {t("titles.create_journal")}
        </Typography>
      </Grid>
    </Grid>
  );
};
