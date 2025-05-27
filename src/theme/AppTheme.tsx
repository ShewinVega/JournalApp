import { CssBaseline, ThemeProvider } from "@mui/material";
import { ReactNode } from "react";
import { purpleTheme } from "./purpleTheme";

interface Props {
  children: ReactNode;
}

export const AppTheme = ({ children }: Props) => {
  return (
    <ThemeProvider theme={purpleTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
