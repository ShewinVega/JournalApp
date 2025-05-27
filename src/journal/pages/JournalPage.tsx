import React from "react";
import { JournalLayout } from "../layout/JournalLayout";
import { NothingSelectedView, NoteView } from "../views";
import { IconButton } from "@mui/material";
import { AddOutlined } from "@mui/icons-material";
import { AppDispatch } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { startNote } from "../../store/journal/thunks";

export const JournalPage = () => {
  const dispatch: AppDispatch = useDispatch();
  const { isSaving, active: activeNote } = useSelector(
    (state) => state.journal,
  );

  const handleNewNote = () => {
    dispatch(startNote());
  };

  return (
    <JournalLayout>
      {!!activeNote ? <NoteView /> : <NothingSelectedView />}

      <IconButton
        disabled={isSaving}
        size="large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": { backgroundColor: "error.main", opacity: 0.9 },
          position: "fixed",
          right: 50,
          bottom: 50,
        }}
        onClick={handleNewNote}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  );
};
