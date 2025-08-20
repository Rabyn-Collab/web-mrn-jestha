import { configureStore } from "@reduxjs/toolkit";
import { mainApi } from "./mainApi.js";


export const store = configureStore({
  reducer: {
    [mainApi]: mainApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
    mainApi.middleware
  ])
});