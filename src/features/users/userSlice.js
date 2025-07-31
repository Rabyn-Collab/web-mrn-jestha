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
    },

    updateUser: (state, action) => {
      state.users = state.users.map((user) => {
        return user.id === action.payload.id ? action.payload : user
      });

      setToLocal(state.users);

    },

    removeUser: (state, action) => {
      state.users.splice(action.payload, 1);
      setToLocal(state.users);
    }


  }


});

export const { addUser, removeUser, updateUser } = userSlice.actions;