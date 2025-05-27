import { Language, LogoutOutlined, MenuOutlined } from "@mui/icons-material";
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "@constants/internationalization.constant";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { startLogout } from "../store/auth";
import { AppDispatch } from "../store";

interface Props {
  drawerWidth: number;
}

export const Navbar = ({ drawerWidth = 240 }: Props) => {
  // variables and instances
  const dispatch: AppDispatch = useDispatch();

  // get the current language from the use
  let initialValue = LANGUAGES[1].toUpperCase();
  const { t, i18n } = useTranslation();
  if (i18n.options.storageLang) {
    initialValue = i18n.options.storageLang.split("-")[0];
  }

  const [currentLanguage, setCurrentLanguage] = useState(initialValue);

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
          <MenuOutlined />
        </IconButton>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
        >
          <Typography variant="h6" noWrap component="div">
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
