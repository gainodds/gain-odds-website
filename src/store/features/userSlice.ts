import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../interfaces";

interface State {
  allUsers: User[] | null
}

const initialState: State = {
  allUsers: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateAllUsers: (state, action) => {
      // update the user state object with the object from the backend
      state.allUsers = action.payload;
    },
  },
});

export const { updateAllUsers } = userSlice.actions;

export default userSlice.reducer;
