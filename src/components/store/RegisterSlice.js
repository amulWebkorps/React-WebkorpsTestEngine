import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hName: "",
  email: "",
  hNumber: "",
  password: "",
};
const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    credentialData(state, action) {
      state.push(action.payload);
    },
  },
});

export const registerState = (state) => state.register;

export const credentialData = registerSlice.actions;

export default registerSlice.reducer;
