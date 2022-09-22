import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  firstName: "",
  lastName: "",
  image: "",
};

const reducers = {
  addProfile(state, action) {
    Object.assign(state, action.payload);
  },
};

const profile = createSlice({
  name: "profile",
  initialState: INITIAL_STATE,
  reducers,
});

export const { addProfile } = profile.actions;
export default profile;
