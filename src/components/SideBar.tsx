import { TurnedInNot } from "@mui/icons-material";
import {
  Box,
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";

interface Props {
  drawerWidth: number;
}

export const SideBar = ({ drawerWidth = 240 }: Props) => {
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
            Edwin Vega
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          {[`January`, "February", "March", "April", "May"].map((text) => (
            <ListItem key={text}>
              <ListItemButton>
                <ListItemIcon>
                  <TurnedInNot />
                </ListItemIcon>
                <Grid>
                  <ListItemText primary={text} />
                  <ListItemText
                    secondary={`Exercitation cillum  irure elit consecten`}
                  />
                </Grid>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
