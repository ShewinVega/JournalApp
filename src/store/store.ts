import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth";
import { journalSlice } from "./journal";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    journal: journalSlice.reducer,
  },
});

// Infer these types from the store itself.
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
