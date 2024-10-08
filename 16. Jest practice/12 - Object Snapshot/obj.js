import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    addUser: (state, action) => {
      const foundUser = state.findIndex((i) => i.name == action.payload.name);
      console.log(foundUser);

      if (foundUser >= 0) {
        state[foundUser] = action.payload;
        return;
      }
      state.push(action.payload);
    },
  },
});

export const { addUser } = usersSlice.actions;
const usersReducer = usersSlice.reducer;
export default usersReducer;
