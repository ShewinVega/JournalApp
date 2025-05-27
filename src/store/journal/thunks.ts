import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { AppDispatch } from "@store";
import { FileInterface, NoteInterface } from "@interfaces";
import { firebaseDB } from "../../firebase/config-firebase";
import {
  addNewEmptyNote,
  deleteNoteById,
  isCreatingNote,
  setActiveNote,
  setImagesToActiveNote,
  setNotes,
  setSaving,
  updateNote,
} from "./journal-slice";
import { filesUpload, loadNotes } from "@helpers";

export const startNote = () => {
  return async (dispatch: AppDispatch, getState) => {
    dispatch(isCreatingNote()); // call the method for change the isSaving status for disable the add button

    const { uid } = getState().auth;

    const newNote: NoteInterface = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };

    //Create the reference
    const newDoc = doc(collection(firebaseDB, `${uid}/Journal/notes`));

    // Save the note in firestore
    await setDoc(newDoc, newNote);

    // get the id from our reference
    newNote.id = newDoc.id;

    dispatch(addNewEmptyNote(newNote));
    dispatch(setActiveNote({ ...newNote, imageUrls: [] }));
  };
};

export const startLoadingNotes = () => {
  return async (dispatch: AppDispatch, getState) => {
    const { uid } = getState().auth;
    if (!uid) throw new Error(`El UID de usuario no existe`);

    const notes: NoteInterface[] = await loadNotes(uid);

    dispatch(setNotes(notes));
  };
};

export const startSaveNote = () => {
  return async (dispatch: AppDispatch, getState) => {
    dispatch(setSaving());

    // get user uid
    const { uid } = getState().auth;
    if (!uid) throw new Error(`El UID de usuario no existe`);

    // Get the current note with changes
    const { active: note } = getState().journal;
    if (!note) throw new Error(`El UID de usuario no existe`);

    // Build the object without the ID.
    const noteFireStore: NoteInterface = { ...note };
    delete noteFireStore.id;

    // Create the reference
    const docRef = doc(firebaseDB, `${uid}/Journal/notes/${note.id}`);
    await setDoc(docRef, noteFireStore, { merge: true });

    dispatch(updateNote(note));
  };
};

export const starUploadingImages = (files: FileInterface[]) => {
  return async (dispatch: AppDispatch) => {
    dispatch(setSaving());

    console.log(files[0]);

    const imagesUploaded = [];
    for (const file of files) {
      imagesUploaded.push(filesUpload(file));
    }

    //get the images
    const photosUrls: string[] = await Promise.all(imagesUploaded);
    dispatch(setImagesToActiveNote(photosUrls));
  };
};

export const starDeletingNote = () => {
  return async (dispatch: AppDispatch, getState) => {
    const { uid } = getState().auth;
    const { active: note } = getState().journal;

    const docRef = doc(firebaseDB, `${uid}/Journal/notes/${note.id}`);
    await deleteDoc(docRef);

    dispatch(deleteNoteById(note));
  };
};
