import { useForm } from "../../hooks";
import { useEffect, useMemo, useRef } from "react";

import {
  DeleteOutline,
  SaveOutlined,
  UploadOutlined,
} from "@mui/icons-material";
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import { ImageGallery } from "@components";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";

import { AppDispatch, RootState } from "../../store";
import {
  setActiveNote,
  starDeletingNote,
  startSaveNote,
  starUploadingImages,
} from "../../store/journal";

export const NoteView = () => {
  const { t } = useTranslation();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const dispatch: AppDispatch = useDispatch();

  const {
    active: note,
    isSaving,
    messageSaved,
  } = useSelector((state: RootState) => state.journal);
  const { title, body, date, onInputChange, formState } = useForm(note);

  const dateString = useMemo(() => {
    const newDate = new Date(date);
    return newDate.toUTCString();
  }, [date]);

  // set the active note
  useEffect(() => {
    dispatch(setActiveNote(formState));
  }, [formState]);

  // get the success message after update the note selected
  useEffect(() => {
    if (messageSaved.length > 0) {
      Swal.fire("Nota actualizada", messageSaved, "success");
    }
  }, [messageSaved]);

  const handleSaveNote = () => {
    dispatch(startSaveNote());
  };

  const onFileInputChange = (event: any) => {
    if (event.target.files === 0) return;
    dispatch(starUploadingImages(event.target.files));
  };

  const onDelete = () => {
    dispatch(starDeletingNote());
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ mb: 1 }}
      className="animate__animated animate__fadeIn animate__faster"
    >
      <Grid>
        <Typography fontSize={39} fontWeight="light">
          {dateString}
        </Typography>
      </Grid>
      <Grid>
        <input
          ref={fileInputRef}
          type="file"
          multiple
          onChange={onFileInputChange}
          style={{ display: "none" }}
        />
        <IconButton
          color="primary"
          disabled={isSaving}
          onClick={() => {
            if (fileInputRef.current) {
              fileInputRef.current.click();
            }
          }}
        >
          <UploadOutlined />
        </IconButton>

        <Button
          disabled={isSaving}
          onClick={handleSaveNote}
          color="primary"
          sx={{ padding: 2 }}
        >
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          {t("buttons.save")}
        </Button>
      </Grid>
      <TextField
        label={t("fields.journal_title.base")}
        name="title"
        type="text"
        variant="filled"
        placeholder={t("fields.journal_title.placeholder")}
        value={title}
        fullWidth
        onChange={onInputChange}
      />
      <TextField
        name="body"
        variant="filled"
        type="text"
        placeholder={t("fields.journal_description.placeholder")}
        sx={{ border: "none", mb: 1 }}
        value={body}
        multiline
        fullWidth
        minRows={5}
        onChange={onInputChange}
      />
      <Grid container justifySelf="end">
        <Button onClick={onDelete} sx={{ mt: 2 }} color="error">
          <DeleteOutline />
          Borrar
        </Button>
      </Grid>
      {/* Image Gallery */}
      <ImageGallery images={note.imageUrls ?? []} />
    </Grid>
  );
};
