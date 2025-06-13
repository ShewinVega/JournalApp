import React from "react";
import { StarBorderPurple500 } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export const NothingSelectedView: React.FC = () => {
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
      className="animate__animated animate__fadeIn animate__faster"
    >
      <Grid
        sx={{
          xs: 12,
        }}
      >
        <StarBorderPurple500 sx={{ fontSize: 100, color: "white" }} />
      </Grid>
      <Grid
        sx={{
          xs: 12,
        }}
      >
        <Typography color="white" variant="h5" noWrap>
          {t("titles.create_journal")}
        </Typography>
      </Grid>
    </Grid>
  );
};
