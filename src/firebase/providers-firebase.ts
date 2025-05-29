import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import i18next from "i18next";
import { firebaseAuth } from "./config-firebase";
import {
  GoogleCredentials,
  RegisterInterface,
  LoginCredentials,
} from "../interfaces";

const googleProvider = new GoogleAuthProvider();

// SignIn Method with Google
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(firebaseAuth, googleProvider);
    // const credentials = GoogleAuthProvider.credentialFromResult(result);

    const { displayName, email, photoURL, uid }: GoogleCredentials =
      result.user;

    return {
      error: false,
      data: {
        displayName,
        email,
        photoURL,
        uid,
      },
    };
  } catch (error: any) {
    const errorCode = error.code;
    const errorMessage = error.message;

    return {
      error: true,
      code: errorCode,
      message: errorMessage,
    };
  }
};

// SignIn Method with Email and password
export const signInWithEmailPassword = async ({
  email,
  password,
}: LoginCredentials) => {
  try {
    const userCredentials = await signInWithEmailAndPassword(
      firebaseAuth,
      email,
      password,
    );

    // destructuring data
    const { uid, email: emailResponse, displayName } = userCredentials.user;

    return {
      error: false,
      data: {
        uid,
        email: emailResponse,
        displayName,
      },
    };
  } catch (error: any) {
    if (error.code === "auth/invalid-credential") {
      return {
        error: true,
        message: i18next.t("user.errors.credentials"),
      };
    }

    return {
      error: true,
      message: error.code,
    };
  }
};

// Register User
export const registerUserWithEmailPassword = async ({
  email,
  password,
  displayName,
}: RegisterInterface) => {
  try {
    // Create the profile in firebaseauth just using email and password.
    const response = await createUserWithEmailAndPassword(
      firebaseAuth,
      email,
      password,
    );

    const { uid, photoURL } = response.user;

    // Update the profile using updateProfile method from firebaseAuth and we add the displayName to our user profile.
    // when you create a user using the above method, this user automatically get signed and tat will allow us to update the current user signed.
    await updateProfile(firebaseAuth.currentUser, { displayName });

    // we return the structure response indicated by ours interfaces
    return {
      error: false,
      data: {
        uid,
        email,
        photoURL,
        displayName,
      },
    };
  } catch (error: any) {
    if (error.code === "auth/email-already-in-use") {
      return {
        error: true,
        message: i18next.t("user.errors.email"),
      };
    }
    return {
      error: true,
      message: i18next.t("user.errors.create"),
    };
  }
};

// Logout
export const logoutUser = async () => {
  try {
    await firebaseAuth.signOut();
  } catch (error: any) {
    console.log(`There was an error in logout: ${error.code}`);
    return {
      error: true,
      message: i18next.t("user.errors.logout"),
    };
  }
};
