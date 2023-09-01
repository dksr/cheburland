import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type TopicType = {
  id: number
  title: string
  replies_count: number
  comment: CommentType[]
}

type CommentType = {
  author_name: string
  message: string
  commentId: number
  create_at: string
  reply: ReplyType[]
}

type ReplyType = {
  author_name: string
  message: string
  create_at: string
}

type ForumState = {
  topicList: TopicType[] | null
  isAuth: boolean
}

const initialState: ForumState = {
  topicList: null,
  isAuth: false,
}

export const forumSlice = createSlice({
  name: 'forum',
  initialState,
  reducers: {
    updTopic(state, action: PayloadAction<TopicType[]>) {
      state.topicList = action.payload
    },
    setFromAuth(state) {
      state.isAuth = true
    },
  },
})

const { actions, reducer: forumReducer } = forumSlice
export const { updTopic } = actions
export default forumReducer
