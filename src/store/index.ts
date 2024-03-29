import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./Profile.store";

const store = configureStore({
  reducer: {
    profile: profileReducer.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch

export default store;
