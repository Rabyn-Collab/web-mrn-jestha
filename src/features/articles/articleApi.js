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

    createArticle: builder.mutation({
      query: (data) => ({
        url: '/articles',
        body: data,
        method: 'POST'
      })
    })






  })





});

export const { useGetArticlesQuery, useCreateArticleMutation, useLazyGetArticlesQuery } = articleApi;