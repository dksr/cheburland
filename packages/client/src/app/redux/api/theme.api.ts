import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { API_BASE_URL } from '@/app/redux/api/endpoints'

export const themeApi = createApi({
  reducerPath: 'themeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    prepareHeaders(headers) {
      return headers
    },
    credentials: 'include',
  }),
  endpoints: build => ({
    getTheme: build.mutation<string, void>({
      query: () => ({
        url: 'theme',
      }),
    }),
    setTheme: build.mutation<void, { theme: string }>({
      query: data => ({
        url: '/theme',
        method: 'POST',
        body: data,
      }),
    }),
  }),
})

export const { useGetThemeMutation, useSetThemeMutation } = themeApi
