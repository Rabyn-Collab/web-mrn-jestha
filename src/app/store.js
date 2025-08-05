import { configureStore } from "@reduxjs/toolkit";
import { articleApi } from "../features/articles/articleApi.js";
import { cocktailApi } from "../features/cocktail/cocktailApi.js";


// const per = {
//   name: 'hello'
// };

// const c = {
//   [per.name]: 'sello'
// }


export const store = configureStore({
  reducer: {
    [articleApi.reducerPath]: articleApi.reducer,
    [cocktailApi.reducerPath]: cocktailApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
    articleApi.middleware,
    cocktailApi.middleware
  ])
});