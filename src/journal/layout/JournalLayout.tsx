import { Box } from "@mui/system";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

// const drawerWith = 240;
export const JournalLayout = ({ children }: Props) => {
  return (
    <Box sx={{ display: "flex" }}>
      {/* Navbar */}
      {/* SideBar */}

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* Toolbar */}
        {children}
      </Box>
    </Box>
  );
};
