import { useDispatch } from "react-redux";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Language, LogoutOutlined } from "@mui/icons-material";
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";

import { LANGUAGES } from "@constants";
import { AppDispatch, setActiveNote, startLogout } from "@store";
import { MenuDrawer } from "./Menu";

interface Props {
  drawerWidth: number;
}

export const Navbar = ({ drawerWidth = 240 }: Props) => {
  // variables and instances
  const getStorageLanguage: string = localStorage.getItem("i18nextLng") || "en";
  const dispatch: AppDispatch = useDispatch();
  const { t, i18n } = useTranslation();

  const [currentLanguage, setCurrentLanguage] = useState(getStorageLanguage);

  const handleLanguage = () => {
    const newLanguage = LANGUAGES.find((lan) => lan != currentLanguage) || "en";
    setCurrentLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
    localStorage.setItem("i18nextLng", newLanguage);
  };

  // Logouit logic
  const handleLogout = () => {
    dispatch(startLogout());
  };

  const handleHome = () => {
    dispatch(setActiveNote(null));
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          sx={{ mr: 1, display: { sm: "none" } }}
        >
          <MenuDrawer />
        </IconButton>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
        >
          <Typography
            variant="h6"
            noWrap
            component="div"
            onClick={handleHome}
            sx={{ ":hover": { cursor: "pointer" } }}
          >
            {t("titles.journal")}
          </Typography>
          <Grid container direction="row" alignItems="center" gap="2px">
            <IconButton onClick={handleLanguage}>
              <Language fontSize="small" sx={{ color: "#fff", p: 0 }} />
              <Typography
                variant="subtitle1"
                component="div"
                sx={{ color: "#fff", mt: "2px" }}
              >
                {currentLanguage.toUpperCase()}
              </Typography>
            </IconButton>
            <IconButton onClick={handleLogout} color="error">
              <LogoutOutlined />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
