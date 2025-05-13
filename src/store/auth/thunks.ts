import { signInWithGoogle } from "../../firebase/providers-firebase";
import { GoogleCredentials, Response } from "../../interfaces";
import { AppDispatch } from "../store";
import { checkCredentials, login, logout } from "./auth-slice";

export const checkingAuthentication = (email, password) => {
  return async (dispatch: AppDispatch): Promise<void> => {
    dispatch(checkCredentials());
  };
};

export const startGoogleSignIn = () => {
  return async (
    dispatch: AppDispatch,
  ): Promise<Response<GoogleCredentials>> => {
    dispatch(checkCredentials());

    const { error, message, code, data } = await signInWithGoogle();

    if (error) {
      dispatch(logout({ message }));
      return {
        error,
        code,
        message,
      };
    }

    dispatch(login({ message, ...data }));
    return {
      error,
      code,
      message,
      data,
    };
  };
};
