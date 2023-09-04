import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import {
  commetQ,
  RowTopic,
  useAddCommentMutation,
  useAddTopicMutation,
  useGetTopicQuery,
} from '@/app/redux'
import { useAppSelector, useRoutes } from '@/hooks'
import { Topic } from '@/pages/forum/types'
import { User } from '@/shared'

export const useForum = () => {
  const [addTopic, { isLoading }] = useAddTopicMutation()
  const [addComment] = useAddCommentMutation()
  const user = useAppSelector(state => state.user.currentUser)
  const { paths } = useRoutes()
  const navigate = useNavigate()
  /*
    const dispatch = useAppDispatch()
    const { updTopic } = forumSlice.actions
  */

  const { data } = useGetTopicQuery()
  const [handleGetTopic, setHandleGetTopic] = useState<Topic[] | []>([])

  useEffect(() => {
    // TODO: данные обновляются только после перезагрузки страницы
    if (data) setHandleGetTopic(data)
  }, [data])

  const handleAddTopic = useCallback(
    async (values: { title: string; message: string }, userTop: User) => {
      if (userTop) {
        const newTopic: RowTopic = {
          author_name: userTop.first_name,
          title: values.title,
          message: values.message,
        }
        await addTopic(newTopic)
          .unwrap()
          .then(res => console.log(res))
        navigate(paths.Forum)
      } else {
        console.log('user empty', user)
      }
    },
    [addTopic, user]
  )

  const handleAddComment = useCallback(
    async (values: { message: string }, userCurr: User) => {
      console.log('data', values, userCurr)
      const currentTopicId = parseInt(location.pathname.replace(/\D/g, ''))
      if (userCurr) {
        const newComment: commetQ = {
          topicId: currentTopicId,
          body: {
            author_name: userCurr.first_name,
            message: values.message,
          },
        }
        await addComment(newComment)
          .unwrap()
          .then(res => console.log('commentList', res))
      } else {
        console.log(user)
      }
    },
    [addComment, user]
  )

  return {
    user,
    handleAddTopic,
    isLoading,
    handleGetTopic,
    handleAddComment,
  }
}
