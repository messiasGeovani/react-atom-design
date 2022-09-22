import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./Profile.store";

const store = configureStore({
  reducer: {
    profile: profileReducer.reducer,
  },
});

export default store;
