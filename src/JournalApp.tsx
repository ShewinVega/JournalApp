import React from "react";
import { AppRouter } from "./router/AppRouter";
import { AppTheme } from "./theme";

export const JournalApp: React.FC = () => {
  return (
    <AppTheme>
      <AppRouter />
    </AppTheme>
  );
};
