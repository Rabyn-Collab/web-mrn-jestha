import { configureStore } from "@reduxjs/toolkit";
import { articleApi } from "../features/articles/articleApi.js";


// const per = {
//   name: 'hello'
// };

// const c = {
//   [per.name]: 'sello'
// }


export const store = configureStore({
  reducer: {
    [articleApi.reducerPath]: articleApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
    articleApi.middleware
  ])
});