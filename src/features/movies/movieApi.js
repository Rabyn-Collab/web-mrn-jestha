import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const movieApi = createApi({

  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: ' https://api.themoviedb.org/3', }),


  endpoints: (builder) => ({

    getNowPlayingMovie: builder.query({
      query: () => ({
        url: '/movie/now_playing',
        params: {
          api_key: '92c1e33f015755d27a231793c44ecfed'
        },
        method: 'GET'
      })
    }),

    getPopularMovie: builder.query({
      query: (page) => ({
        url: '/movie/popular',
        params: {
          api_key: '92c1e33f015755d27a231793c44ecfed',
          page
        },
        method: 'GET'
      })
    }),

    searchMovie: builder.query({
      query: (q) => ({
        url: '/search/movie',
        params: {
          query: q,
          api_key: '92c1e33f015755d27a231793c44ecfed'
        },
        method: 'GET'
      })

    })

  })





});

export const { useGetNowPlayingMovieQuery, useGetPopularMovieQuery, useSearchMovieQuery } = movieApi;