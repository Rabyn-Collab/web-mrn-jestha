import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../features/users/userSlice.js";






export const store = configureStore({
  reducer: {
    userSlice: userSlice.reducer
  }
});