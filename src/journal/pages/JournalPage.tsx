import React, { useState } from "react";
import {
  FormControl,
  Grid,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import {
  Language,
  LANGUAGES,
} from "../../constants/internationalization.constant";
import { useTranslation } from "react-i18next";

// get language if this one exist
const languageStorage = localStorage.getItem("lng") || "es";

export const JournalPage = () => {
  // translation
  const { i18n, t } = useTranslation();

  const [currentLanguage, setCurrentLanguage] = useState<Language>({
    label: LANGUAGES.find(({ code }) => code === languageStorage)!.label,
    code: languageStorage,
  });

  // language management
  const handleLanguage = (event: SelectChangeEvent) => {
    setCurrentLanguage({
      label: LANGUAGES.find(({ code }) => code === event.target.value)!.label,
      code: event.target.value,
    });
    i18n.changeLanguage(event.target.value);
    localStorage.setItem("lng", event.target.value);
  };

  return (
    <>
      <Grid
        container
        display="flex"
        flexDirection="column"
        sx={{
          width: "100vw",
          minHeight: "100vh",
          backgroundColor: "primary.main",
        }}
      >
        <Grid
          display="flex"
          justifyContent="space-between"
          padding="20px 50px "
          sx={{
            mt: 2,
          }}
        >
          <Typography variant="h1">{t("titles.journal")}</Typography>
          <FormControl>
            <Select
              labelId="internationalization-select-label"
              id="internationalization-select"
              value={currentLanguage.code}
              label={currentLanguage.label}
              onChange={handleLanguage}
            >
              {LANGUAGES.map(({ label, code }) => (
                <MenuItem key={code} value={code}>
                  {label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
};
