import React, { ReactNode } from "react";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Box,
  styled,
} from "@mui/material";
import { useTranslation } from "react-i18next";

interface Props {
  children: ReactNode;
  title: string;
}

// card style
const StyledCard = styled(Card)({
  margin: "auto",
  padding: 3,
  borderRadius: "10px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyItems: "center",
});

export const AuthLayout = ({ children, title }: Props) => {
  // translation
  const { t } = useTranslation();

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyItems="center"
      sx={{ backgroundColor: "primary.main", minHeight: "100vh" }}
    >
      <StyledCard>
        <CardContent sx={{ width: 450 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mb: 3,
            }}
          >
            <Typography variant="h5" component="h2" sx={{ mb: 1 }}>
              {t(title)}
            </Typography>
          </Box>
          {children}
        </CardContent>
      </StyledCard>
    </Grid>
  );
};
