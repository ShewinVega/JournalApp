import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { firebaseAuth } from "./config-firebase";
import { GoogleCredentials } from "../interfaces/google-interface";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(firebaseAuth, googleProvider);
    // const credentials = GoogleAuthProvider.credentialFromResult(result);

    const { displayName, email, photoURL, uid }: GoogleCredentials =
      result.user;

    return {
      error: false,
      code: 200,
      message: `Usuario autenticado`,
      // User information
      data: {
        displayName,
        email,
        photoURL,
        uid,
      },
    };
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;

    return {
      error: true,
      code: errorCode,
      message: errorMessage,
    };
  }
};
