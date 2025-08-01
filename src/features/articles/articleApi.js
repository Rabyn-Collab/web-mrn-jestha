import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'






export const articleApi = createApi({

  reducerPath: 'articleApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://688c18f3cd9d22dda5cc11d5.mockapi.io' }),


  endpoints: (builder) => ({

    getArticles: builder.query({
      query: () => ({
        url: '/articles',
        method: 'GET',
      })

    }),





  })





});

export const { useGetArticlesQuery, useLazyGetArticlesQuery } = articleApi;