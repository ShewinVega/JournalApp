import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, Typography } from "@mui/material";
import { CustomInput, ImageGallery } from "@components";
import { useTranslation } from "react-i18next";

export const NoteView = () => {
  const { t } = useTranslation();

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ mb: 1 }}
    >
      <Grid>
        <Typography fontSize={39} fontWeight="light">
          07 de mayo, 2025
        </Typography>
      </Grid>
      <Grid>
        <Button color="primary" sx={{ padding: 2 }}>
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          {t("buttons.save")}
        </Button>
      </Grid>
      <CustomInput
        isForm={false}
        type="text"
        variant="filled"
        placeholder={t("fields.journal_title.placeholder")}
        label={t("fields.journal_title.base")}
        sx={{ border: "none", mb: 1 }}
      />
      <CustomInput
        isForm={false}
        type="text"
        variant="filled"
        placeholder={t("fields.journal_description.placeholder")}
        sx={{ border: "none", mb: 1 }}
        multiline
        minRows={5}
      />
      <ImageGallery />
    </Grid>
  );
};
