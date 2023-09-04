import { Button, Textarea, TextInput } from '@mantine/core'
import { isNotEmpty, useForm } from '@mantine/form'

import { useForum } from '@/hooks/useForum'

const initialValues = {
  title: '',
  message: '',
}

export const AddForumTopicForm = (): JSX.Element => {
  const { user, handleAddTopic } = useForum()
  const form = useForm({
    initialValues,
    validate: {
      title: isNotEmpty('Поле обязательно для заполнения'),
      message: isNotEmpty('Поле обязательно для заполнения'),
    },
  })

  return (
    <form onSubmit={form.onSubmit(values => handleAddTopic(values, user!))}>
      <TextInput
        withAsterisk
        label="Тема"
        type="text"
        mb="10px"
        {...form.getInputProps('title')}
      />
      <Textarea
        withAsterisk
        label="Сообщение"
        mb="10px"
        {...form.getInputProps('message')}
      />
      <Button fullWidth type="submit">
        Отправить
      </Button>
    </form>
  )
}
