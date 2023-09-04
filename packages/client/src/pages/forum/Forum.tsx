import { Link } from 'react-router-dom'

import { Button, Flex, Paper, Title } from '@mantine/core'

import { useRoutes } from '@/hooks'
import { useForum } from '@/hooks/useForum'

import { ForumTable } from './components'

export const Forum = (): JSX.Element => {
  const { paths } = useRoutes()
  const { handleGetTopic } = useForum()

  console.log(handleGetTopic)
  // TODO: add conditions if topics undefined
  return (
    <Flex id="forum" py={16} mih={50} justify="center" align="center">
      <Paper shadow="xs" p="md">
        <Title mb="xl" ta="center">
          Форум
        </Title>
        <Flex mb="xl" justify="space-between">
          <Button component={Link} to={paths.AddForumTopic}>
            Добавить тему
          </Button>
        </Flex>
        <ForumTable topics={handleGetTopic} />
      </Paper>
    </Flex>
  )
}
