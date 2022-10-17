import { createSlice } from "@reduxjs/toolkit";
// import { registerUser } from './userActions'

const initialState = {
  userInfo: "akkii",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    ulogin: (state, { payload }) => {
        console.log('payload-----',payload,'state',state);
      state.userInfo = payload;
    },
  },
});
export const { ulogin } = userSlice.actions;
export default userSlice.reducer;
