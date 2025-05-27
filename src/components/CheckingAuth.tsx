import React from "react";
import { CircularProgress } from "@mui/material";
import { Grid } from "@mui/system";

export const CheckingAuth = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: "100vh",
        backgroundColor: "primary.main",
        padding: 4,
      }}
    >
      <Grid direction="row" justifyContent="center">
        <CircularProgress color="warning" />
      </Grid>
    </Grid>
  );
};
