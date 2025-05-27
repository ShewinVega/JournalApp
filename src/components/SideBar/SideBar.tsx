import { Box, Divider, Drawer, List, Toolbar, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { AuthSliceInterface, NoteInterface } from "../../interfaces";
import { SideBarItem } from "./SideBarItem";

interface Props {
  drawerWidth: number;
}

export const SideBar = ({ drawerWidth = 240 }: Props) => {
  const { displayName }: AuthSliceInterface = useSelector(
    (state) => state.auth,
  );

  const { notes } = useSelector((state) => state.journal);

  return (
    <Box
      component="nav"
      sx={{
        width: { sm: drawerWidth },
        flexShrink: { sm: 0 },
      }}
    >
      <Drawer
        variant="permanent" // could be temporary
        open
        sx={{
          display: { xs: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            {displayName}
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          {notes.map((item: NoteInterface) => (
            <SideBarItem key={item.id} {...item} />
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
