import React from "react";
import { NoteInterface, SidebarItemInterface } from "@interfaces";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { TurnedInNot } from "@mui/icons-material";
import { Grid } from "@mui/system";
import { AppDispatch } from "../../store";
import { useDispatch } from "react-redux";
import { setActiveNote } from "../../store/journal";

export const SideBarItem: React.FC<SidebarItemInterface> = ({
  title,
  body,
  date,
  id,
  imageUrls = [],
}: NoteInterface) => {
  const dispatch: AppDispatch = useDispatch();

  const onClickNote = () => {
    dispatch(setActiveNote({ title, body, date, id, imageUrls }));
  };

  return (
    <ListItem sx={{ borderBottom: 1, borderColor: "grey.500" }}>
      <ListItemButton onClick={onClickNote}>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid>
          <ListItemText primary={title ?? ""} />
          <ListItemText secondary={body ?? ""} />
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};
