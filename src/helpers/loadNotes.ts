import { collection, getDocs } from "firebase/firestore/lite";
import { firebaseDB } from "../firebase/config-firebase";
import { NoteInterface } from "../interfaces";

export const loadNotes = async (uid = ""): Promise<NoteInterface[]> => {
  if (!uid) throw new Error(`UID does not exist!!!`);

  // Create the collection reference
  const collectionRef = collection(firebaseDB, `${uid}/Journal/notes`);

  // get all the notes
  const docs = await getDocs(collectionRef);

  const docsList = docs.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    } as NoteInterface;
  });

  return docsList;
};
