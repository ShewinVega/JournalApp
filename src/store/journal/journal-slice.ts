import { createSlice } from "@reduxjs/toolkit";
import { NoteInterface } from "@interfaces";

export const initialState: {
  isSaving: boolean;
  messageSaved: string;
  notes: NoteInterface[];
  active: NoteInterface | null;
} = {
  isSaving: false,
  messageSaved: "",
  notes: [],
  active: null,
};

export const journalSlice = createSlice({
  name: "journal",
  initialState,
  reducers: {
    isCreatingNote: (state) => {
      state.isSaving = true;
    },
    addNewEmptyNote: (state, action) => {
      // save the new Note
      state.notes.push(action.payload);
      state.isSaving = false;
    },
    setActiveNote: (state, action) => {
      state.active = action.payload;
      state.messageSaved = "";
    },
    setNotes: (state, action) => {
      state.notes = action.payload;
    },
    setSaving: (state) => {
      state.isSaving = true;
      state.messageSaved = "";
    },
    updateNote: (state, action) => {
      state.notes = state.notes.map((item: NoteInterface) => {
        if (item.id === action.payload.id) {
          return action.payload;
        }

        return item;
      });
      state.isSaving = false;
      state.messageSaved = `${action.payload.title} updated successfully`;
    },
    setImagesToActiveNote: (state, action) => {
      state.active!.imageUrls = [...state.active.imageUrls, ...action.payload];
      state.isSaving = false;
    },
    clearNotesLogout: (state) => {
      state.isSaving = false;
      state.messageSaved = "";
      state.notes = [];
      state.active = null;
    },
    deleteNoteById: (state, action) => {
      state.notes = state.notes.filter((item) => item.id !== action.payload.id);
      state.active = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  isCreatingNote,
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
  deleteNoteById,
  setImagesToActiveNote,
  clearNotesLogout,
} = journalSlice.actions;
