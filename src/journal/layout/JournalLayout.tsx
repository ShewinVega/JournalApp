import React, { ReactNode } from "react";
import { Navbar, SideBar } from "@components";
import { Box } from "@mui/system";
import { Toolbar } from "@mui/material";

interface Props {
  children: ReactNode;
}

const drawerWidth = 280;
export const JournalLayout: React.FC<Props> = ({ children }: Props) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Navbar drawerWidth={drawerWidth} />

      <SideBar drawerWidth={drawerWidth} />

      <Box component="main" sx={{ flexGrow: 1, padding: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};
