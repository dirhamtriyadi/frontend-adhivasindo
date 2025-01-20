import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import modulReducer from "../features/modulSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    modul: modulReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
