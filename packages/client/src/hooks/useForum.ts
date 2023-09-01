import { useCallback } from 'react'

import { RowTopic, useAddTopicMutation } from '@/app/redux'

import { useAppSelector } from './useAppSelector'

/**
 *  Тут только действия, но можно проверить что выдаст get
 */

export const useForum = () => {
  const [addTopic, { isLoading }] = useAddTopicMutation()
  const user = useAppSelector(state => state.user.currentUser)
  /*
    const dispatch = useAppDispatch()
    const { updTopic } = forumSlice.actions
  */

  const handleAddTopic = useCallback(
    async (values: { title: string; message: string }) => {
      const newTopic: RowTopic = {
        author_name: user!.display_name,
        title: values.title,
        message: values.message,
      }
      await addTopic(newTopic)
        .unwrap()
        .then(res => console.log(res))
    },
    [addTopic, user]
  )

  return {
    handleAddTopic,
    isLoading,
  }
}
