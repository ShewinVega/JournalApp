import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { firebaseAuth } from "../firebase/config-firebase";
import { login, logout } from "../store/auth";
import { useDispatch, useSelector } from "react-redux";
import { startLoadingNotes } from "../store/journal";
import { AppDispatch, RootState } from "../store";

export const useCheckAuth = () => {
  const { status } = useSelector((state: RootState) => state.auth);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, async (user) => {
      if (!user) return dispatch(logout({ message: null }));

      // Destructuring in order to get what we need.
      const { uid, displayName, email, photoURL } = user;

      dispatch(login({ uid, displayName, email, photoURL }));
      dispatch(startLoadingNotes());
    });
  }, []);

  return status;
};
