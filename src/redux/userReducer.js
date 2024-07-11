import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { token: null },
  reducers: {
    addUser(state, action) {
      console.log("adduser", action.payload);
      state.token = action.payload.token;
      // return state;
    },
    removeUser(state) {
      console.log("removeuser", action.payload);
      state.token = null;
      return state;
    },
  },
});

const { actions, reducer } = userSlice;
export const { addUser, removeUser } = actions;
export default reducer;
