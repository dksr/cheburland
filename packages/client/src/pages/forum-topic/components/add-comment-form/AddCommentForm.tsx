import { Button, Flex, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'

import { useForum } from '@/hooks/useForum'

export const AddCommentForm = (): JSX.Element => {
  const form = useForm({
    initialValues: {
      message: '',
    },
  })
  const { user, handleAddComment } = useForum()
  console.log('USER', user)
  const sendComment = async (values: { message: string }) => {
    if (user) {
      await handleAddComment(values, user)
    }
  }
  return (
    <form onSubmit={form.onSubmit(values => sendComment(values))}>
      <Flex gap="xs">
        <TextInput
          w="100%"
          placeholder="Введите комментарий..."
          {...form.getInputProps('message')}
        />
        <Button type="submit">Отправить</Button>
      </Flex>
    </form>
  )
}
