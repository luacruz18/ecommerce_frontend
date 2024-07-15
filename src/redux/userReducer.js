import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { token: localStorage.getItem("token") || null },
  reducers: {
    addUser(state, action) {
      state.token = action.payload.token;
      localStorage.setItem("token", action.payload.token);
    },
    removeUser(state) {
      state.token = null;
      localStorage.removeItem("token"); 
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
