import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  //   initialState: {
  //     id: 4594894,
  //     firstname: "Luana",
  //     token: "fdgjmiogjeiogjreigjteriojgrihgojtrihor.gfrjeigjeriotger.erter56g",
  //   },
  reducers: {
    addUser(state, action) {
      return action.payload;
    },
    removeUser(state, action) {
      return null;
    },
  },
});

const { actions, reducer } = userSlice;
export const { addUser, removeUser } = actions;
export default reducer;
