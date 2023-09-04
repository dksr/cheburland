import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

import { FORUM_URL } from './endpoints'

export type RowTopic = {
  author_name: string
  title: string
  message: string
}

export type CommentType = {
  author_name: string
  message: string
}

export type commetQ = {
  topicId: number
  body: CommentType
}

export type replyQ = {
  topicId: number
  commentId: number
  body: CommentType
}

export const forumApi = createApi({
  reducerPath: 'forumApi',
  baseQuery: fetchBaseQuery({
    baseUrl: FORUM_URL,
    prepareHeaders(headers) {
      return headers
    },
    credentials: 'include',
  }),
  endpoints: build => ({
    getTopic: build.query<void, void>({
      query: () => '?limit=10&offset=0',
    }),
    getComment: build.query({
      query: (topicId: number) => ({
        url: `/${topicId}/comment/`,
      }),
    }),
    addTopic: build.mutation<void, RowTopic>({
      query: (body: RowTopic) => ({
        url: '',
        method: 'POST',
        body,
        responseHandler: 'text',
      }),
    }),
    addComment: build.mutation<void, commetQ>({
      query: ({ topicId, ...body }: commetQ) => ({
        url: `/${topicId}/comment/`,
        method: 'POST',
        body,
        responseHandler: 'text',
      }),
    }),
    addReply: build.mutation<void, replyQ>({
      query: ({ topicId, commentId, body }: replyQ) => ({
        url: `/${topicId}/comment/${commentId}`,
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const {
  useGetTopicQuery,
  useAddTopicMutation,
  useAddCommentMutation,
  useAddReplyMutation,
  useGetCommentQuery,
} = forumApi
