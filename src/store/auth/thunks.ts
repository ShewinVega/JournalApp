import {
  signInWithGoogle,
  registerUserWithEmailPassword,
  signInWithEmailPassword,
  logoutUser,
} from "../../firebase/providers-firebase";
import { clearNotesLogout } from "../journal";
import { checkCredentials, login, logout } from "./auth-slice";
import { RegisterInterface, LoginCredentials } from "@interfaces";
import { AppDispatch } from "@store";

export const checkingAuthentication = (email, password) => {
  return async (dispatch: AppDispatch): Promise<void> => {
    dispatch(checkCredentials());
  };
};

// SignIn with  google
export const startGoogleSignIn = () => {
  return async (dispatch: AppDispatch): Promise<void> => {
    dispatch(checkCredentials());

    const { error, message, data } = await signInWithGoogle();

    if (error) {
      dispatch(logout({ message }));
    }

    dispatch(login({ ...data }));
  };
};

// SignIn with email and password
export const startSignInWithEmailAndPassword = ({
  email,
  password,
}: LoginCredentials) => {
  return async (dispatch: AppDispatch): Promise<void> => {
    dispatch(checkCredentials());

    const { error, data, message } = await signInWithEmailPassword({
      email,
      password,
    });

    if (error) {
      dispatch(logout({ message }));
      return;
    }

    // login in case the registration process is ok.
    dispatch(login({ ...data }));
  };
};

// Register with Email and Password.
export const starCreatingUserWithEmailPassword = ({
  email,
  password,
  displayName,
}: RegisterInterface) => {
  return async (dispatch): Promise<void> => {
    // First we send the "checking" status.
    dispatch(checkCredentials());

    // Now we call the register method
    const { error, message, data } = await registerUserWithEmailPassword({
      email,
      password,
      displayName,
    });

    if (error) dispatch(logout({ message }));

    // login in case the registration process is ok.
    dispatch(login({ ...data }));
  };
};

export const startLogout = () => {
  return async (dispatch: AppDispatch): Promise<void> => {
    await logoutUser();
    dispatch(clearNotesLogout());
    dispatch(logout({ message: null }));
  };
};
