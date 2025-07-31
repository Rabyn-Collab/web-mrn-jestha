import { createSlice } from "@reduxjs/toolkit";
import { getFromLocal, setToLocal } from "../local/local.js";





export const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
    users: getFromLocal()
  },
  reducers: {

    addUser: (state, action) => {
      state.users.push(action.payload);
      setToLocal(state.users);
    }


  }


});

export const { addUser } = userSlice.actions;